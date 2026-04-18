'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaReact, FaGithub } from 'react-icons/fa';
import {
    SiJavascript,
    SiPython,
    SiC,
    SiCanva,
    SiGit,
    SiHtml5,
    SiCss3,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPostman,
} from 'react-icons/si';

// Categorized skills in horizontal grid layout
const skillCategories = [
    {
        title: "Programming Languages",
        items: [
            { name: "C", icon: <SiC className="w-5 h-5" /> },
            { name: "C++", icon: <SiC className="w-5 h-5" /> },
            { name: "Python", icon: <SiPython className="w-5 h-5" /> },
            { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
            { name: "HTML", icon: <SiHtml5 className="w-5 h-5" /> },
            { name: "CSS", icon: <SiCss3 className="w-5 h-5" /> },
        ],
    },
    {
        title: "Technologies",
        items: [
            { name: "React", icon: <FaReact className="w-5 h-5" /> },
            { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
            { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
            { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
            { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
            { name: "Git", icon: <SiGit className="w-5 h-5" /> },
        ],
    },
    {
        title: "Tools & Platforms",
        items: [
            { name: "GitHub", icon: <FaGithub className="w-5 h-5" /> },
            { name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
            { name: "Canva", icon: <SiCanva className="w-5 h-5" /> },
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

                {/* Sections by category in horizontal grid */}
                <div className="space-y-12">
                    {skillCategories.map((section) => (
                        <div key={section.title}>
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sm sm:text-base font-semibold text-center text-white/70 mb-6 tracking-wide uppercase"
                            >
                                {section.title}
                            </motion.h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {section.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="relative group"
                                    >
                                        <div className="relative h-full aspect-square bg-black border border-white/20 rounded-xl p-3 backdrop-blur-md hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-primary/20">
                                            {/* Inner glow background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none rounded-xl" />
                                            {/* Hover glow effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent shiny-sweep" />
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center gap-2 w-full">
                                                {/* Icon Box */}
                                                <div className="p-2.5 rounded-lg border border-white/30 bg-black/50 text-white group-hover:border-white/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/10">
                                                    {skill.icon}
                                                </div>

                                                {/* Skill Name */}
                                                <span className="text-xs sm:text-sm font-bold text-white text-center">
                                                    {skill.name}
                                                </span>
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

