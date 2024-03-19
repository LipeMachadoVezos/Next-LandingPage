"use client"

import { motion } from "framer-motion"
import Image from "next/image";

interface CardProps {
    icon: string;
    title: string;
    text: string;
}

export function Card({ icon, title, text }: CardProps) {
    return (
        <>
            <motion.div
                className="w-full md:w-[430px] bg-[#88BDD0] rounded px-8 py-8 relative text-white flex flex-col items-start gap-3"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src={icon}
                    width={50}
                    height={50}
                    alt=""
                />
                <div>
                    <h2 className="font-bold text-xl mb-3">
                        {title}
                    </h2>
                </div>
                <div>
                    <p>
                        {text}
                    </p>
                </div>
            </motion.div>
        </>
    )
}