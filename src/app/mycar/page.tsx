import { FormatsIntl } from "@/functions/formatsIntl";

import { staticCarById } from "@/functions/staticCar";
import { getUserCookies } from "@/functions/getCookies";

import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";
import { ArrowBack } from "@/components/ArrowBack";

import { RentCar } from "@/@types/Rent_Car";

async function getRentCar(token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/user/rents`, {
    next: { revalidate: 60 * 60 * 24 }, //24 hours
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const rent_detail: RentCar = await res.json();

  return { rent_detail };
}

export default async function Mycar() {
  const { token, user } = getUserCookies();

  const { rent_detail } = await getRentCar(token);
  const { carDetail } = await staticCarById({ params: { id: rent_detail.car_id } });

  const { priceBRL } = new FormatsIntl().priceFormat(rent_detail.total);
  const startDate = new FormatsIntl().dateFormat(rent_detail.start_date);
  const endDate = new FormatsIntl().dateFormat(rent_detail.end_date);

  return (
    <>
      <Menu>
        <Title text="Carro alugado" />
        <ArrowBack />
        <section className="max-w-md border-2 p-1.5">
          {rent_detail ? (
            <>
              <h2 className="text-lg font-medium mb-3">Informações do aluguel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
                <label>Motorista: {user.name}</label>
                <label>Valor do aluguel: {priceBRL}</label>
                <label>Inicio: {startDate?.dateBRL}</label>
                <label>Retorno: {endDate?.dateBRL}</label>
                <label>Veículo Alugado: {carDetail.name}</label>
                <label>Placa: {carDetail.license_plate}</label>
              </div>
            </>
          ) : (
            <h2 className="text-lg font-medium">Nenhum aluguel encontrado!</h2>
          )}
        </section>
      </Menu>
    </>
  );
}
