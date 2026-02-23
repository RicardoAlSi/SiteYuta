"use client"
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

export default function CarroselModeGame() {

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const textos = [
        { title: "Modo Quiz", resume: "Teste seus conhecimentos sobre a natureza e o mundo de Yuta com nosso modo quiz interativo." },
        { title: "Modo Memória", resume: "Desafie sua memória com nosso modo de jogo de memória, onde você combina cartas temáticas de Yuta." }
    ]

    useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        api.on("select", onSelect)

        // define o inicial
        onSelect()

        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    return (

        <section className="w-full py-20 bg-sky-400 flex flex-col items-center justify-center gap-20 lg:flex-row">
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-3/4 md:w-1/2 lg:w-100">
                <CarouselContent className="w-full flex items-center justify-start gap-4">
                    <CarouselItem>
                        <Image src={"/images/quiz.png"} alt="quiz-image" width={200} height={200} className="w-full" />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/memoria.png"} alt="quiz-image" width={200} height={200} className="w-full" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-zinc-600 border-zinc-700 cursor-pointer" />
                <CarouselNext className="bg-zinc-600 border-zinc-700 cursor-pointer" />
            </Carousel>
            
                <div className="w-full lg:w-80 p-5">
            <h2 className="text-xl font-bold mb-2">
                {textos[current].title}
            </h2>
            <p>{textos[current].resume}</p>
                </div>
        </section>
    )

}