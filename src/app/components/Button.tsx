"use client"

import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    link: string;
}

export function Button({ link, children, className }: ButtonProps) {
    return (
        <>
            <motion.a
                href={link}
                target="_blank"
                className={twMerge("text-center text-white py-3 px-6 rounded mt-4 transition-colors", className)}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.a>
        </>
    )
}