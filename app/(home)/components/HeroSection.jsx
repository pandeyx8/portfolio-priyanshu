/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { HiCode, HiArrowRight } from "react-icons/hi";
import { config } from "@/config";
import Link from "next/link";
import { BackgroundPresets } from "@/components/ui/background-effects";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-start justify-center pt-2 pb-10 sm:pt-3 sm:pb-14 overflow-hidden">
      <BackgroundPresets.Minimal />

      {/* Background Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top center glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        {/* Top left glow */}
        <div className="absolute top-32 left-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        {/* Top right glow */}
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Content */}
      <div className="w-full relative z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-4xl mx-auto text-center space-y-5"
          >
            {/* Welcome badge */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1,
                type: "spring",
                stiffness: 200 
              }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-primary backdrop-blur-sm shadow-lg">
                <HiCode className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-semibold">
                  Welcome to my portfolio
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <div className="space-y-3">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span 
                  className="text-primary inline-block"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 30px rgba(59,130,246,0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Hi, I'm Priyanshu
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white/70 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                A language of my own — code.
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Strong in DSA & CP, passionate about building fast and clean web experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/projects">
                <Button
                  variant="expandIcon"
                  Icon={HiArrowRight}
                  iconPlacement="right"
                  className="rounded-full px-6 py-6 text-base font-semibold"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col items-center justify-center pt-6 gap-4"
            >
              {/* SVG Animated Wave Line */}
              <svg
                width="200"
                height="60"
                viewBox="0 0 200 60"
                className="w-24 sm:w-32 h-auto"
              >
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                    <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <filter id="blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                  </filter>
                </defs>

                {/* Animated Wave Path */}
                <motion.path
                  d="M 0 30 Q 50 10 100 30 T 200 30"
                  stroke="url(#waveGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#blur)"
                  animate={{
                    strokeDasharray: [0, 300],
                    strokeDashoffset: [300, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Additional glowing wave */}
                <motion.path
                  d="M 0 30 Q 50 10 100 30 T 200 30"
                  stroke="#60a5fa"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                  animate={{
                    strokeDasharray: [0, 300],
                    strokeDashoffset: [0, -300],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Scroll Text and Chevrons */}
              <motion.div
                className="flex flex-col items-center gap-1"
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-xs text-white/50 font-medium tracking-wide uppercase">
                  Scroll to explore
                </p>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 20 12"
                  fill="none"
                  className="w-4 h-auto"
                >
                  <path
                    d="M 2 2 L 10 10 L 18 2"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
