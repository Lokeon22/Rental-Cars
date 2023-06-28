import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";
import { Cars } from "@/@types/Cars";

import { FormatsIntl } from "@/functions/formatsIntl";

interface CardProps {
  data: Cars;
}

export function Card({ data }: CardProps) {
  const { priceBRL } = new FormatsIntl().priceFormat(data.daily_rate);

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
          <p className="text-white">
            Diária: <span className="text-green-500">{priceBRL}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-1 lg:gap-0 items-center px-1">
          <Link
            className="w-max col-span-1 hover:brightness-75 hover:duration-200"
            href={`/details/${data.id}`}
          >
            Ver detalhes
          </Link>
          <Button id={data.id} fine_amount={data.fine_amount} />
        </div>
      </main>
    </>
  );
}
