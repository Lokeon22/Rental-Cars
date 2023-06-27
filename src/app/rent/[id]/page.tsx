import { redirect } from "next/navigation";
import { cookies } from "next/dist/client/components/headers";
import { revalidatePath } from "next/cache";

import { staticCarById } from "@/functions/staticCar";
import { formatPrice } from "@/functions/formatPrice";

import { Title } from "@/components/Title";
import { Menu } from "@/components/Menu";
import { Input } from "@/components/Form/Input";

import { UserInfo } from "@/@types/User";

export default async function Rent({ params }: { params: { id: number } }) {
  const { carDetail } = await staticCarById({ params });
  const { priceBRL } = formatPrice(carDetail.daily_rate);

  async function getDateRent(data: FormData) {
    "use server";

    const cookieStore = cookies();
    const user_cookie = cookieStore.get("rentals.user"); // obj_user
    const token = cookieStore.get("rentals.token");

    const user_data: UserInfo = JSON.parse(user_cookie?.value as string);

    const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/rent/${params.id}`, {
      method: "POST",
      body: JSON.stringify({
        car_id: params.id,
        user_id: user_data.id,
        start_date: data.get("start_date"),
        end_date: data.get("end_date"),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
    });

    if (res.status === 200) {
      revalidatePath("/home");
      return redirect("/home");
    }

    return console.log(res);
  }

  return (
    <>
      <Menu>
        <Title text="Aluguel do carro" />
        <section className="max-w-sm flex flex-col gap-2 pr-2">
          <h2 className="font-medium text-lg">Informações</h2>
          <p>Veículo: {carDetail.name}</p>
          <p>Diária: {priceBRL}</p>
          <form action={getDateRent}>
            <Input text="Data do início do aluguel" type="date" name="start_date" />
            <Input text="Data de devolução" type="date" name="end_date" />
            <button
              className="bg-blue-600 w-max p-2 rounded mt-2 hover:brightness-90 hover:duration-200"
              type="submit"
            >
              Alugar agora
            </button>
          </form>
        </section>
      </Menu>
    </>
  );
}
