import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../store/ auth.store";

export const mainAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
  withCredentials: true, // ✅ чтобы cookie rt отправлялась на /auth/refresh
});

mainAxios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { accessToken } = useAuthStore.getState();

  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

mainAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (
    error: AxiosError & { config?: AxiosRequestConfig & { _retry?: boolean } }
  ) => {
    const originalRequest = error.config;

    // если access токен истёк → пробуем refresh 1 раз
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // ✅ refresh без Authorization: refresh token лежит в cookie rt
        const resp = await mainAxios.post<{ access_token: string }>(
          "/auth/refresh",
          undefined
        );

        const { access_token } = resp.data;
        useAuthStore.getState().setAccessToken(access_token);

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${access_token}`;

        return mainAxios.request(originalRequest);
      } catch (refreshErr) {
        // refresh не прошёл → чистим access token
        useAuthStore.getState().clear();
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(error);
  }
);
