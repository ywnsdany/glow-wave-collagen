'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ArrowRight, ArrowLeft, ShieldCheck, Smartphone, Wallet } from 'lucide-react';

export default function CheckoutPage() {
  const { lang, t, cart, getCartTotal, setPage, clearCart } = useStore();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const subtotal = getCartTotal();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cod' as 'cod' | 'visa' | 'apple' | 'tabby' | 'mada',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    if (!form.phone.trim()) errs.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone is required';
    else if (!/^05\d{8}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = lang === 'ar' ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
    if (!form.address.trim()) errs.address = lang === 'ar' ? 'العنوان مطلوب' : 'Address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      clearCart();
      setPage('success');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-28 md:pt-36 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p style={{ color: '#64748B', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
            {lang === 'ar' ? 'سلتك فارغة' : 'Your cart is empty'}
          </p>
          <button
            onClick={() => setPage('product')}
            className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer mt-4"
            style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}
          >
            {lang === 'ar' ? 'تسوقي الآن' : 'Shop Now'}
          </button>
        </motion.div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
    textAlign: isRTL ? 'right' : 'left',
  };

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#0F172A',
            }}
          >
            {t('checkout_title')}
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {t('checkout_name')}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                  placeholder={t('checkout_name_ph')}
                  className={`input-luxury ${errors.name ? 'border-red-400' : ''}`}
                  style={inputStyle}
                />
                {errors.name && (
                  <p className="text-xs mt-1" style={{ color: '#DC2626', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {t('checkout_phone')}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
                  placeholder={t('checkout_phone_ph')}
                  className={`input-luxury ${errors.phone ? 'border-red-400' : ''}`}
                  style={inputStyle}
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-xs mt-1" style={{ color: '#DC2626', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {t('checkout_address')}
                </label>
                <textarea
                  value={form.address}
                  onChange={(e) => { setForm({ ...form, address: e.target.value }); setErrors({ ...errors, address: '' }); }}
                  placeholder={t('checkout_address_ph')}
                  rows={3}
                  className={`input-luxury resize-none ${errors.address ? 'border-red-400' : ''}`}
                  style={inputStyle}
                />
                {errors.address && (
                  <p className="text-xs mt-1" style={{ color: '#DC2626', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Payment Methods */}
              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {t('checkout_payment')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {([
                    { key: 'cod' as const, icon: Truck, label: t('checkout_cod'), brandColor: '#0369A1' },
                    { key: 'visa' as const, icon: CreditCard, label: 'Visa', brandColor: '#1A1F71' },
                    { key: 'mada' as const, icon: CreditCard, label: lang === 'ar' ? 'مدى' : 'Mada', brandColor: '#004B87' },
                    { key: 'apple' as const, icon: Smartphone, label: 'Apple Pay', brandColor: '#000000' },
                    { key: 'tabby' as const, icon: Wallet, label: 'Tabby', brandColor: '#3FFF00' },
                  ]).map((pm) => (
                    <button
                      key={pm.key}
                      type="button"
                      onClick={() => setForm({ ...form, payment: pm.key })}
                      className={`payment-option rounded-2xl p-4 text-center glass-card ${
                        form.payment === pm.key ? 'active' : ''
                      }`}
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                      }}
                    >
                      <pm.icon size={22} style={{ color: form.payment === pm.key ? '#38BDF8' : '#64748B', margin: '0 auto 0.5rem' }} />
                      <p className="text-xs font-medium" style={{ color: form.payment === pm.key ? '#0F172A' : '#64748B' }}>
                        {pm.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-strong rounded-2xl p-6 sticky top-24">
                <h3
                  className="text-lg font-bold mb-5"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#0F172A',
                  }}
                >
                  {t('checkout_order_summary')}
                </h3>

                <div className="space-y-3 mb-5">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-3 items-center">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate" style={{ color: '#0F172A', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                          {lang === 'ar' ? item.nameAr : item.nameEn}
                        </p>
                        <p className="text-[11px]" style={{ color: '#64748B' }}>
                          x{item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold flex-shrink-0" style={{ color: '#0369A1', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                        {item.price * item.quantity} {t('sar')}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2" style={{ borderColor: 'rgba(14, 165, 233, 0.15)' }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#64748B', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{t('checkout_subtotal')}</span>
                    <span style={{ color: '#0F172A', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{subtotal} {t('sar')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#64748B', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{t('checkout_shipping')}</span>
                    <span style={{ color: '#25D366', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{t('checkout_shipping_free')}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t" style={{ borderColor: 'rgba(14, 165, 233, 0.15)' }}>
                    <span style={{ color: '#0F172A', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{t('checkout_total')}</span>
                    <span style={{ color: '#0369A1', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>{subtotal} {t('sar')}</span>
                  </div>
                </div>

                {/* Security badge */}
                <div className="flex items-center gap-2 mt-4 p-3 rounded-xl" style={{ background: 'rgba(56, 189, 248, 0.06)' }}>
                  <ShieldCheck size={16} style={{ color: '#38BDF8' }} />
                  <span className="text-[11px]" style={{ color: '#64748B', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                    {lang === 'ar' ? 'معلوماتك محمية وآمنة' : 'Your information is secure'}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-2xl text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 mt-5"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  }}
                >
                  {t('checkout_place_order')}
                  <Arrow size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => setPage('cart')}
                  className="w-full py-3 rounded-xl text-sm font-medium cursor-pointer mt-2 text-center"
                  style={{
                    fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                    color: '#64748B',
                  }}
                >
                  {t('checkout_back')}
                </button>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
