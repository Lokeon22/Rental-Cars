"use client";
import { useState } from "react";
import { useAuth } from "@/context/useAuth";
import Link from "next/link";

import { Button } from "@/components/Form/Button";
import { Container } from "@/components/Form/Container";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleLogin } = useAuth();

  return (
    <>
      <Container>
        <form
          onSubmit={() => handleLogin({ email, password })}
          className="bg-blue-500 flex flex-col p-2 rounded gap-0.5 min-w-[300px]"
        >
          <input
            className="h-8 outline-none text-black px-2 rounded-sm"
            placeholder="E-mail"
            type="text"
            required
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            className="h-8 outline-none text-black px-2 rounded-sm mt-2"
            placeholder="Senha"
            type="password"
            required
            onChange={({ target }) => setPassword(target.value)}
          />
          <Link className="mt-0.5 w-max hover:brightness-90 hover:duration-200" href={"/register"}>
            Criar conta
          </Link>
          <Button text="Entrar" />
        </form>
      </Container>
    </>
  );
}
