'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Heart, Users, Recycle, Droplets, Sparkles, Fish, FlaskConical, Package, ArrowLeft, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { lang, t, setPage } = useStore();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const values = [
    { icon: Recycle, title: t('about_val1'), desc: t('about_val1_desc'), color: '#25D366' },
    { icon: Lightbulb, title: t('about_val2'), desc: t('about_val2_desc'), color: '#38BDF8' },
    { icon: Heart, title: t('about_val3'), desc: t('about_val3_desc'), color: '#F472B6' },
    { icon: Users, title: t('about_val4'), desc: t('about_val4_desc'), color: '#0EA5E9' },
  ];

  const storyChapters = lang === 'ar' ? [
    {
      icon: Fish,
      title: 'البداية من البحر',
      text: 'كل شيء بدأ في ميناء صغير على ساحل البحر الأحمر، حيث لاحظ فريقنا كميات هائلة من قشور الأسماك تُهدر يوميًا. هذه القشور التي يعتبرها الكثيرون نفاية، كانت في الحقيقة كنزًا مخفيًا غنيًا بالكولاجين البحري الطبيعي — البروتين المسؤول عن مرونة البشرة وشبابها.',
    },
    {
      icon: FlaskConical,
      title: 'رحلة البحث والتطوير',
      text: 'تعاوننا مع أفضل علماء الأحياء البحرية في المملكة وخارجها لتطوير عملية استخلاص فريدة تحوّل قشور الأسماك إلى كولاجين بحري نقي بدرجة صيدلانية. بعد 18 شهرًا من التجارب والاختبارات، نجحنا في الوصول إلى تركيبة تمتصها الجسم بسرعة 1.5 ضعف مقارنة بالكولاجين التقليدي.',
    },
    {
      icon: Sparkles,
      title: 'ولادة جلوو ويڤ',
      text: 'أردنا أن نقدّم الكولاجين بشكل ممتع ولذيذ — وهكذا وُلدت فكرة الجلوكوز الدب! كل حبة على شكل دب صغير تحتوي على تركيز عالي من الكولاجين البحري مع نكهات طبيعية لذيذة. اخترنا التغليف الزجاجي الشفاف لأننا فخورون بمنتجنا ونريدك أن تراه.',
    },
    {
      icon: Package,
      title: 'رؤيتنا للمستقبل',
      text: 'نحلم بعالم تكون فيه الجمال والاستدامة وجهان لعملة واحدة. كل علبة جلوو ويڤ تبيعها تمنحك إشراقة من الداخل وتقلل النفايات السمكية في نفس الوقت. خطتنا التالية تشمل تطوير خط كامل من المكملات الجمالية المستدامة المصنوعة من موارد بحرية معاد تدويرها.',
    },
  ] : [
    {
      icon: Fish,
      title: 'It Started from the Sea',
      text: 'Everything began at a small port on the Red Sea coast, where our team noticed massive amounts of fish scales being wasted daily. What many considered waste was actually a hidden treasure — rich in natural marine collagen, the protein responsible for skin elasticity and youthful appearance.',
    },
    {
      icon: FlaskConical,
      title: 'Research & Development Journey',
      text: 'We partnered with top marine biologists in Saudi Arabia and beyond to develop a unique extraction process that transforms fish scales into pharmaceutical-grade pure marine collagen. After 18 months of experiments and testing, we achieved a formula the body absorbs 1.5x faster than traditional collagen.',
    },
    {
      icon: Sparkles,
      title: 'The Birth of Glow Wave',
      text: 'We wanted to make collagen fun and delicious — that\'s how the gummy bear idea was born! Each bear-shaped gummy contains a high concentration of marine collagen with delicious natural flavors. We chose transparent glass packaging because we\'re proud of our product and want you to see it.',
    },
    {
      icon: Package,
      title: 'Our Vision for the Future',
      text: 'We dream of a world where beauty and sustainability are two sides of the same coin. Every box of Glow Wave you purchase gives you radiance from within while reducing fish waste at the same time. Our next steps include developing a full line of sustainable beauty supplements made from recycled marine resources.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-20">
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
                color: '#0EA5E9',
              }}
            >
              {t('about_tag')}
            </span>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {t('about_title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Detailed Story */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
              {lang === 'ar' ? 'رحلتنا من النفاية إلى الإشراقة' : 'Our Journey from Waste to Radiance'}
            </h2>
          </motion.div>

          {/* Story Chapters */}
          <div className="space-y-8">
            {storyChapters.map((chapter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(56, 189, 248, 0.1)' }}
                  >
                    <chapter.icon size={24} style={{ color: '#38BDF8' }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: 'Poppins',
                          color: 'rgba(14, 165, 233, 0.15)',
                        }}
                      >
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-bold" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
                        {chapter.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#475569' }}>
                      {chapter.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Story Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12"
          >
            <div className="product-image-container glass-card rounded-3xl p-4">
              <img
                src="/product-lifestyle.png"
                alt="Glow Wave Story"
                className="w-full h-auto rounded-2xl object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </motion.div>
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
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
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
                <div className="absolute top-4 end-4 text-5xl font-bold" style={{ color: 'rgba(14, 165, 233, 0.08)', fontFamily: 'Poppins' }}>
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
                  <step.icon size={24} style={{ color: '#38BDF8' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
              {t('about_mission_title')}
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#475569' }}>
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
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
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
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
                      {val.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="py-16 md:py-20 section-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
              {lang === 'ar' ? 'لديك أسئلة أو تريدين معرفة المزيد؟ تواصلي معنا!' : 'Have questions or want to know more? Get in touch with us!'}
            </p>
            <button
              onClick={() => setPage('contact')}
              className="btn-primary px-8 py-4 rounded-2xl text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
              style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}
            >
              {t('nav_contact')}
              <Arrow size={16} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
