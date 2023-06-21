import { IconBaseProps } from "react-icons/lib/esm/iconBase";

interface MenuItemProps {
  icon: IconBaseProps;
  text: string;
}

export function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-2 items-center">
      <>{icon}</>
      <button type="button" className="text-sm sm:text-base">
        {text}
      </button>
    </div>
  );
}
