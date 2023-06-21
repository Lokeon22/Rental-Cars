export function Button({ text }: { text: string }) {
  return (
    <button type="submit" className="bg-gray-800 mt-1 w-full h-10 rounded hover:brightness-90">
      {text}
    </button>
  );
}
