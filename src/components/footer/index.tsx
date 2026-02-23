
export default function Footer() {
    return (
        <footer className="w-full h-auto  bg-zinc-700 text-white mt-auto">
            <div className="flex items-center justify-center p-5 bg-zinc-900 shadow-lg gap-4">
                <a href="#"><img src="/images/instagram.png" alt="Instagram" className="ml-4 w-6 h-6" /></a>
                <a href="#"><img src="/images/x.png" alt="X" className="ml-4 w-6 h-6" /></a>
                <a href="#"><img src="/images/youtube.png" alt="YouTube" className="ml-4 w-6 h-6" /></a>
                <a href="#"><img src="/images/github.png" alt="GitHub" className="ml-4 w-6 h-6" /></a>
            </div>

            <div className="mx-auto flex flex-col items-center justify-center p-10 gap-8 ">
                <div>
                    <img src="/images/FabIno.png" alt="Logo Fabrica de Inovações" />
                </div>
                <div className="text-center">
                    <p>© 2026 Yuta. Todos os direitos reservados.</p>
                    <p>Desenvolvido por Fabrica de Inovações</p>
                </div>
            </div>
            
        </footer>
    );
}