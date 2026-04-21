'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Heart, Users, Recycle, Droplets, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const { lang, t } = useStore();
  const isRTL = lang === 'ar';

  const values = [
    { icon: Recycle, title: t('about_val1'), desc: t('about_val1_desc'), color: '#25D366' },
    { icon: Lightbulb, title: t('about_val2'), desc: t('about_val2_desc'), color: '#C9A96E' },
    { icon: Heart, title: t('about_val3'), desc: t('about_val3_desc'), color: '#E88B7A' },
    { icon: Users, title: t('about_val4'), desc: t('about_val4_desc'), color: '#A0785A' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0" />
        <div className="deco-circle" style={{ width: '400px', height: '400px', top: '-150px', right: '-100px' }} />
        <div className="deco-blob" style={{ width: '200px', height: '200px', bottom: '10%', left: '5%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-xs font-medium tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass-card"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#A0785A',
              }}
            >
              {t('about_tag')}
            </span>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#4A3728',
              }}
            >
              {t('about_title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="product-image-container glass-card rounded-3xl p-4">
                <img
                  src="/product-closeup.png"
                  alt="Glow Wave Process"
                  className="w-full h-auto rounded-2xl object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5"
            >
              <p className="text-base leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#6B5B4E' }}>
                {t('about_p1')}
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#6B5B4E' }}>
                {t('about_p2')}
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#6B5B4E' }}>
                {t('about_p3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 section-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
              {lang === 'ar' ? 'كيف نصنع سحر جلوو ويڤ' : 'How We Craft the Glow Wave Magic'}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Droplets, title: lang === 'ar' ? 'استخلاص الكولاجين' : 'Collagen Extraction', desc: lang === 'ar' ? 'نستخلص الكولاجين البحري النقي من قشور الأسماك المعاد تدويرها باستخدام تقنيات حيوية متقدمة' : 'We extract pure marine collagen from recycled fish scales using advanced biotechnology' },
              { icon: Sparkles, title: lang === 'ar' ? 'صناعة الجلوكوز' : 'Gummy Crafting', desc: lang === 'ar' ? 'نحوّل الكولاجين إلى حبات دب صغيرة لذيذة بتركيز عالٍ وامتصاص سريع' : 'We transform collagen into delicious bear-shaped gummies with high concentration and fast absorption' },
              { icon: Leaf, title: lang === 'ar' ? 'توصيل لك' : 'Delivered to You', desc: lang === 'ar' ? 'تغليف فاخر صديق للبيئة يصل إلى باب منزلك جاهزًا لمنحك الإشراقة' : 'Luxury eco-friendly packaging delivered to your door, ready to give you that glow' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card rounded-2xl p-6 text-center benefit-card relative"
              >
                <div className="absolute top-4 end-4 text-5xl font-bold" style={{ color: 'rgba(201, 169, 110, 0.1)', fontFamily: 'Poppins' }}>
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(201, 169, 110, 0.12)' }}>
                  <step.icon size={24} style={{ color: '#C9A96E' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#8B7355' }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
              {t('about_mission_title')}
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#6B5B4E' }}>
              {t('about_mission')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 section-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
              {t('about_values_title')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 benefit-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${val.color}15` }}>
                    <val.icon size={22} style={{ color: val.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
                      {val.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#8B7355' }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
