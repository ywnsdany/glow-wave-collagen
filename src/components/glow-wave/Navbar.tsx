'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import { ShoppingBag, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { lang, toggleLang, page, setPage, t, getCartCount } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartCount = getCartCount();
  const isRTL = lang === 'ar';

  const navItems = [
    { key: 'home' as const, label: t('nav_home') },
    { key: 'product' as const, label: t('nav_product') },
    { key: 'about' as const, label: t('nav_about') },
    { key: 'contact' as const, label: t('nav_contact') },
    { key: 'returns' as const, label: t('footer_returns') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => setPage('home')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <img
                src="/logo-glowwave.png"
                alt="Glow Wave"
                className="w-9 h-9 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span
                className="text-lg md:text-xl font-bold tracking-wide"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0369A1',
                }}
              >
                Glow Wave
              </span>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setPage(item.key)}
                  className={`nav-link text-sm font-medium cursor-pointer ${page === item.key ? 'active' : ''}`}
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: page === item.key ? '#0369A1' : '#64748B',
                    fontWeight: page === item.key ? 600 : 400,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card text-xs font-medium cursor-pointer transition-all duration-300 hover:shadow-md"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0369A1',
                }}
              >
                <Globe size={14} />
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>

              {/* Cart Button */}
              <button
                onClick={() => setPage('cart')}
                className="relative flex items-center gap-2 px-3 py-2 rounded-xl glass-card text-xs font-medium cursor-pointer transition-all duration-300 hover:shadow-md"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0369A1',
                }}
              >
                <ShoppingBag size={14} />
                <span className="hidden sm:inline">{t('nav_cart')}</span>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
                    }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl cursor-pointer"
                style={{ color: '#0369A1' }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        {/* Payment Methods Strip */}
        <div
          className="border-t"
          style={{
            borderColor: 'rgba(14, 165, 233, 0.08)',
            background: 'rgba(248, 251, 255, 0.6)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-5 md:gap-7">
            {/* Visa */}
            <img src="/pay-visa.svg" alt="Visa" className="h-5 md:h-6 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            {/* Mada */}
            <img src="/pay-mada.svg" alt="Mada" className="h-5 md:h-6 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            {/* Tabby */}
            <img src="/pay-tabby.png" alt="Tabby" className="h-5 md:h-6 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            {/* Apple Pay */}
            <img src="/pay-applepay.svg" alt="Apple Pay" className="h-5 md:h-6 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[5.5rem] md:top-[6.5rem] left-0 right-0 z-40 glass-strong p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setPage(item.key);
                    setMobileOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    page === item.key
                      ? 'bg-gradient-to-r from-[#38BDF8]/10 to-transparent'
                      : 'hover:bg-white/30'
                  }`}
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: page === item.key ? '#0369A1' : '#64748B',
                    fontWeight: page === item.key ? 600 : 400,
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
