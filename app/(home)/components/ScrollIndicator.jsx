'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col items-center justify-center py-12 sm:py-16 gap-6 relative"
    >
      {/* SVG Animated Wave Line */}
      <svg
        width="200"
        height="60"
        viewBox="0 0 200 60"
        className="w-32 sm:w-40 h-auto"
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

      {/* Scroll Text */}
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="text-xs sm:text-sm text-white/60 font-medium tracking-wide uppercase">
          Scroll to explore
        </p>
      </motion.div>

      {/* Animated Chevrons */}
      <motion.div
        className="flex flex-col gap-1"
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          className="w-5 h-auto mx-auto"
        >
          <path
            d="M 2 2 L 10 10 L 18 2"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <motion.svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          className="w-5 h-auto mx-auto"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 2 2 L 10 10 L 18 2"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
