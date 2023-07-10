interface PaginationProps {
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function CarsPagination({ pages, setCurrentPage }: PaginationProps) {
  return (
    <>
      {Array.from(Array(pages)).map((car, index) => {
        return (
          <button
            value={index}
            onClick={({ target }) => {
              const targetElement: HTMLButtonElement = target as HTMLButtonElement;
              setCurrentPage(Number(targetElement.value));
            }}
            className="bg-blue-600 px-2 w-max rounded hover:duration-200 hover:brightness-90"
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
    </>
  );
}
