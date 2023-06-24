"use client";
import { useState } from "react";

import { Cars } from "@/@types/Cars";

export function InputSearch() {
  //colocar o car e o card dos carros dentro do input aqui para poder manipular a pesquisa
  const [search, setSearch] = useState<string>("");

  async function getCarFiltered(search: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/car?name=${search}&brand&license_plate`
    );

    const cars: Cars = await res.json();

    if (!res.ok) {
      return alert("Carro não encontrado");
    }

    return console.log(cars);
  }

  return (
    <input
      value={search}
      onChange={({ target }) => setSearch(target.value)}
      className="mb-10 text-black px-2 outline-none lowercase"
      type="text"
      placeholder="Procurar"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          getCarFiltered(search);
        }
        return;
      }}
    />
  );
}
