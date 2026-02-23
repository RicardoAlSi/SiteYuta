export default function Header() {
    return (
        <header className="w-full h-16 bg-zinc-900/95 text-white sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between h-full px-4">
                <h1 className="text-xl font-bold">Yuta</h1>

                <ul className="flex gap-8">
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contatos">Contato</a></li>
                </ul>
            </div>
        </header>


    );
}