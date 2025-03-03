import { FaNodeJs } from "react-icons/fa"
import { RiJavascriptLine, RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"
import { motion, Variants } from "framer-motion"
import React from "react"

const iconVariants = (duration: number): Variants => ({
    initial: { y: -20 },
    animate: {
        y: [20, -20],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-green-800" />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-7xl text-yellow-300" />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssLine className="text-7xl text-cyan-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies