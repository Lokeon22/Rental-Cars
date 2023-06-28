import { cookies } from "next/dist/client/components/headers";

import { UserInfo } from "@/@types/User";

export function getUserCookies() {
  const user_cookie = cookies().get("rentals.user")?.value;
  const user: UserInfo = JSON.parse(user_cookie as string);

  const token = cookies().get("rentals.token")?.value as string;

  return { user, token };
}
