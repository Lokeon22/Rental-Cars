import { Title } from "@/components/Title";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Title text="Buscando carro..." />
    </div>
  );
}
