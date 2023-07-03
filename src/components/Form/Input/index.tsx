import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  text: string;
  name: string;
  type: "text" | "password" | "date" | "number";
}

export function Input({ text, type, name, ...rest }: InputProps) {
  return (
    <>
      <label className="font-medium" htmlFor={name}>
        {text}
      </label>
      <input
        className="w-full h-8 outline-none text-black px-2 rounded-sm"
        type={type}
        name={name}
        id={name}
        {...rest}
      />
    </>
  );
}
