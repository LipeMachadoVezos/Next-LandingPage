"use client"

import { FormEvent, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"

export function Forms() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [status, setStatus] = useState<
        "success" | "error" | "loading" | "idle"
    >("idle");
    const [responseMsg, setResponseMsg] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>();

    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    const isFormValid = name.trim() !== "" && isEmailValid;

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await axios.post("/api/download", { email, name })

            setStatus("success")
            setStatusCode(response.status)
            setName("")
            setEmail("")
            setResponseMsg(response.data.message)
        } catch (err) {

            if (axios.isAxiosError(err)) {
                setStatus("error")
                setStatusCode(err.response?.status)
                setResponseMsg(err.response?.data.error)
            }
        }
    }

    return (
        <>
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
                    type="text"
                    placeholder="Seu nome:"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.button
                    disabled={status === "loading" || !isFormValid}
                    className={`${status === "loading" || !isFormValid ? "bg-red/40 text-white/50" : "bg-red hover:bg-red-opacity text-white"} text-center py-3 px-6 rounded transition-colors`}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    Fazer download gratuitamente
                </motion.button>
                {status === "success" && (
                    <p className="text-white text-center py-3 px-6 rounded transition-colors bg-green-600">{responseMsg}</p>
                )}
                {status === "error" && (
                    <p className="text-white text-center py-3 px-6 rounded transition-colors bg-orange-600">{responseMsg}</p>
                )}
            </form>
        </>
    )
}