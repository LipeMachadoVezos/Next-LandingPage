"use client"

import { Button } from "../components/Button";
import { motion } from "framer-motion"
import Image from "next/image"
import { Articles } from "../components/Articles";
import { faqData } from "../data/faq";

export function Faq() {
    return (
        <>
            <section className="flex-col flex justify-center items-center w-full h-full backdrop-blur-md bg-faq bg-cover bg-top gap-20 px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col justify-center items-center gap-10"
                >
                    <Image src="/IconFaq.png" alt="Icon Feature" width={100} height={100} />
                    <h1 className="font-semibold text-[25px] md:text-[40px] text-white text-center">
                        Perguntas frequentes
                    </h1>
                </motion.div>
                <div className="flex flex-col justify-center items-center gap-4">
                    {faqData.map((item, key) => (
                        <Articles key={key} title={item.title} description={item.description} />
                    ))}
                </div>
                <Button
                    link="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
                    className="bg-red hover:bg-red-opacity"
                >
                    Quero todos esses benefícios!
                </Button>
            </section>
        </>
    )
}