"use client";
import { useState, useTransition } from "react";
import { uploadPhoto } from "@/functions/uploadPhotoServer";

export function UploadPhoto({ car_id, token }: { car_id: number; token: string }) {
  const [pending, startTransition] = useTransition();
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit() {
    if (!file) return;

    const form = new FormData();
    form.append("image_name", file, file.name);
    const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/car/image/${car_id}`, {
      method: "PATCH",
      body: form,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (res.status === 200) {
      startTransition(() => uploadPhoto());
    }
  }

  return (
    <>
      <input
        type="file"
        name="file"
        onChange={({ target }) => target.files && setFile(target.files[0])}
      />
      <button onClick={handleSubmit} className="bg-red-600 py-2" type="submit">
        Salva Foto
      </button>
    </>
  );
}
