'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Link from 'next/link';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Rust: '#dea584',
};

const LatestProjects = () => {
    const projects = config.projects || [];

    return (
        <section id="projects" className="py-20 relative">
            <div className="w-full">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="space-y-8 sm:space-y-12">
                        {/* Header */}
                        <div className="space-y-3 sm:space-y-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-primary backdrop-blur-sm shadow-lg"
                            >
                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="text-xs sm:text-sm font-semibold">Latest Projects</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary px-4"
                            >
                                Few Projects
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg text-muted-foreground px-4"
                            >
                                Check out more projects{' '}
                                <Link href="/projects" className="text-primary hover:underline font-semibold">
                                    here
                                </Link>
                            </motion.p>
                        </div>

                        {/* Projects Grid */}
                        <motion.div
                            variants={containerAnimation}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto"
                        >
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemAnimation}
                                    className="relative group"
                                >
                                    <div
                                        onClick={() => {
                                            if (project.github && project.github !== '#') {
                                                window.open(project.github, '_blank');
                                            }
                                        }}
                                        className="block cursor-pointer"
                                    >
                                        <div className="relative h-full bg-black border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-md hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-primary/20">
                                            {/* Inner glow background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
                                            {/* Hover glow effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent shiny-sweep" />
                                            </div>

                                            {/* Glossy shine effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                                            </div>

                                            <div className="relative z-10 flex flex-col h-full gap-4">
                                                {/* Header with Icon and External Link */}
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                                                        <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                                                        <h3 className="font-bold text-white text-sm sm:text-base truncate">
                                                            {project.title}
                                                        </h3>
                                                    </div>
                                                    <HiExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white transition-colors flex-shrink-0" />
                                                </div>

                                                {/* Description */}
                                                <p className="text-xs sm:text-sm text-white/70 leading-relaxed flex-grow">
                                                    {project.description || "No description provided"}
                                                </p>

                                                {/* Technologies and Stats */}
                                                <div className="space-y-3 mt-auto">
                                                    {/* Technologies */}
                                                    {project.technologies && project.technologies.length > 0 && (
                                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                            {project.technologies.map((tech) => {
                                                                const color = languageColors[tech] || '#8b8b8b';
                                                                return (
                                                                    <div key={tech} className="flex items-center gap-1.5">
                                                                        <div
                                                                            className="w-2 h-2 rounded-full flex-shrink-0"
                                                                            style={{ backgroundColor: color }}
                                                                        />
                                                                        <span className="text-xs sm:text-sm text-white/70">
                                                                            {tech}
                                                                        </span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}

                                                    {/* Demo Link Section */}
                                                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-white/70 pt-2 border-t border-white/10">
                                                        {project.demo && project.demo !== '#' ? (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    window.open(project.demo, '_blank');
                                                                }}
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium"
                                                            >
                                                                <span>Demo</span>
                                                                <HiExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                            </button>
                                                        ) : (
                                                            <span className="text-xs sm:text-sm text-white/50">Demo link coming soon</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* View More Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-center pt-4 sm:pt-6"
                        >
                            <Button
                                variant="expandIcon"
                                Icon={FaGithub}
                                iconPlacement="right"
                                className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold"
                                asChild
                            >
                                <Link
                                    href="/projects"
                                >
                                    View More Projects
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;
