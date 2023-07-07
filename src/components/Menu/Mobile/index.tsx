"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsCarFrontFill, BsFillPersonFill } from "react-icons/bs";
import { MdTaxiAlert, MdOutput } from "react-icons/md";

import { ButtonLogout } from "../ButtonLogout";
import { MenuItem } from "../MenuItem";
import { UserInfo } from "@/@types/User";

interface MobileProps {
  user: UserInfo;
}

export function Mobile({ user }: MobileProps) {
  const [menu, setMenu] = useState<boolean>(false);

  const handleModal = () => {
    setMenu(!menu);
  };

  return (
    <>
      {menu ? (
        <nav className="p-3">
          <AiOutlineClose onClick={handleModal} className="w-7 h-7" />
          <div className="relative">
            <ul className="absolute flex flex-col gap-4 text-white bg-blue-600 min-w-[300px] rounded p-3">
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
          </div>
        </nav>
      ) : (
        <button onClick={handleModal} type="button" className="p-3 w-max h-max block sm:hidden">
          <AiOutlineMenu className="w-7 h-7" />
        </button>
      )}
    </>
  );
}
