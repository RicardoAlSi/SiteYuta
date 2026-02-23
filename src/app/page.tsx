import CarroselModeGame from "@/components/Carrosel";
import Image from "next/image";


export default function Home() {

    return (
        <div className="flex flex-col font-sans dark:bg-background">
            <main className="flex flex-col items-center">

                <section className="w-full h-[85vh] flex items-center justify-center">
                    <div className="flex flex-col flex-1 container mx-auto justify-center items-center text-center gap-6">

                        <div className="">
                            <h1 className="text-3xl font-bold mb-4">Welcome to My Project</h1>
                            <p className="text-lg flex">This is a sample page for my project.</p>
                        </div>
                        <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded cursor-pointer">Avalie Agora</button>
                    </div>
                </section>

                <section className="w-full py-20 bg-surface">
                    <div className="container mx-auto px-4">

                        <div className="grid md:grid-cols-2 gap-12 mx-12">

                            <div className="flex flex-col col-span-1 justify-center">
                                <h2 className="text-3xl font-bold mb-4">
                                    Explore um mundo vivo
                                </h2>

                                <p className="text-lg text-zinc-800 mb-6">
                                    Yuta é um jogo de aventura inspirado na natureza, onde
                                    você explora florestas, enfrenta desafios e descobre
                                    segredos antigos.
                                </p>

                                <ul className="space-y-2">
                                    <li>🌿 Mundo aberto</li>
                                    <li>⚔️ Combate estratégico</li>
                                    <li>🧩 Puzzles ambientais</li>
                                </ul>
                            </div>

                            <div className="w-full flex justify-center lg:justify-end col-span-1">
                                <Image src="/images/yuta.jpeg" alt="Gameplay do jogo" width={400} height={300} className="border border-amber-200 rounded-4xl shadow-lg w-60 h-auto lg:mr-8" />
                            </div>  

                        </div>

                    </div>
                </section>

                <CarroselModeGame />


            </main>


        </div>
    );
}
