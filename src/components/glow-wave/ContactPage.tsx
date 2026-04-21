'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Twitter, Camera } from 'lucide-react';

export default function ContactPage() {
  const { lang, t } = useStore();
  const isRTL = lang === 'ar';

  const contactItems = [
    {
      icon: Phone,
      title: t('contact_phone'),
      value: '+966 55 351 7226',
      href: 'tel:+966553517226',
    },
    {
      icon: MessageCircle,
      title: t('contact_whatsapp'),
      value: '+966 55 351 7226',
      href: 'https://wa.me/966553517226',
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: t('contact_email'),
      value: 'hello@glowwave.sa',
      href: 'mailto:hello@glowwave.sa',
    },
    {
      icon: Clock,
      title: t('contact_hours_title'),
      value: t('contact_hours'),
    },
    {
      icon: MapPin,
      title: t('contact_address_title'),
      value: t('contact_address'),
    },
  ];

  const socialAccounts = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@glowwave.sa',
      href: 'https://instagram.com/glowwave.sa',
      color: '#E4405F',
    },
    {
      icon: Twitter,
      name: 'X (Twitter)',
      handle: '@glowwave_sa',
      href: 'https://twitter.com/glowwave_sa',
      color: '#0F1419',
    },
    {
      icon: Camera,
      name: 'Snapchat',
      handle: '@glowwave_sa',
      href: 'https://snapchat.com/add/glowwave_sa',
      color: '#FFFC00',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '+966 55 351 7226',
      href: 'https://wa.me/966553517226',
      color: '#25D366',
    },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0" />
        <div className="deco-circle" style={{ width: '400px', height: '400px', top: '-150px', left: '-100px' }} />
        <div className="deco-blob" style={{ width: '250px', height: '250px', bottom: '10%', right: '5%' }} />

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
              {t('contact_tag')}
            </span>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {t('contact_title')}
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {t('contact_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block glass-card rounded-2xl p-6 benefit-card ${
                      item.isWhatsApp ? 'whatsapp-btn' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: item.isWhatsApp
                            ? 'rgba(255,255,255,0.2)'
                            : 'rgba(56, 189, 248, 0.1)',
                        }}
                      >
                        <item.icon
                          size={22}
                          style={{ color: item.isWhatsApp ? 'white' : '#38BDF8' }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-sm font-semibold mb-1"
                          style={{
                            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                            color: item.isWhatsApp ? 'white' : '#0F172A',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm"
                          style={{
                            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                            color: item.isWhatsApp ? 'rgba(255,255,255,0.9)' : '#64748B',
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-6 benefit-card">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
                        <item.icon size={22} style={{ color: '#38BDF8' }} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-xl md:text-2xl font-bold text-center mb-8"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'حساباتنا على التواصل الاجتماعي' : 'Our Social Media'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialAccounts.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5 text-center benefit-card block"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${social.color}15` }}
                  >
                    <social.icon size={22} style={{ color: social.color }} />
                  </div>
                  <p className="text-xs font-semibold mb-1" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#0F172A' }}>
                    {social.name}
                  </p>
                  <p className="text-[11px]" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#64748B' }}>
                    {social.handle}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="py-16 md:py-24 section-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-8"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'سياسة الإرجاع والاستبدال' : 'Return & Exchange Policy'}
            </h2>

            <div className="glass-strong rounded-3xl p-6 md:p-8 space-y-6">
              {lang === 'ar' ? (
                <>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-tajawal)', color: '#0F172A' }}>شروط الإرجاع</h3>
                    <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-tajawal)', color: '#475569' }}>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> يمكنك طلب الإرجاع خلال 14 يوم من تاريخ الاستلام</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> يجب أن يكون المنتج بحالته الأصلية وسليم ولم يُفتح</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> يجب أن يكون الغلاف الخارجي سليم بدون تمزق</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> المنتجات التي تم فتحها أو استخدامها لا تُقبل للإرجاع</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-tajawal)', color: '#0F172A' }}>شروط الاستبدال</h3>
                    <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-tajawal)', color: '#475569' }}>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> يمكنك طلب استبدال المنتج في حال وصوله تالف أو خاطئ</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> يجب إبلاغنا خلال 48 ساعة من تاريخ الاستلام</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> يتم استبدال المنتج بنفس النوع أو استرداد المبلغ بالكامل</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-tajawal)', color: '#0F172A' }}>كيف تطلب الإرجاع؟</h3>
                    <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-tajawal)', color: '#475569' }}>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>1.</span> تواصلي معنا عبر الواتساب أو البريد الإلكتروني</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>2.</span> أرسلي صورة للمنتج ورقم الطلب</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>3.</span> سيقوم فريقنا بمراجعة الطلب خلال 24 ساعة</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>4.</span> يتم استرداد المبلغ خلال 3-5 أيام عمل</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0F172A' }}>Return Conditions</h3>
                    <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)', color: '#475569' }}>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> You can request a return within 14 days of delivery</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> Product must be in its original, sealed, and undamaged condition</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> Outer packaging must be intact without tears or damage</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> Opened or used products cannot be returned</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0F172A' }}>Exchange Conditions</h3>
                    <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)', color: '#475569' }}>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> You can request an exchange if the product arrives damaged or incorrect</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> You must notify us within 48 hours of delivery</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8' }}>&#9679;</span> We will replace with the same product or issue a full refund</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0F172A' }}>How to Return?</h3>
                    <ul className="space-y-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)', color: '#475569' }}>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>1.</span> Contact us via WhatsApp or email</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>2.</span> Send a photo of the product and your order number</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>3.</span> Our team will review within 24 hours</li>
                      <li className="flex items-start gap-2"><span style={{ color: '#38BDF8', fontWeight: 700 }}>4.</span> Refund will be processed within 3-5 business days</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
