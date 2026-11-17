import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      {children}
    </motion.main>
  );
};
