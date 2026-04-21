'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { RotateCcw, Package, MessageCircle, ArrowLeft, ArrowRight, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ReturnsPage() {
  const { lang, t, setPage } = useStore();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0" />
        <div className="deco-circle" style={{ width: '400px', height: '400px', top: '-150px', right: '-100px' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
              <RotateCcw size={32} style={{ color: '#38BDF8' }} />
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'سياسة الإرجاع والاستبدال' : 'Return & Exchange Policy'}
            </h1>
            <p
              className="text-base max-w-xl mx-auto"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {lang === 'ar'
                ? 'نريدك أن تكوني راضية 100% عن تجربتك مع جلوو ويڤ. اقرئي سيااسة الإرجاع أدناه.'
                : 'We want you to be 100% satisfied with your Glow Wave experience. Read our return policy below.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Return Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
                  <Package size={20} style={{ color: '#38BDF8' }} />
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {lang === 'ar' ? 'شروط الإرجاع' : 'Return Conditions'}
                </h2>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                {(lang === 'ar' ? [
                  'يمكنك طلب الإرجاع خلال 14 يوم من تاريخ الاستلام',
                  'يجب أن يكون المنتج بحالته الأصلية وسليم ولم يُفتح',
                  'يجب أن يكون الغلاف الخارجي سليم بدون تمزق',
                  'المنتجات التي تم فتحها أو استخدامها لا تُقبل للإرجاع',
                  'لا يُقبل إرجاع المنتجات التي تم شراؤها بخصومات تتجاوز 50%',
                ] : [
                  'You can request a return within 14 days of delivery',
                  'Product must be in its original, sealed, and undamaged condition',
                  'Outer packaging must be intact without tears or damage',
                  'Opened or used products cannot be returned',
                  'Products purchased with discounts exceeding 50% are non-returnable',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#475569' }}>
                    <span style={{ color: '#38BDF8', marginTop: '2px', flexShrink: 0 }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Exchange Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                  <ShieldCheck size={20} style={{ color: '#22C55E' }} />
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {lang === 'ar' ? 'شروط الاستبدال' : 'Exchange Conditions'}
                </h2>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                {(lang === 'ar' ? [
                  'يمكنك طلب استبدال المنتج في حال وصوله تالف أو خاطئ',
                  'يجب إبلاغنا خلال 48 ساعة من تاريخ الاستلام مع صور واضحة',
                  'يتم استبدال المنتج بنفس النوع أو استرداد المبلغ بالكامل حسب اختيارك',
                  'في حال الاستبدال بسبب خطأ من جهتنا، نتحمل تكاليف الشحن بالكامل',
                ] : [
                  'You can request an exchange if the product arrives damaged or incorrect',
                  'You must notify us within 48 hours of delivery with clear photos',
                  'We will replace with the same product or issue a full refund — your choice',
                  'If the exchange is due to our error, we cover all shipping costs',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#475569' }}>
                    <span style={{ color: '#22C55E', marginTop: '2px', flexShrink: 0 }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How to Return */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(168, 85, 247, 0.1)' }}>
                  <ArrowLeft size={20} style={{ color: '#A855F7' }} />
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {lang === 'ar' ? 'كيف تطلب الإرجاع؟' : 'How to Return?'}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {(lang === 'ar' ? [
                  { num: '١', title: 'تواصلي معنا', desc: 'عبر الواتساب أو البريد الإلكتروني' },
                  { num: '٢', title: 'أرسلي التفاصيل', desc: 'صورة للمنتج ورقم الطلب' },
                  { num: '٣', title: 'المراجعة', desc: 'فريقنا يراجع الطلب خلال 24 ساعة' },
                  { num: '٤', title: 'استرداد المبلغ', desc: 'خلال 3-5 أيام عمل' },
                ] : [
                  { num: '1', title: 'Contact Us', desc: 'Via WhatsApp or email' },
                  { num: '2', title: 'Send Details', desc: 'Product photo & order number' },
                  { num: '3', title: 'Review', desc: 'Our team reviews within 24 hours' },
                  { num: '4', title: 'Refund', desc: 'Within 3-5 business days' },
                ]).map((step, i) => (
                  <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(56, 189, 248, 0.04)' }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold"
                      style={{ background: 'linear-gradient(135deg, #38BDF8, #0284C7)', color: 'white', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}
                    >
                      {step.num}
                    </div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
                      {step.title}
                    </p>
                    <p className="text-xs" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-2xl p-6 md:p-8"
              style={{ borderLeft: `4px solid #38BDF8`, borderRight: isRTL ? `4px solid #38BDF8` : undefined }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle size={20} style={{ color: '#0EA5E9', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{
                      fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                      color: '#0F172A',
                    }}
                  >
                    {lang === 'ar' ? 'ملاحظات مهمة' : 'Important Notes'}
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#475569' }}>
                    {(lang === 'ar' ? [
                      'المنتجات التي يتم شراؤها خلال العروض والحملات الخاصة تخضع لنفس سياسة الإرجاع',
                      'تكاليف الشحن عند الإرجاع بسبب عدم الرغبة يتحملها العميل',
                      'في حال استلام منتج تالف أو مختلف عن الطلب، يرجى عدم استخدامه والتواصل معنا فورًا',
                      'المبلغ المسترد يُعاد لنفس طريقة الدفع المستخدمة عند الشراء',
                    ] : [
                      'Products purchased during sales and special campaigns are subject to the same return policy',
                      'Return shipping costs due to change of mind are borne by the customer',
                      'If you receive a damaged or incorrect product, please do not use it and contact us immediately',
                      'Refunds are issued to the same payment method used at checkout',
                    ]).map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span style={{ color: '#38BDF8', flexShrink: 0 }}>&#8226;</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-sm mb-4" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
              {lang === 'ar' ? 'هل تحتاجين مساعدة في إرجاع طلبك؟' : 'Need help with a return?'}
            </p>
            <button
              onClick={() => setPage('contact')}
              className="btn-primary px-8 py-4 rounded-2xl text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
              style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}
            >
              <MessageCircle size={16} />
              {t('nav_contact')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
