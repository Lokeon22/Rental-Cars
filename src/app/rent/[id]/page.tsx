import { staticCarById } from "@/functions/staticCar";

import { Title } from "@/components/Title";
import { Menu } from "@/components/Menu";
import { Input } from "@/components/Form/Input";

export default async function Rent({ params }: { params: { id: number } }) {
  const { carDetail } = await staticCarById({ params });

  return (
    <>
      <Menu>
        <Title text="Aluguel do carro" />
        <section className="max-w-sm flex flex-col gap-2">
          <h2>Informações</h2>
          <p>Veículo: {carDetail.name}</p>
          <Input text="Data do início do aluguel" type="date" name="start_date" />
          <Input text="Data de devolução" type="date" name="end_date" />
        </section>
      </Menu>
    </>
  );
}
