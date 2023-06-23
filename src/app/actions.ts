"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/dist/client/components/headers";

export async function userCreate(data: FormData) {
  "use server";

  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/register`, {
    method: "POST",
    body: JSON.stringify({
      name: data.get("name"),
      username: data.get("username"),
      drive_license: data.get("drive_license"),
      email: data.get("email"),
      password: data.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return console.log(res);
}

export async function userUpdate(data: FormData) {
  "use server";

  const cookieStore = cookies();
  const token = cookieStore.get("rentals.token");

  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/user/update`, {
    method: "PUT",
    body: JSON.stringify({
      username: data.get("username"),
      email: data.get("email"),
      drive_license: data.get("drive_license"),
      oldpassword: data.get("oldpassword"),
      newpassword: data.get("newpassword"),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token?.value,
    },
  });

  revalidatePath("/profile");

  return console.log(res);
}
