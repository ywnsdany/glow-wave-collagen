'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Check, Sparkles, Home } from 'lucide-react';

export default function SuccessPage() {
  const { lang, t, setPage } = useStore();

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="deco-circle" style={{ width: '600px', height: '600px', top: '-200px', right: '-200px' }} />
        <div className="deco-circle" style={{ width: '400px', height: '400px', bottom: '-150px', left: '-150px' }} />
        <div className="deco-blob" style={{ width: '300px', height: '300px', top: '30%', left: '10%' }} />
        <div className="deco-blob" style={{ width: '200px', height: '200px', top: '20%', right: '15%' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative glass-strong rounded-3xl p-8 md:p-12 max-w-md w-full text-center"
      >
        {/* Checkmark */}
        <div className="animate-checkmark mb-6">
          <div className="success-circle">
            <Check size={48} color="white" strokeWidth={3} />
          </div>
        </div>

        {/* Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-3 mb-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              <Sparkles size={20} style={{ color: '#C9A96E', opacity: 0.6 }} />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{
            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
            color: '#4A3728',
          }}
        >
          {t('success_title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-medium mb-4"
          style={{
            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
            color: '#C9A96E',
          }}
        >
          {t('success_subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm leading-relaxed mb-8"
          style={{
            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
            color: '#8B7355',
          }}
        >
          {t('success_desc')}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={() => setPage('home')}
          className="btn-primary px-8 py-4 rounded-2xl text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
          style={{
            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
          }}
        >
          <Home size={16} />
          {t('success_back')}
        </motion.button>
      </motion.div>
    </div>
  );
}
