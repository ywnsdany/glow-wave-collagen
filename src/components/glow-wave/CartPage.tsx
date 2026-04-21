'use client';

import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { lang, t, cart, updateQuantity, removeFromCart, setPage, getCartTotal } = useStore();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const total = getCartTotal();

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1
            className="text-3xl md:text-4xl font-bold flex items-center gap-3"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#0F172A',
            }}
          >
            <ShoppingBag size={28} style={{ color: '#38BDF8' }} />
            {t('cart_title')}
          </h1>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
              <ShoppingBag size={40} style={{ color: '#38BDF8', opacity: 0.5 }} />
            </div>
            <p
              className="text-lg mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {t('cart_empty')}
            </p>
            <button
              onClick={() => setPage('product')}
              className="btn-primary px-8 py-3 rounded-2xl text-sm font-semibold cursor-pointer"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              }}
            >
              {t('cart_empty_cta')}
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -100 : 100, transition: { duration: 0.3 } }}
                  className="cart-item glass-card rounded-2xl p-4 md:p-6"
                >
                  <div className="flex gap-4 md:gap-6 items-center">
                    {/* Product Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={lang === 'ar' ? item.nameAr : item.nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm md:text-base font-semibold truncate"
                        style={{
                          fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                          color: '#0F172A',
                        }}
                      >
                        {lang === 'ar' ? item.nameAr : item.nameEn}
                      </h3>
                      <p
                        className="text-xs mt-1"
                        style={{
                          fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                          color: '#64748B',
                        }}
                      >
                        {item.size === 'small'
                          ? (lang === 'ar' ? 'العلبة الصغيرة — ٣٠ حبة' : 'Small Box — 30 Gummies')
                          : (lang === 'ar' ? 'العلبة الكبيرة — ٦٠ حبة' : 'Large Box — 60 Gummies')}
                      </p>
                      <p
                        className="text-base font-bold mt-2"
                        style={{
                          fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                          color: '#0369A1',
                        }}
                      >
                        {item.price} {t('sar')}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      <button
                        onClick={() => removeFromCart(`${item.id}-${item.size}`)}
                        className="p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-red-50"
                        style={{ color: '#EF4444' }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                          className="qty-btn cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          className="w-8 text-center text-sm font-semibold"
                          style={{
                            fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                            color: '#0F172A',
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                          className="qty-btn cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Cart Total & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-strong rounded-2xl p-6 md:p-8 mt-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-sm font-medium"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#64748B',
                  }}
                >
                  {t('cart_total')}
                </span>
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {total} <span className="text-base font-normal" style={{ color: '#64748B' }}>{t('sar')}</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setPage('checkout')}
                  className="btn-primary flex-1 py-4 rounded-2xl text-sm font-semibold cursor-pointer flex items-center justify-center gap-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  }}
                >
                  {t('cart_checkout')}
                  <Arrow size={16} />
                </button>
                <button
                  onClick={() => setPage('product')}
                  className="btn-secondary flex-1 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  }}
                >
                  {t('cart_continue')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
