'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { lang, t } = useStore();
  const isRTL = lang === 'ar';

  const contactItems = [
    {
      icon: Phone,
      title: t('contact_phone'),
      value: '+966 50 XXX XXXX',
      href: 'tel:+966500000000',
    },
    {
      icon: Mail,
      title: t('contact_email'),
      value: 'hello@glowwave.sa',
      href: 'mailto:hello@glowwave.sa',
    },
    {
      icon: MessageCircle,
      title: t('contact_whatsapp'),
      value: '+966 50 XXX XXXX',
      href: 'https://wa.me/966500000000',
      isWhatsApp: true,
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

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
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
                color: '#A0785A',
              }}
            >
              {t('contact_tag')}
            </span>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#4A3728',
              }}
            >
              {t('contact_title')}
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#8B7355',
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
          <div className="grid sm:grid-cols-2 gap-5">
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
                            : 'rgba(201, 169, 110, 0.12)',
                        }}
                      >
                        <item.icon
                          size={22}
                          style={{ color: item.isWhatsApp ? 'white' : '#C9A96E' }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-sm font-semibold mb-1"
                          style={{
                            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                            color: item.isWhatsApp ? 'white' : '#4A3728',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm"
                          style={{
                            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                            color: item.isWhatsApp ? 'rgba(255,255,255,0.9)' : '#8B7355',
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
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201, 169, 110, 0.12)' }}>
                        <item.icon size={22} style={{ color: '#C9A96E' }} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#8B7355' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
