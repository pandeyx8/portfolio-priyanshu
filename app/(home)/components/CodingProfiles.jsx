'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { config } from '@/config';

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

const brandColors = {
    LeetCode: '#FFA116',
    CodeForces: '#1F8ACB',
    'Code Chef': '#5B4638',
    GeeksForGeeks: '#0F9D58',
    Codolio: '#00BCD4',
    LinkedIn: '#0A66C2',
    GitHub: '#e6edf3',
};

const renderPlatformIcon = (platform) => {
    const color = brandColors[platform] || '#FFFFFF';
    const common = `w-6 h-6 sm:w-7 sm:h-7`;
    switch (platform) {
        case 'LeetCode':
            return <SiLeetcode className={common} style={{ color }} />;
        case 'CodeForces':
            return <SiCodeforces className={common} style={{ color }} />;
        case 'Code Chef':
            return <SiCodechef className={common} style={{ color }} />;
        case 'GeeksForGeeks':
            return <SiGeeksforgeeks className={common} style={{ color }} />;
        case 'Codolio':
            return <HiExternalLink className={common} style={{ color }} />;
        case 'LinkedIn':
            return <FaLinkedin className={common} style={{ color }} />;
        case 'GitHub':
            return <FaGithub className={common} style={{ color }} />;
        default:
            return <HiExternalLink className={common} style={{ color }} />;
    }
};

const CodingProfiles = () => {
    const profiles = config.codingProfiles || [];

    if (!profiles || profiles.length === 0) {
        return null;
    }

    return (
        <section id="profiles" className="py-20 relative">
            <div className="w-full">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="space-y-8 sm:space-y-12">
                        {/* Header */}
                        <div className="space-y-3 sm:space-y-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white backdrop-blur-sm shadow-lg"
                            >
                                <HiCode className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                <span className="text-xs sm:text-sm font-semibold">Profiles</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary px-4"
                            >
                                Profiles
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg text-muted-foreground px-4"
                            >
                                Check out my coding profiles and achievements
                            </motion.p>
                        </div>

                        {/* Profiles Grid */}
                        <motion.div
                            variants={containerAnimation}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto"
                        >
                            {profiles.map((profile) => (
                                <motion.div
                                    key={profile.id}
                                    variants={itemAnimation}
                                    className="relative group"
                                >
                                    <a
                                        href={profile.link || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="relative h-full min-h-[120px] bg-black border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-cyan-500/20">
                                            {/* Inner glow background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none rounded-xl" />
                                            {/* Hover glow effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent shiny-sweep" />
                                            </div>

                                            {/* Glossy shine effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                                            </div>

                                            <div className="relative z-10 flex flex-col h-full gap-4">
                                                {/* Header with Icon */}
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="p-3 sm:p-3.5 rounded-lg border border-white/30 bg-black/50 flex-shrink-0">
                                                        {renderPlatformIcon(profile.platform)}
                                                    </div>
                                                    <HiExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white transition-colors flex-shrink-0" />
                                                </div>

                                                {/* Platform Name and Rating */}
                                                <div className="flex-grow">
                                                    <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                                                        {profile.platform}
                                                    </h3>
                                                    {profile.rating && (
                                                        <p className="text-xs sm:text-sm text-white/70">
                                                            Rating: <span className="font-semibold text-white">{profile.rating}</span>
                                                        </p>
                                                    )}
                                                    {profile.stats && (
                                                        <p className="text-xs sm:text-sm text-white/70 mt-1">
                                                            {profile.stats}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Username */}
                                                {profile.username && (
                                                    <div className="pt-3 border-t border-white/10">
                                                        <p className="text-xs sm:text-sm text-white/70">
                                                            <span className="text-white/50">@</span>
                                                            <span className="text-white font-medium">{profile.username}</span>
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
