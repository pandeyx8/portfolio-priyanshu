'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiPython, SiC, SiCanva, SiGit, SiHtml5, SiCss3 } from 'react-icons/si';

// Categorized skills ordered by importance (top to bottom within each column)
const skillColumns = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
            { name: "C++", icon: <SiC className="w-6 h-6" /> },
            { name: "C", icon: <SiC className="w-6 h-6" /> },
            { name: "Python", icon: <SiPython className="w-6 h-6" /> },
        ],
    },
    {
        title: "Frameworks",
        items: [
            { name: "React", icon: <FaReact className="w-6 h-6" /> },
            { name: "HTML", icon: <SiHtml5 className="w-6 h-6" /> },
            { name: "CSS", icon: <SiCss3 className="w-6 h-6" /> },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: <SiGit className="w-6 h-6" /> },
            { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
            { name: "Canva", icon: <SiCanva className="w-6 h-6" /> },
        ],
    },
];

const SkillsShowcase = () => {
    return (
        <motion.div
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-full py-20 overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_45%)]" />

            <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-primary backdrop-blur-sm shadow-lg mb-6">
                        <HiCode className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-primary">Tech Skills</span>
                    </div>
                </motion.div>

                {/* Columns by category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {skillColumns.map((column) => (
                        <div key={column.title} className="space-y-4">
                            <h3 className="text-sm sm:text-base font-semibold text-white/80 tracking-wide uppercase">
                                {column.title}
                            </h3>

                            <div className="grid grid-cols-1 gap-3">
                                {column.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="relative group"
                                    >
                                        <div className="relative h-full min-h-[110px] bg-black border border-white/20 rounded-xl p-4 sm:p-5 backdrop-blur-md hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-primary/20">
                                            {/* Inner glow background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none rounded-xl" />
                                            {/* Hover glow effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent shiny-sweep" />
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 w-full">
                                                {/* Icon Box */}
                                                <div className="p-3 sm:p-3.5 rounded-lg border border-white/30 bg-black/50 text-white group-hover:border-white/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/10">
                                                    {skill.icon}
                                                </div>

                                                {/* Skill Name with underline */}
                                                <div className="flex flex-col items-center gap-2">
                                                    <span className="text-sm sm:text-base font-bold text-white text-center">
                                                        {skill.name}
                                                    </span>
                                                    <div className="w-6 sm:w-8 h-0.5 bg-blue-500/30 rounded-full group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white/40 group-hover:to-transparent transition-all duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillsShowcase;

