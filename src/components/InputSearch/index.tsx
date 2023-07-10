"use client";
import { useState } from "react";

import { CarsPagination } from "../CarsPagination";

import { Card } from "../Card";
import { Cars } from "@/@types/Cars";
import { UserInfo } from "@/@types/User";

export function InputSearch({ cars, user }: { cars: Cars[]; user: UserInfo }) {
  const [search, setSearch] = useState<string>("");

  const [carsPerPage, setCarsPerPage] = useState<number>(2);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages = Math.ceil(cars.length / carsPerPage);

  const startIndex = currentPage * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = cars.slice(startIndex, endIndex);

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
        {currentCars
          .filter((car) => {
            if (search.length === 0) {
              return car;
            } else if (car.name.toLowerCase().includes(search.toLowerCase())) {
              return car;
            }
          })
          .map((car) => {
            return <Card key={car.id} data={car} is_admin={user.is_admin} />;
          })}
      </section>
      <nav className="px-2 my-5 flex gap-3">
        <CarsPagination pages={pages} setCurrentPage={setCurrentPage} />
      </nav>
    </>
  );
}
