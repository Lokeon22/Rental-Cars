import Image from "next/image";
import Link from "next/link";

import { Cars } from "@/@types/Cars";

interface CardProps {
  data: Cars;
}

export function Card({ data }: CardProps) {
  return (
    <>
      <main className="flex justify-center flex-col px-2">
        {data.image.map((img) => {
          return (
            <Image
              key={img.id}
              className="rounded-md hover:scale-105 hover:duration-200"
              width={380}
              height={350}
              alt={data.name}
              src={`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/files/${img.image_name}`}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvmhRPQAGTwJs6OQmwAAAAABJRU5ErkJggg=="
            />
          );
        })}

        <div className="flex flex-row items-center justify-between px-1 my-2">
          <h2>{data.name}</h2>
          <p className="text-green-500">
            <span className="text-white">Diária: </span>
            {Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL" }).format(
              data.daily_rate
            )}
          </p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-1 lg:gap-0 items-center px-1">
          <Link className="w-max col-span-1 hover:brightness-75 hover:duration-200" href={"/"}>
            Ver detalhes
          </Link>
          <button
            className="bg-green-600 col-span-2 w-full h-8 rounded hover:brightness-90 hover:duration-200"
            type="button"
          >
            Alugar
          </button>
        </div>
      </main>
    </>
  );
}
