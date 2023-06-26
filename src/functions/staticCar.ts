import { Cars } from "@/@types/Cars";

export async function staticCarById({ params: { id } }: { params: { id: number } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/cars`, {
    next: { revalidate: 60 * 60 * 12 }, // 12 hours
  });

  const cars: Cars[] = await res.json();

  let carDetail = cars.find((car) => car.id == id) as Cars;

  return { carDetail };
}
