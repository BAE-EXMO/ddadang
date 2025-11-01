'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  heading?: string;
  subheading?: string;
  bgColor?: 'dark' | 'darker' | 'gradient';
}

export default function SectionWrapper({
  children,
  id,
  className,
  heading,
  subheading,
  bgColor = 'dark',
}: SectionWrapperProps) {
  const bgStyles = {
    dark: 'bg-gray-50',
    darker: 'bg-gray-100',
    gradient: 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200',
  };

  return (
    <section
      id={id}
      className={clsx(
        'py-16 md:py-24 relative',
        bgStyles[bgColor],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {heading && (
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

