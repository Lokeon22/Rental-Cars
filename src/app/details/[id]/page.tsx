import { staticCarById } from "@/functions/staticCar";
import { formatPrice } from "@/functions/formatPrice";

import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

export default async function Details({ params }: { params: { id: number } }) {
  const { carDetail } = await staticCarById({ params });

  const { priceBRL } = formatPrice(carDetail.daily_rate);

  return (
    <>
      <Menu>
        <Title text="Detalhes do veículo" />

        <Link
          className="w-max flex items-center gap-2 font-medium hover:brightness-90 hover:duration-200"
          href={"/home"}
        >
          <BiArrowBack className="w-5 h-5" />
          Voltar
        </Link>

        <section className="flex flex-col lg:flex-row items-start lg:items-center gap-5 mt-5">
          {carDetail.image.map((img) => {
            return (
              <Image
                key={img.id}
                className="rounded-md hover:scale-105 hover:duration-200"
                width={380}
                height={350}
                alt={carDetail.name}
                src={`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/files/${img.image_name}`}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvmhRPQAGTwJs6OQmwAAAAABJRU5ErkJggg=="
              />
            );
          })}
          <div className="flex flex-col gap-2">
            <h2 className="uppercase">{carDetail.name}</h2>
            <p>{carDetail.description}</p>
            <p>
              Placa: <span className="uppercase">{carDetail.license_plate}</span>
            </p>
            <p>
              Modelo: {carDetail.category.category_name} | {carDetail.category.category_description}
            </p>
            <p>Marca: {carDetail.brand}</p>
            <p>
              Diária: <span className="text-green-500">{priceBRL}</span>
            </p>
            <Button id={carDetail.id} fine_amount={carDetail.fine_amount} />
          </div>
        </section>
      </Menu>
    </>
  );
}
