import { mainAxios } from "@/src/lib/api/mainAxios";

export type LoginResponse = { access_token: string };

export async function apiRegister(data: {
  username: string;
  email: string;
  password: string;
  country: string;
}) {
  const res = await mainAxios.post<string>("/auth/register", data);
  return res.data; // строка-сообщение
}

export async function apiVerifyEmail(data: { verificationCode: string }) {
  const res = await mainAxios.post<string>("/auth/verify", data);
  return res.data; // строка-сообщение
}

export async function apiResendCode(data: { email: string }) {
  const res = await mainAxios.post<string>("/auth/resend", data);
  return res.data;
}

export async function apiLogin(data: { email: string; password: string }) {
  const res = await mainAxios.post<LoginResponse>("/auth/login", data);
  return res.data; // { access_token }
}

export async function apiLogout() {
  await mainAxios.post("/auth/logout");
}
