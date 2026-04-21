'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import SplashScreen from '@/components/glow-wave/SplashScreen';
import Navbar from '@/components/glow-wave/Navbar';
import HomePage from '@/components/glow-wave/HomePage';
import ProductPage from '@/components/glow-wave/ProductPage';
import CartPage from '@/components/glow-wave/CartPage';
import CheckoutPage from '@/components/glow-wave/CheckoutPage';
import AboutPage from '@/components/glow-wave/AboutPage';
import ContactPage from '@/components/glow-wave/ContactPage';
import ReturnsPage from '@/components/glow-wave/ReturnsPage';
import SuccessPage from '@/components/glow-wave/SuccessPage';
import Footer from '@/components/glow-wave/Footer';

export default function Home() {
  const { showSplash, page, lang, setPage, cart } = useStore();
  const [mounted, setMounted] = useState(false);

  // Hydration fix - load cart on mount
  const loadCartRef = useRef(false);
  useEffect(() => {
    if (loadCartRef.current) return;
    loadCartRef.current = true;
    // Use microtask to avoid direct setState in effect body
    queueMicrotask(() => {
      setMounted(true);
      try {
        const saved = localStorage.getItem('glowwave-cart');
        if (saved) {
          const parsed = JSON.parse(saved);
          useStore.setState({ cart: parsed });
        }
      } catch {
        // ignore
      }
    });
  }, []);

  // Handle RTL/LTR
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar'
      ? "'Tajawal', 'Poppins', sans-serif"
      : "'Poppins', 'Tajawal', sans-serif";
  }, [lang, mounted]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('glowwave-cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F8FBFF' }}>
        <div className="w-8 h-8 border-2 border-[#38BDF8] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const pageVariants = {
    enter: { opacity: 0, y: 15 },
    active: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } },
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'product':
        return <ProductPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'returns':
        return <ReturnsPage />;
      case 'success':
        return <SuccessPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#F8FBFF' }}
    >
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <>
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                variants={pageVariants}
                initial="enter"
                animate="active"
                exit="exit"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
          {page !== 'success' && <Footer />}
        </>
      )}
    </div>
  );
}
