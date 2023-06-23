import { Menu } from "@/components/Menu";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";

import { Cars } from "@/@types/Cars";

async function getCars() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/cars`, {
    next: { revalidate: 60 * 60 * 24 }, //24 hours
  });

  const cars: Cars[] = await res.json();

  return { cars };
}

export default async function Home() {
  const { cars } = await getCars();

  return (
    <>
      <Menu>
        <Title text="Carros Disponíveis" />
        <section className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => {
            return <Card key={car.id} data={car} />;
          })}
        </section>
      </Menu>
    </>
  );
}
