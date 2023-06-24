"use client";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { IconBaseProps } from "react-icons/lib/esm/iconBase";

interface ButtonLogoutProps {
  icon: IconBaseProps;
  text: string;
}

export function ButtonLogout({ icon, text }: ButtonLogoutProps) {
  const router = useRouter();

  function deleteCookie() {
    destroyCookie({}, "rentals.user", { path: "/" });
    destroyCookie({}, "rentals.token", { path: "/" });
    router.push("/");
  }

  return (
    <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center">
      <>{icon}</>
      <button onClick={deleteCookie} type="button" className="text-sm sm:text-base">
        {text}
      </button>
    </div>
  );
}
