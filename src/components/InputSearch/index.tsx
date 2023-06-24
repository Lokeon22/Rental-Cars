"use client";
import { useState } from "react";

import { Card } from "../Card";
import { Cars } from "@/@types/Cars";

export function InputSearch({ cars }: { cars: Cars[] }) {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <input
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        className="mb-8 text-black px-2 outline-none rounded h-8"
        type="text"
        placeholder="Procurar"
      />
      <section className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars
          .filter((car) => {
            if (search.length === 0) {
              return car;
            } else if (car.name.toLowerCase().includes(search.toLowerCase())) {
              return car;
            }
          })
          .map((car) => {
            return <Card key={car.id} data={car} />;
          })}
      </section>
    </>
  );
}
