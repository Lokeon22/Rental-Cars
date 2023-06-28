import { staticCarById } from "@/functions/staticCar";
import { FormatsIntl } from "@/functions/formatsIntl";

import Image from "next/image";

import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";
import { ArrowBack } from "@/components/ArrowBack";
import { Button } from "@/components/Button";

export default async function Details({ params }: { params: { id: number } }) {
  const { carDetail } = await staticCarById({ params });

  const { priceBRL } = new FormatsIntl().priceFormat(carDetail.daily_rate);

  return (
    <>
      <Menu>
        <Title text="Detalhes do veículo" />
        <ArrowBack />
        <section className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
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
