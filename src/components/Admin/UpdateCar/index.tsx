import { adminCarUpdate } from "@/app/actions";
import { Cars } from "@/@types/Cars";

import { FormatsIntl } from "@/functions/formatsIntl";
import { Input } from "@/components/Form/Input";

export async function UpdateCar({ car }: { car: Cars }) {
  const { priceBRL } = new FormatsIntl().priceFormat(car.daily_rate);

  return (
    <>
      <form
        action={adminCarUpdate}
        className="max-w-4xl flex flex-col gap-3 mt-0 sm:mt-2 border-0 sm:border-2 p-2 sm:p-4"
      >
        <Input className="hidden" name="id" type="number" text="" defaultValue={car.id} />
        <Input name="name" type="text" text="Carro" placeholder={car.name} />
        <Input name="description" type="text" text="Descrição" placeholder={car.description} />
        <Input name="daily_rate" type="text" text="Diária" placeholder={priceBRL} />
        <Input name="license_plate" type="text" text="Placa" placeholder={car.license_plate} />
        <Input
          name="fine_amount"
          type="number"
          text="Quantidade"
          placeholder={"Número disponível"}
        />
        <Input name="brand" type="text" text="Marca" placeholder={car.brand} />
        <Input
          name="category_name"
          type="text"
          text="Categoria"
          placeholder={car.category.category_name}
        />
        <button
          className="bg-blue-600 h-8 rounded hover:brightness-90 hover:duration-200"
          type="submit"
        >
          Salvar alterações
        </button>
      </form>
    </>
  );
}
