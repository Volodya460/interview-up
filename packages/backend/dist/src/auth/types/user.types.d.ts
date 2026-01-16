export type User = {
    id: string;
    email: string;
    country: string;
    role: string;
    verify: boolean;
    hashed_rt?: string | null;
};
