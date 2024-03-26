"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../components/Button";

export function Footer() {
    return (
        <>
            <footer className="relative flex flex-col-reverse lg:flex-row justify-center h-auto sm:h-[100vh] lg:h-[50vh]">
                <div className="flex flex-col gap-6 justify-center items-center bg-footer bg-cover bg-right w-full lg:w-1/2 h-full sm:h-1/2 lg:h-full py-16 sm:py-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h1 className="font-semibold text-[35px] text-white text-center">
                            ficou com dúvidas?
                            <br />
                            contate-nos aqui:
                        </h1>
                    </motion.div>
                    <div className="flex-col flex justify-center items-center gap-4 w-full">
                        <Button
                            link=""
                            className="bg-yellow hover:bg-yellow-opacity px-10 lg:px-[70px]"
                        >
                            Whatsapp
                        </Button>
                        <Button
                            link=""
                            className="bg-yellow hover:bg-yellow-opacity px-12 lg:px-[80px]"
                        >
                            E-mail
                        </Button>
                    </div>
                </div>
                <div className="hidden sm:flex w-full lg:w-1/2 h-1/2 lg:h-full bg-imagefooter bg-cover bg-center">
                </div>
            </footer>
        </>
    )
}