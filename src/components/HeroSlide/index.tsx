"use client"

import { useEffect, useState } from "react"
import Image from "next/image";

const slides = [
    {
        img: "/images/quiz.png",
        title: "Modo Quiz",
        description: "Teste seus conhecimentos sobre a natureza e o mundo de Yuta com nosso modo quiz interativo."
    },
    {
        img: "/images/memoria.png",
        title: "Modo Memória",
        description: "Desafie sua memória com nosso modo memória, onde você precisa combinar cartas temáticas de Yuta."
    }
]

export default function GameShowcase() {
    const [index, setIndex] = useState(0);

    function nextSlide() {
        setIndex((prev) => (prev + 1) % slides.length);
    }

    function prevSlide() {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }

    const slide = slides[index];

    return (
        <section className="w-full py-10 bg-muted h-[75vh] flex items-center">
            <div className="container mx-auto px-4">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div className="relative w-full max-w-xl mx-auto">

                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full cursor-pointer"
                        >
                            <Image
                                src="/images/tras.png"
                                alt="seta para trás"
                                width={32}
                                height={32}
                            />
                        </button>

                        <img
                            key={slide.img}
                            src={slide.img}
                            alt={slide.title}
                            className="rounded-xl shadow-lg mx-auto w-80 h-auto"
                        />

                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                        >
                            <Image
                                src="/images/frente.png"
                                alt="seta para frente"
                                width={32}
                                height={32}
                            />
                        </button>
                    </div>

                    <div className="text-center md:text-left text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            {slide.title}
                        </h2>

                        <p className="text-lg text-accent">
                            {slide.description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )

}
