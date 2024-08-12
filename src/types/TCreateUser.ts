export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  varifyCode: number;
  passwordChangedAt?: Date;
  role: keyof typeof USER_ROLE;
  status: "in-progress" | "blocked" | "panding";
  isDeleted: boolean;
};

export const USER_ROLE = {
    superAdmin: "superAdmin",
    admin: "admin",
    user: "user",
  } as const;
