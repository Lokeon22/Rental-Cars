import { IconBaseProps } from "react-icons/lib/esm/iconBase";
import Link from "next/link";

interface MenuItemProps {
  icon: IconBaseProps;
  text: string;
  url: string;
}

export function MenuItem({ icon, text, url }: MenuItemProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <>{icon}</>
      <Link href={url}>
        <button type="button" className="text-sm sm:text-base">
          {text}
        </button>
      </Link>
    </div>
  );
}
