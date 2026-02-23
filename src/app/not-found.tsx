import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link href={"/"} className="bg-zinc-900 text-zinc-100 px-3 py-1 rounded-sm cursor-pointer">Retornar para Home</Link>
    </div>
  );
}