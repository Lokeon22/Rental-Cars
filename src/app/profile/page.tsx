import { cookies } from "next/dist/client/components/headers";
import { userUpdate } from "@/app/actions";

import { Menu } from "@/components/Menu";
import { Title } from "@/components/Title";

import { UserInfo } from "@/@types/User";

async function getUserOn() {
  const cookieStore = cookies();
  const { value: user_cookie }: any = cookieStore.get("rentals.user"); // obj_user
  const user_data: UserInfo = JSON.parse(user_cookie);

  const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/users`, {
    cache: "no-cache",
  });
  const allUsers: UserInfo[] = await res.json();

  let user = allUsers.find((userOn) => userOn.id === user_data.id);

  return { user };
}

export default async function Profile() {
  const { user } = await getUserOn();
  return (
    <>
      <Menu>
        <Title text="Meus dados" />
        {user ? (
          <>
            <h2>Bem vindo(a), {user.name}!</h2>
            <div className="flex flex-col md:flex-row gap-0.5 md:gap-3 mt-0.5 md:mt-2 text-gray-300 italic">
              <label>User: {user.username}</label>
              <label>Email: {user.email}</label>
              <label className="uppercase">CNH: {user.drive_license}</label>
              <label>
                Entrou em: {Intl.DateTimeFormat("pt-BR").format(new Date(user.created_at))}
              </label>
            </div>
            <form
              action={userUpdate}
              className="max-w-4xl flex flex-col gap-4 mt-5  border-0 sm:border-2 p-2 sm:p-4"
            >
              <input
                className="w-full h-8 outline-none text-black px-2 rounded"
                name="username"
                type="text"
                placeholder={`Usuario: ${user.username}`}
              />

              <input
                className="w-full h-8 outline-none text-black px-2 rounded"
                type="text"
                name="email"
                placeholder={`Email: ${user.email}`}
                required
              />

              <input
                className="w-full h-8 outline-none text-black px-2 rounded uppercase"
                type="text"
                name="drive_license"
                placeholder={`CNH: ${user.drive_license as string}`}
                required
              />

              <input
                className="w-full h-8 outline-none text-black px-2 rounded"
                type="password"
                name="oldpassword"
                placeholder="Senha antiga"
              />

              <input
                className="w-full h-8 outline-none text-black px-2 rounded"
                type="password"
                name="newpassword"
                placeholder="Nova senha"
              />

              <button
                className="bg-blue-600 h-8 rounded hover:brightness-90 hover:duration-200"
                type="submit"
              >
                Salvar alterações
              </button>
            </form>
          </>
        ) : (
          <h2>Carregando...</h2>
        )}
      </Menu>
    </>
  );
}
