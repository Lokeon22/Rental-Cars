import { cookies } from "next/dist/client/components/headers";
import { formatPrice } from "@/functions/formatPrice";

import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";

import { RentCar } from "@/@types/Rent_Car";

async function getRentCar(token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/user/rents`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const rent_detail: RentCar = await res.json();

  return { rent_detail };
}

export default async function Mycar() {
  const token = cookies().get("rentals.token");
  const { rent_detail } = await getRentCar(token?.value as string);
  const { priceBRL } = formatPrice(rent_detail.total);

  return (
    <>
      <Menu>
        <Title text="Carro alugado" />
        <section>
          {rent_detail ? (
            <>
              <h2>Informações do aluguel</h2>
              <label>
                Inicio: <p>{rent_detail.start_date}</p>
              </label>
              <label>
                Valor do aluguel: <p>{priceBRL}</p>
              </label>
            </>
          ) : (
            <h2>Nenhum aluguel encontrado!</h2>
          )}
        </section>
      </Menu>
    </>
  );
}
