export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <h2 className="text-4xl font-semibold">Rental Cars</h2>
      {children}
    </main>
  );
}
