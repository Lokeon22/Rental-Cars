import { RentCar } from "@/@types/Rent_Car";
import { UserInfo } from "@/@types/User";

import { FormatsIntl } from "@/functions/formatsIntl";

async function adminGetAllRents({ token, user }: { token: string; user: UserInfo }) {
  if (!!user.is_admin === false) {
    return { message: "Usuario sem permissão" };
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/rents`, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const admin_rents: RentCar[] = await res.json();

  let total = 0;
  admin_rents.map((rent) => {
    return (total += rent.total);
  });

  return { admin_rents, total };
}

export async function AdminAllRents({ token, user }: { token: string; user: UserInfo }) {
  const { admin_rents, total } = await adminGetAllRents({ token, user });

  const { priceBRL } = new FormatsIntl().priceFormat(total as number);

  return (
    <>
      {admin_rents && admin_rents.length > 0 ? (
        <>
          {admin_rents.map((rent) => {
            return (
              <div key={rent.id} className="flex flex-wrap gap-5 px-2 py-2">
                <span>
                  Início do aluguel:{" "}
                  <span className="border-b-2 border-gray-300">
                    {Intl.DateTimeFormat("pt-BR").format(new Date(rent.start_date))}
                  </span>
                </span>
                <span>
                  Fim do aluguel:{" "}
                  <span className="border-b-2 border-gray-300">
                    {Intl.DateTimeFormat("pt-BR").format(new Date(rent.end_date))}
                  </span>
                </span>
                <span>
                  Preço:{" "}
                  <span className="text-green-500">
                    {Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL" }).format(
                      rent.total
                    )}
                  </span>
                </span>
              </div>
            );
          })}
          <h2 className="text-2xl mt-2 text-center">
            Valor total: <span className="text-green-500">{priceBRL}</span>
          </h2>
        </>
      ) : (
        <h2>Não há alugueis no momento</h2>
      )}
    </>
  );
}
