"use client"

import { motion } from "framer-motion"
import { IconArticles } from "../..//public/IconArticles"

interface ArticlesProps {
    title: string;
    description: string;
}

export function Articles({ title, description }: ArticlesProps) {
    return (
        <>
            <div className="w-full lg:w-[900px] bg-white py-8 px-4 md:px-16 flex flex-col gap-3">
                <div className="flex gap-4">
                    <div>
                        <IconArticles />
                    </div>
                    <div>
                        <motion.h1
                            className="text-2xl font-semibold text-[#234252] max-w-[600px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="text-lg text-[#234252]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            dangerouslySetInnerHTML={{ __html: description }}
                        >
                        </motion.p>
                    </div>
                </div>
            </div>
        </>
    )
}