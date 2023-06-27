import Link from "next/link";

export function Button({ id, fine_amount }: { id: number; fine_amount: number }) {
  return (
    <>
      <Link className="col-span-2" href={`/rent/${id}`}>
        {!!fine_amount ? (
          <button
            className="w-full h-8 rounded cursor-pointer bg-green-600 hover:brightness-90 hover:duration-200"
            type="button"
          >
            Alugar
          </button>
        ) : (
          <button
            className="w-full h-8 rounded opacity-70 cursor-not-allowed bg-gray-600"
            type="button"
            disabled
          >
            Indisponível
          </button>
        )}
      </Link>
    </>
  );
}
