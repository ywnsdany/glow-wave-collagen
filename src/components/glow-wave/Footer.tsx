'use client';

import { useStore } from '@/lib/store';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { lang, t, setPage } = useStore();
  const isRTL = lang === 'ar';

  return (
    <footer
      className="relative mt-auto"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(14, 165, 233, 0.05) 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-glowwave.png" alt="Glow Wave" className="w-8 h-8 object-contain" />
              <span
                className="text-lg font-bold"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0369A1',
                }}
              >
                Glow Wave
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {t('footer_desc')}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/glowwave.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:shadow-md"
              >
                <Instagram size={18} style={{ color: '#0EA5E9' }} />
              </a>
              <a
                href="https://twitter.com/glowwave_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:shadow-md"
              >
                <Twitter size={18} style={{ color: '#0EA5E9' }} />
              </a>
              <a
                href="https://wa.me/966553517226"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:shadow-md"
              >
                <MessageCircle size={18} style={{ color: '#0EA5E9' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold mb-4"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {t('footer_links')}
            </h4>
            <div className="space-y-3">
              {[
                { label: t('footer_sustain'), page: 'about' as const },
                { label: t('footer_story'), page: 'about' as const },
                { label: t('nav_product'), page: 'product' as const },
                { label: t('nav_contact'), page: 'contact' as const },
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => setPage(link.page)}
                  className="block text-sm cursor-pointer transition-colors duration-200 hover:text-[#38BDF8]"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#64748B',
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-sm font-bold mb-4"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {t('footer_support')}
            </h4>
            <div className="space-y-3">
              {[
                { label: t('footer_returns'), page: 'returns' as const },
                { label: t('footer_faq'), page: 'contact' as const },
                { label: t('footer_shipping'), page: 'contact' as const },
                { label: t('footer_privacy'), page: 'contact' as const },
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => setPage(link.page)}
                  className="block text-sm cursor-pointer transition-colors duration-200 hover:text-[#38BDF8]"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#64748B',
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#64748B',
            }}
          >
            &copy; {new Date().getFullYear()} Glow Wave. {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
