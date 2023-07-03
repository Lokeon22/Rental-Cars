import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";
import { InputSearch } from "@/components/InputSearch";

import { getUserCookies } from "@/functions/getCookies";
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
  const { user } = getUserCookies();

  return (
    <>
      <Menu>
        <Title text="Carros Disponíveis" />
        <InputSearch cars={cars} user={user} />
      </Menu>
    </>
  );
}
