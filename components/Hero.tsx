import React from 'react'
import profile from '../public/profile.jpg'
import { HERO_CONTENT } from '../config/constants'
import { motion } from "framer-motion"
import { StaticImageData } from "next/legacy/image";

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const profileUrl = (profile as StaticImageData).src;


const Hero = () => {
    return (
        <div className="border-neutral-800 border-b pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible"
                            className="pb-10 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Ananthu M A</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img src={(profile as StaticImageData).src} alt="Ananthu M A"
                            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero