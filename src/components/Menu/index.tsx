import Link from "next/link";
import { BsCarFrontFill, BsFillPersonFill } from "react-icons/bs";
import { MdTaxiAlert, MdOutput } from "react-icons/md";
import { getUserCookies } from "@/functions/getCookies";

import { MenuItem } from "@/components/Menu/MenuItem";
import { ButtonLogout } from "./ButtonLogout";
import { Mobile } from "./Mobile";

export function Menu({ children }: { children: React.ReactNode }) {
  const { user } = getUserCookies();

  return (
    <main className="w-full h-screen grid grid-cols-mobile sm:grid-cols-container gap-2 lg:gap-10">
      <Mobile user={user} />
      <nav className="p-2 bg-blue-500 hidden sm:block">
        <Link href={"/home"} className="text-xl sm:text-3xl font-semibold cursor-pointer">
          LK Rentals
        </Link>
        <ul className="flex flex-col gap-4 mt-4 sm:mt-6">
          <MenuItem
            icon={<BsFillPersonFill className="w-5 h-5" />}
            text={!!user.is_admin ? "Usuários" : "Minha Conta"}
            url="/profile"
          />
          <MenuItem
            icon={<BsCarFrontFill className="w-5 h-5" />}
            text={!!user.is_admin ? "Adicionar Veículo" : "Alugar Veículo"}
            url={!!user.is_admin ? "/create" : "/home"}
          />
          <MenuItem
            icon={<MdTaxiAlert className="w-5 h-5" />}
            text="Carros Alugados"
            url="/mycar"
          />
          <ButtonLogout icon={<MdOutput className="w-5 h-5" />} text="Sair" />
        </ul>
      </nav>
      <section className="py-2">{children}</section>
    </main>
  );
}
