"use server";

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
