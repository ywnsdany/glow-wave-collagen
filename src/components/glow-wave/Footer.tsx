'use client';

import { useStore } from '@/lib/store';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const { lang, t, setPage } = useStore();
  const isRTL = lang === 'ar';

  return (
    <footer
      className="relative mt-auto"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(160, 120, 90, 0.05) 100%)',
        borderTop: '1px solid rgba(160, 120, 90, 0.1)',
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
                  color: '#7A5C42',
                }}
              >
                Glow Wave
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#8B7355',
              }}
            >
              {t('footer_desc')}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:shadow-md"
              >
                <Instagram size={18} style={{ color: '#A0785A' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:shadow-md"
              >
                <Twitter size={18} style={{ color: '#A0785A' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold mb-4"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#4A3728',
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
                  className="block text-sm cursor-pointer transition-colors duration-200 hover:text-[#C9A96E]"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#8B7355',
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
                color: '#4A3728',
              }}
            >
              {t('footer_support')}
            </h4>
            <div className="space-y-3">
              {[
                t('footer_faq'),
                t('footer_shipping'),
                t('footer_returns'),
                t('footer_privacy'),
              ].map((link, i) => (
                <span
                  key={i}
                  className="block text-sm transition-colors duration-200 hover:text-[#C9A96E] cursor-pointer"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#8B7355',
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(160, 120, 90, 0.1)' }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#8B7355',
            }}
          >
            &copy; {new Date().getFullYear()} Glow Wave. {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
