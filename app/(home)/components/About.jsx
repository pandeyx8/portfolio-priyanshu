'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const About = () => {
    return (
        <motion.div
            id="about"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full py-20"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* About Badge */}
                <motion.div
                    variants={itemAnimation}
                    className="flex items-center gap-2 mb-12 justify-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-primary backdrop-blur-sm shadow-lg">
                        <HiUser className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-primary">About Me</span>
                    </div>
                </motion.div>

                {/* About Content - Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start lg:pl-24">
                    {/* Left - Intro Text */}
                    <motion.div variants={itemAnimation}>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            I’m a pre-final year Computer Science student at IIIT Bhopal, strong in Data Structures & Algorithms and passionate about building clean, scalable full-stack web experiences. I enjoy solving complex problems, optimizing solutions, and turning ideas into performant, accessible products.
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">

                            Previously, I completed a 3-month internship at TakeUForward (ended October), where I grew from a Campus Ambassador into a technical role. I conducted pan-India online workshops, hosted preparation sessions with the core TUF team, mentored peers on solution design and optimization, and contributed to presentations, hackathons, and developer outreach initiatives.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground font-medium mb-2">Achievements:</p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li>✓ 600+ DSA problems solved across LeetCode, CodeChef, GeeksForGeeks</li>
                                    <li>✓ 3-Star CodeChef with peak rating of 1650+</li>
                                    <li>✓ Global rank achievements in competitive programming</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Education Card */}
                    <motion.div variants={itemAnimation}>
                        <div className="relative group bg-black border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md hover:border-white/20 transition-all duration-300 h-full overflow-hidden">
                            {/* Shiny sweep effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                            </div>

                            <div className="relative z-10 space-y-5">
                                <h3 className="text-xl md:text-2xl font-bold text-primary">Education</h3>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Indian Institute of Information Technology, Bhopal</h4>
                                    <p className="text-sm text-muted-foreground mt-1">B.Tech Computer Science</p>
                                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-base text-white/80">
                                        <span className="font-semibold">CGPA:</span> 7.43
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-sm text-muted-foreground mb-3 font-medium">Relevant Coursework:</p>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Data Structures & Algorithms, Competitive Programming, Object-Oriented Programming, Database Management System, Operating System, Computer Organization & Architecture
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
