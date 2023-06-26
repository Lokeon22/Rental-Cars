import Link from "next/link";

export function Button({ id }: { id: number }) {
  return (
    <>
      <Link className="col-span-2" href={`/rent/${id}`}>
        <button
          className="bg-green-600 w-full h-8 rounded hover:brightness-90 hover:duration-200"
          type="button"
        >
          Alugar
        </button>
      </Link>
    </>
  );
}
