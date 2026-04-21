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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-4 md:gap-6">
            {/* Visa */}
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="16" rx="2" fill="#1A1F71"/>
              <path d="M16.5 11.2L17.2 7.4H18.5L17.8 11.2H16.5Z" fill="white"/>
              <path d="M23.1 7.4C22.8 7.3 22.3 7.2 21.8 7.2C20.5 7.2 19.7 7.8 19.7 8.6C19.7 9.1 20.1 9.4 20.6 9.6C21.1 9.8 21.2 10 21.2 10.2C21.2 10.5 20.8 10.6 20.5 10.6C20 10.6 19.5 10.5 19.1 10.3L18.9 10.2L18.7 11.3C19 11.4 19.6 11.6 20.2 11.6C21.6 11.6 22.4 11 22.4 10.1C22.4 9.7 22.1 9.3 21.5 9.1C21 8.9 20.8 8.7 20.8 8.5C20.8 8.2 21.1 8 21.5 8C21.9 8 22.2 8.1 22.5 8.2L22.6 8.3L23.1 7.4Z" fill="white"/>
              <path d="M25.5 7.4H24.5C24.2 7.4 24 7.5 23.9 7.7L22 11.2H23.3L23.5 10.6H25.2L25.3 11.2H26.5L25.5 7.4ZM23.8 9.7L24.4 8.2L24.7 9.7H23.8Z" fill="white"/>
              <path d="M15 7.4L13.7 10L13.6 9.3C13.4 8.7 12.8 8 12.1 7.7L13.3 11.2H14.6L16.3 7.4H15Z" fill="white"/>
              <path d="M12.6 7.4H10.7L10.7 7.5C12.2 7.9 13.1 8.7 13.5 9.6L13.1 7.8C13 7.5 12.8 7.4 12.6 7.4Z" fill="#F9A51A"/>
            </svg>
            {/* Mada */}
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="20" rx="3" fill="#004B87"/>
              <path d="M8 10C8 7.8 9.8 6 12 6H20C22.2 6 24 7.8 24 10C24 12.2 22.2 14 20 14H12C9.8 14 8 12.2 8 10Z" fill="#00A651"/>
              <circle cx="16" cy="10" r="3" fill="white"/>
            </svg>
            {/* Tabby */}
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="18" rx="3" fill="#3EFFA8"/>
              <path d="M7 6H10C10 6 12 6 12 8C12 10 10 10 10 10H9V14H7V6Z" fill="#1B3B36"/>
              <path d="M13 6H16.5C16.5 6 18 6 18 7.5C18 9 16.5 9 16.5 9H15V10H18V14H15V10H13V6Z" fill="#1B3B36"/>
              <path d="M20 6H23C23 6 25 6 25 8C25 10 23 10 23 10H22V14H20V6Z" fill="#1B3B36"/>
              <rect x="7" y="4" width="2" height="2" rx="0.5" fill="#1B3B36"/>
              <rect x="13" y="4" width="2" height="2" rx="0.5" fill="#1B3B36"/>
              <rect x="20" y="4" width="2" height="2" rx="0.5" fill="#1B3B36"/>
              <text x="29" y="13" fill="#1B3B36" fontSize="8" fontWeight="700" fontFamily="sans-serif">4</text>
            </svg>
            {/* Apple Pay */}
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="16" rx="2" fill="black"/>
              <path d="M14.2 5.8C14.2 6.3 13.7 6.7 13.1 6.7C12.5 6.7 12 6.2 12 5.7C12 5.2 12.5 4.7 13.2 4.7C13.8 4.7 14.2 5.2 14.2 5.8ZM14.1 7.1H12.1V11.8H14.1V7.1Z" fill="white"/>
              <path d="M16.8 7.1H14.9V11.8H16.8V9.8C16.8 8.5 18.4 8.4 18.4 9.8V11.8H20.4V9.4C20.4 7.2 18.1 6.9 16.8 8.1V7.1Z" fill="white"/>
              <path d="M27.6 4.7H25.6V11.8H27.6V4.7Z" fill="white"/>
              <path d="M30.2 7C29.2 7 28.3 7.8 28.3 8.8V9.5C28.3 10.5 29.1 11.4 30.1 11.4C30.8 11.4 31.3 11.1 31.7 10.6V11.8H33.5V7H31.7V8C31.3 7.5 30.8 7 30.2 7ZM30.3 9.7C29.9 9.7 29.5 9.4 29.5 8.9C29.5 8.4 29.9 8.1 30.3 8.1C30.7 8.1 31.1 8.4 31.1 8.9C31.1 9.4 30.7 9.7 30.3 9.7Z" fill="white"/>
            </svg>
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
