"use client"

import { Button } from "../components/Button";
import Image from "next/image";
import { motion } from "framer-motion"

export function AboutUs() {
    return (
        <>
            <section className="flex-col xl:flex-row flex items-center w-full h-full xl:h-screen bg-red gap-8 xl:gap-0 py-20 xl:py-0">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full flex justify-start items-start xl:items-center"
                >
                    <Image className="w-[60%] xl:w-[90%]" src="/ImageAboutus.png" width={600} height={0} alt="" />
                </motion.div>
                <div className="w-full flex justify-center xl:justify-start">
                    <div className="w-full sm:w-[80%] lg:w-[70%] text-yellow px-6 xl:px-0">
                        <motion.div
                            className="flex flex-col gap-8"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-white text-2xl">
                                O Next é uma formação que trabalha profundamente as causas emocionais que
                                levam ao baixo rendimento profissional.
                            </h2>
                            <h2 className="text-white text-2xl">
                                Sabemos que nem sempre é a falta de habilidades técnicas que compromete
                                o desempenho do servidor.
                            </h2>
                            <h2 className="text-white text-2xl">
                                Esse não é um simples curso de motivação!
                            </h2>
                            <h2 className="text-white text-2xl">
                                É um método prático e eficaz para o desenvolvimento integral de profissionais.
                            </h2>
                            <h2 className="text-white text-2xl">
                                Criamos um percurso completo em que provocamos reflexões sobre o passado,
                                convidamos a viver plenamente o presente e desafiamos a decidir que legado
                                será deixado para o futuro.
                            </h2>
                            <Button
                                link="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
                                className="bg-yellow hover:bg-yellow-opacity"
                            >
                                Estou pronto para dar o próximo passo!
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}