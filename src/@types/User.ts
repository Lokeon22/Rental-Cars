export type User = {
  user: UserInfo;
  token: string;
};

export type UserInfo = {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  drive_license: string | null;
  is_admin: boolean;
  created_at: Date;
};
