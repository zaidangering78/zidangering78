import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';

export const ElectricLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, prefersReduced ? 120 : 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06090F]"
          aria-label="Memuat portofolio kelistrikan"
          role="status"
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-sky-500/40 bg-[#0B111C] electric-glow">
              <Zap className="h-7 w-7 text-yellow-400" strokeWidth={2.2} />
            </div>
            <div className="w-44 overflow-hidden rounded-full bg-slate-800/80 h-1">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut', repeat: Infinity }}
                className="h-full w-1/2 bg-gradient-to-r from-sky-500 via-sky-300 to-yellow-400"
              />
            </div>
            <p className="font-mono-tech text-xs tracking-wider text-slate-400">
              Menyiapkan Portofolio TITL
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
