"use client";
import { useState } from "react";
import { revalidatePath } from "next/cache";

export function UploadPhoto({ car_id, token }: { car_id: number; token: string }) {
  const [file, setFile] = useState<File | null>(null);

  async function teste() {
    if (file) {
      const upload = new FormData();
      upload.append("image_name", file, file.name);
      const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/car/image/${car_id}`, {
        method: "PATCH",
        body: upload,
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.status === 200) {
        const win: Window = window;
        return (win.location = "/home");
      }

      return console.log(res);
    } else {
      return;
    }
  }

  return (
    <>
      <input
        type="file"
        name="image_name"
        onChange={({ target }) => target.files && setFile(target.files[0])}
      />
      <button
        className="bg-red-600 py-2"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          teste();
        }}
      >
        Salva Foto
      </button>
    </>
  );
}
