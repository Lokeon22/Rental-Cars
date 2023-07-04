"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface TesteProps {
  form: FormData;
  car_id: number;
  token: string;
  file: File | null;
}

export async function teste({ car_id, form, token, file }: TesteProps) {
  "use server";

  if (form && file) {
    form.append("image_name", file, file.name);
    const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/car/image/${car_id}`, {
      method: "PATCH",
      body: form,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res);

    revalidatePath("/home");
    revalidatePath(`/details/${car_id}`);
    return redirect("/home");
  }
}
