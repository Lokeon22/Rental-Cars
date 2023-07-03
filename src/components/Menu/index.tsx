import { BsCarFrontFill, BsFillPersonFill } from "react-icons/bs";
import { MdTaxiAlert, MdOutput } from "react-icons/md";
import { getUserCookies } from "@/functions/getCookies";

import { MenuItem } from "@/components/Menu/MenuItem";
import { ButtonLogout } from "./ButtonLogout";

export function Menu({ children }: { children: React.ReactNode }) {
  const { user } = getUserCookies();

  return (
    <main className="w-full h-screen grid grid-cols-3 sm:grid-cols-container gap-2 lg:gap-10">
      <nav className="p-2 bg-blue-500 col-span-1">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">LK Rentals</h2>
        <ul className="flex flex-col gap-4">
          <MenuItem
            icon={<BsFillPersonFill className="w-5 h-5" />}
            text={!!user.is_admin ? "Usuários" : "Minha Conta"}
            url="/profile"
          />
          <MenuItem
            icon={<BsCarFrontFill className="w-5 h-5" />}
            text={!!user.is_admin ? "Editar Veículo" : "Alugar Veículo"}
            url="/home"
          />
          <MenuItem
            icon={<MdTaxiAlert className="w-5 h-5" />}
            text="Carros Alugados"
            url="/mycar"
          />
          <ButtonLogout icon={<MdOutput className="w-5 h-5" />} text="Sair" />
        </ul>
      </nav>
      <section className="py-2 col-span-2 sm:col-span-1">{children}</section>
    </main>
  );
}
