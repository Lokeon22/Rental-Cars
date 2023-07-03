import Link from "next/link";
import { Button } from "@/components/Form/Button";
import { Container } from "@/components/Form/Container";
import { Input } from "@/components/Form/Input";

import { userCreate } from "../actions";

export default function Register() {
  return (
    <>
      <Container>
        <form
          action={userCreate}
          className="bg-blue-500 flex flex-col p-2 rounded gap-0.5 min-w-[300px]"
        >
          <Input text="Nome Completo" type="text" name="name" required />
          <Input text="Usuário" type="text" name="username" required />
          <Input text="CNH" type="text" name="drive_license" required />
          <Input text="Email" type="text" name="email" required />
          <Input text="Senha" type="password" name="password" required />
          <Link className="mt-0.5 w-max hover:brightness-90 hover:duration-200" href={"/"}>
            Já tenho uma conta
          </Link>
          <Button text="Criar conta" />
        </form>
      </Container>
    </>
  );
}
