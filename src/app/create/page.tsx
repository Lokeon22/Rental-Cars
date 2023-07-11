import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";
import { ArrowBack } from "@/components/ArrowBack";

import { Input } from "@/components/Form/Input";
import { ButtonSteps } from "@/components/Admin/CreateCar";

async function testando(form: FormData) {
  "use server";
  const nome = form.get("name");

  return console.log(nome);
}

export default function create() {
  return (
    <Menu>
      <Title text="Adicionar veículo no sistema" />
      <ArrowBack />
      <form
        action={testando}
        className="max-w-2xl flex flex-col gap-3 mt-2 border-0 sm:border-2 pr-4 sm:p-4"
      >
        <Input name="name" text="Nome do veículo" type="text" required />
        <Input name="brand" text="Marca" type="text" />
        <Input name="description" text="Descrição" type="text" />
        <Input name="daily_rate" text="Preço diário" type="text" />
        <Input name="license_plate" text="Placa" type="text" />
        <Input name="category_name" text="Categoria" type="text" />
        <Input name="category_description" text="Detalhes de categoria ou veículo" type="text" />
        <ButtonSteps />
      </form>
    </Menu>
  );
}
