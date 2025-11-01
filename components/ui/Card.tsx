'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={clsx(
        'bg-white rounded-2xl p-8 border border-gray-200',
        hover && 'cursor-pointer hover:shadow-lg transition-shadow duration-200',
        'shadow-md',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

