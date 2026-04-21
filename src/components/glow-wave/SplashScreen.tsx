'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';

export default function SplashScreen() {
  const { hideSplash, lang } = useStore();
  const [phase, setPhase] = useState<'logo' | 'subtitle'>('logo');

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setPhase('subtitle'), 800);
    const hideTimer = setTimeout(() => hideSplash(), 2800);
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(hideTimer);
    };
  }, [hideSplash]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] splash-bg flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Decorative circles */}
        <div className="deco-circle" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
        <div className="deco-circle" style={{ width: '300px', height: '300px', bottom: '-80px', left: '-80px' }} />
        <div className="deco-blob" style={{ width: '200px', height: '200px', top: '20%', left: '10%' }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          {/* Logo glow */}
          <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ transform: 'scale(1.5)', filter: 'blur(30px)' }} />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-32 h-32 md:w-40 md:h-40"
          >
            <img
              src="/logo-glowwave.png"
              alt="Glow Wave"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <h1
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#0369A1',
            }}
          >
            Glow Wave
          </h1>
        </motion.div>

        {phase === 'subtitle' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-sm md:text-base tracking-widest uppercase"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#0EA5E9',
              letterSpacing: lang === 'ar' ? '0.1em' : '0.2em',
            }}
          >
            {lang === 'ar' ? 'إشراقتك الطبيعية تبدأ من هنا' : 'Your Natural Glow Starts Here'}
          </motion.p>
        )}

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 w-32 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(14, 165, 233, 0.15)' }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #38BDF8, #0EA5E9)',
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
