"use client";
import { useState, useTransition } from "react";
import { teste } from "@/functions/uploadPhotoServer";

export function UploadPhoto({ car_id, token }: { car_id: number; token: string }) {
  const [pending, startTransition] = useTransition();
  const [file, setFile] = useState<File | null>(null);

  const form = new FormData();

  return (
    <>
      <input
        type="file"
        name="image_name"
        onChange={({ target }) => target.files && setFile(target.files[0])}
      />
      <button
        className="bg-red-600 py-2"
        type="button"
        onClick={() => {
          startTransition(() => teste({ car_id, file, form, token }));
        }}
      >
        Salva Foto
      </button>
    </>
  );
}
