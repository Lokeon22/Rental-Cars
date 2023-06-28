import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export function ArrowBack() {
  return (
    <Link
      className="w-max flex items-center gap-2 font-medium hover:brightness-90 hover:duration-200 mb-5"
      href={"/home"}
    >
      <BiArrowBack className="w-5 h-5" />
      Voltar
    </Link>
  );
}
