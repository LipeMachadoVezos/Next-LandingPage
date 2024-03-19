"use client"

import { Button } from "../components/Button";
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "../components/Card";

export function Features() {
    return (
        <>
            <section className="flex-col flex justify-center items-center w-full h-full 2xl:h-screen backdrop-blur-md bg-features bg-cover bg-center gap-20 px-4 py-20 2xl:py-0">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col justify-center items-center gap-10"
                >
                    <Image src="/IconFeature.png" alt="Icon Feature" width={100} height={100} />
                    <h1 className="font-semibold text-[25px] md:text-[40px] mb-10 text-white text-center">
                        A jornada está organizada em 3 etapas:
                    </h1>
                </motion.div>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-14 xl:gap-5">
                    <Card
                        icon="/minhavidacard.png"
                        title="Minha Vida:"
                        text="Como é formado o “ser” em sua complexidade? Descubra o que influencia as decisões pessoais e como assumir a responsabilidade por seu próprio caminho, escolhendo o que deve ou não fazer parte de sua vida."
                    />
                    <Card
                        icon="/meusrelacionamentoscard.png"
                        title="Meus Relacionamentos:"
                        text="Desenvolva relações saudáveis, seja no âmbito pessoal ou profissional. Lidar bem com pessoas é um fator de amadurecimento extremamente importante para o crescimento individual e coletivo!"
                    />
                    <Card
                        icon="/minhacontribuicaocard.png"
                        title="Minha Contribuição:"
                        text="O que seremos no futuro é definido pelas decisões conscientes que tomamos agora. Conduzimos a busca pelas respostas: O que desejo para mim? Que marca quero deixar no mundo?"
                    />
                </div>
            </section>
        </>
    )
}