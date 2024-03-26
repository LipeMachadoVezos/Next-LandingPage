"use client"

import { Button } from "../../components/Button"
import Image from "next/image";
import { motion } from "framer-motion"
import { FormEvent, useState } from "react";
import axios from "axios";

export function Header() {

    const [email, setEmail] = useState<string>("");
    const [status, setStatus] = useState<
        "success" | "error" | "loading" | "idle"
    >("idle");
    const [responseMsg, setResponseMsg] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>();
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await axios.post("/api/download", { email });

            setStatus("success");
            setStatusCode(response.status);
            setEmail("");
            setResponseMsg(response.data.message);
        } catch (err) {

            if (axios.isAxiosError(err)) {
                setStatus("error");
                setStatusCode(err.response?.status);
                setResponseMsg(err.response?.data.error);
            }
        }
    }

    return (
        <>
            <header className="flex-col-reverse xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-header bg-cover bg-center gap-20 py-20 xl:py-0">
                <div className="w-[80%] lg:w-[50%] xl:max-w-[38%] text-yellow flex flex-col gap-3">
                    <motion.h1
                        className="font-semibold text-[25px] md:text-[40px]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Transformamos servidores desmotivados em profissionais proativos e inovadores
                    </motion.h1>
                    <motion.h1
                        className="text-white text-[25px] mb-10"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Um ambiente de trabalho harmônico, uma{" "}
                        <br className="hidden md:block" />
                        equipe unida e dando o máximo de si: com o{" "}
                        <br className="hidden md:block" />
                        Next, isso pode ser realidade!
                    </motion.h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <motion.h2
                            className="text-white text-lg"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Confira um trecho do nosso material por dentro!{" "}
                            <br />
                            Baixe agora mesmo uma amostra do nosso material
                        </motion.h2>
                        <motion.input
                            className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-yellow ring-inset text-black"
                            type="name"
                            placeholder="Seu nome:"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        />
                        <motion.input
                            className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-yellow ring-inset text-black"
                            type="email"
                            placeholder="Seu melhor e-mail:"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === "loading"}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <button
                            disabled={status === "loading"}
                            className="bg-red hover:bg-red-opacity text-center text-white py-3 px-6 rounded transition-colors"
                        >
                            Fazer download gratuitamente
                        </button>
                        {status === "success" && (
                            <p className="text-green-600">{responseMsg}</p>
                        )}
                        {status === "error" && (
                            <p className="text-orange-600">{responseMsg}</p>
                        )}
                    </form>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image className="" src="/ImageHeader.png" width={600} height={0} alt="" />
                </motion.div>
            </header>
        </>
    )
}