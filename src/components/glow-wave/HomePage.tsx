'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft, Droplets, Leaf, Recycle, Zap } from 'lucide-react';

export default function HomePage() {
  const { lang, t, setPage } = useStore();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0" />
        
        {/* Decorative elements */}
        <div className="deco-circle" style={{ width: '600px', height: '600px', top: '-200px', right: '-200px' }} />
        <div className="deco-circle" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px' }} />
        <div className="deco-blob" style={{ width: '300px', height: '300px', top: '15%', left: '5%' }} />
        <div className="deco-blob" style={{ width: '200px', height: '200px', bottom: '20%', right: '10%' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`${isRTL ? 'md:order-2' : ''}`}
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Sparkles size={14} style={{ color: '#38BDF8' }} />
                <span
                  className="text-xs font-medium tracking-wider uppercase"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0EA5E9',
                  }}
                >
                  {t('hero_badge')}
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0F172A',
                }}
              >
                {t('hero_title')}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#64748B',
                }}
              >
                {t('hero_subtitle')}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button
                  onClick={() => setPage('product')}
                  className="btn-primary px-8 py-4 rounded-2xl text-sm font-semibold cursor-pointer flex items-center gap-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  }}
                >
                  {t('hero_cta')}
                  <Arrow size={16} />
                </button>
                <button
                  onClick={() => setPage('about')}
                  className="btn-secondary px-8 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  }}
                >
                  {t('hero_learn')}
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={`${isRTL ? 'md:order-1' : ''}`}
            >
              <div className="relative">
                {/* Glow behind image */}
                <div
                  className="absolute inset-0 rounded-3xl animate-pulse-glow"
                  style={{ transform: 'scale(0.9)', filter: 'blur(40px)' }}
                />
                <div className="product-image-container glass-card rounded-3xl p-4 md:p-6">
                  <img
                    src="/product-main.png"
                    alt="Glow Wave Collagen Gummies"
                    className="w-full h-auto rounded-2xl object-cover"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-strong rounded-2xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Leaf size={16} style={{ color: '#38BDF8' }} />
                    <span
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                        color: '#0369A1',
                      }}
                    >
                      100% {lang === 'ar' ? 'مستدام' : 'Sustainable'}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BRAND STORY SECTION ===== */}
      <section className="relative py-20 md:py-32 section-soft overflow-hidden">
        <div className="deco-circle" style={{ width: '500px', height: '500px', top: '-150px', left: '-150px' }} />
        <div className="deco-blob" style={{ width: '250px', height: '250px', bottom: '10%', right: '5%' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-xs font-medium tracking-wider uppercase mb-3 px-4 py-2 rounded-full glass-card"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0EA5E9',
              }}
            >
              {t('story_tag')}
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {t('story_title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="product-image-container glass-card rounded-3xl p-4">
                <img
                  src="/product-lifestyle.png"
                  alt="Glow Wave Lifestyle"
                  className="w-full h-auto rounded-2xl object-cover"
                  style={{ maxHeight: '450px' }}
                />
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#475569',
                }}
              >
                {t('story_p1')}
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#475569',
                }}
              >
                {t('story_p2')}
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: Zap, num: t('story_stat1_num'), label: t('story_stat1_label') },
              { icon: Recycle, num: t('story_stat2_num'), label: t('story_stat2_label') },
              { icon: Leaf, num: t('story_stat3_num'), label: t('story_stat3_label') },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 text-center benefit-card"
              >
                <stat.icon size={28} style={{ color: '#38BDF8', margin: '0 auto 1rem' }} />
                <h3
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0369A1',
                  }}
                >
                  {stat.num}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#64748B',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCT PREVIEW ===== */}
      <section className="relative py-20 md:py-32 section-warm overflow-hidden">
        <div className="deco-blob" style={{ width: '350px', height: '350px', top: '5%', right: '-100px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-xs font-medium tracking-wider uppercase mb-3 px-4 py-2 rounded-full glass-card"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0EA5E9',
              }}
            >
              {t('prod_tag')}
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {t('prod_title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-6 md:p-10 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="product-image-container rounded-2xl overflow-hidden">
                <img
                  src="/product-closeup.png"
                  alt="Glow Wave Closeup"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {t('prod_desc_title')}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#64748B',
                  }}
                >
                  {t('prod_desc')}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Droplets, title: t('prod_benefit1'), desc: t('proc_benefit1_desc') },
                    { icon: Zap, title: t('prod_benefit2'), desc: t('prod_benefit2_desc') },
                    { icon: Sparkles, title: t('prod_benefit3'), desc: t('prod_benefit3_desc') },
                    { icon: Leaf, title: t('prod_benefit4'), desc: t('prod_benefit4_desc') },
                  ].map((b, i) => (
                    <div key={i} className="p-3 rounded-xl" style={{ background: 'rgba(56, 189, 248, 0.06)' }}>
                      <b.icon size={18} style={{ color: '#38BDF8' }} />
                      <p className="text-xs font-semibold mt-1" style={{ color: '#0369A1', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{b.title}</p>
                      <p className="text-[11px]" style={{ color: '#64748B', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{b.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setPage('product')}
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer flex items-center gap-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  }}
                >
                  {t('hero_cta')}
                  <Arrow size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
