"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/dist/client/components/headers";

import { Cars } from "@/@types/Cars";

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

  if (res.status === 200) {
    return redirect("/");
  }

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

export async function adminCarUpdate(data: FormData) {
  "use server";

  const cookieStore = cookies();
  const token = cookieStore.get("rentals.token");
  const car_id = data.get("id");

  const allCars: Cars[] = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/cars`).then(
    (res) => res.json()
  );
  const car = allCars.find((car) => car.id === (car_id as any));
  //data.get() mesmo sem valor é definido como string, por isso é preciso a verificação === ""
  //no backend estamos verificando se for vazio = undefined, no caso do formData mesmo vazio é string
  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/car/update/${car_id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: data.get("name") === "" ? car?.name : data.get("name"),
      description: data.get("description") === "" ? car?.description : data.get("description"),
      daily_rate: data.get("daily_rate") === "" ? car?.daily_rate : data.get("daily_rate"),
      license_plate:
        data.get("license_plate") === "" ? car?.license_plate : data.get("license_plate"),
      fine_amount: data.get("fine_amount") === "" ? car?.fine_amount : data.get("fine_amount"),
      brand: data.get("brand") === "" ? car?.brand : data.get("brand"),
      category_name:
        data.get("category_name") === "" ? car?.category.category_name : data.get("category_name"),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token?.value,
    },
  });

  if (res.status === 200) {
    revalidatePath(`/details/${car_id}`);
    revalidatePath("/home");
    return redirect("/home");
  }

  return console.log(res);
}
