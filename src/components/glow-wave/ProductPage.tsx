'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Zap, Leaf, ShoppingBag, Check } from 'lucide-react';

const images = [
  { src: '/product-main.png', alt: 'Glow Wave Main Product' },
  { src: '/product-closeup.png', alt: 'Glow Wave Closeup' },
  { src: '/product-lifestyle.png', alt: 'Glow Wave Lifestyle' },
];

const prices = { small: 60, large: 110 };
const counts = { small: 30, large: 60 };

export default function ProductPage() {
  const { lang, t, selectedSize, setSelectedSize, addToCart, setPage } = useStore();
  const isRTL = lang === 'ar';
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const price = prices[selectedSize];
  const count = counts[selectedSize];

  const handleAddToCart = () => {
    addToCart({
      id: 'glow-wave-collagen',
      nameEn: 'Glow Wave Collagen Gummies',
      nameAr: 'جلوو ويڤ جلوكوز الكولاجين',
      size: selectedSize,
      price,
      image: '/product-main.png',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="inline-block text-xs font-medium tracking-wider uppercase mb-3 px-4 py-2 rounded-full glass-card"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#A0785A',
            }}
          >
            {t('prod_tag')}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              color: '#4A3728',
            }}
          >
            {t('prod_title')}
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="product-image-container glass-card rounded-3xl p-4 mb-4">
              <motion.img
                key={activeImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={images[activeImg].src}
                alt={images[activeImg].alt}
                className="w-full h-auto rounded-2xl object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 p-2 ${
                    activeImg === i ? 'glass-strong thumb-active' : 'glass-card'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-20 md:h-24 object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Description */}
            <div className="mb-8">
              <h2
                className="text-xl md:text-2xl font-bold mb-4"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#4A3728',
                }}
              >
                {t('prod_desc_title')}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#6B5B4E',
                }}
              >
                {t('prod_desc')}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: Droplets, title: t('prod_benefit1'), desc: t('proc_benefit1_desc') },
                { icon: Zap, title: t('prod_benefit2'), desc: t('prod_benefit2_desc') },
                { icon: Sparkles, title: t('prod_benefit3'), desc: t('prod_benefit3_desc') },
                { icon: Leaf, title: t('prod_benefit4'), desc: t('prod_benefit4_desc') },
              ].map((b, i) => (
                <div
                  key={i}
                  className="benefit-card glass-card rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(201, 169, 110, 0.12)' }}>
                    <b.icon size={20} style={{ color: '#C9A96E' }} />
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#4A3728' }}>
                    {b.title}
                  </p>
                  <p className="text-xs" style={{ fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)', color: '#8B7355' }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <h3
                className="text-sm font-semibold mb-4"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#4A3728',
                }}
              >
                {t('prod_size_label')}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(['small', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-option rounded-2xl p-5 text-center glass-card ${
                      selectedSize === size ? 'active' : ''
                    }`}
                  >
                    <p
                      className="text-base font-semibold mb-1"
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                        color: selectedSize === size ? 'white' : '#4A3728',
                      }}
                    >
                      {size === 'small' ? t('prod_small') : t('prod_large')}
                    </p>
                    <p
                      className="text-xs mb-2"
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                        color: selectedSize === size ? 'rgba(255,255,255,0.8)' : '#8B7355',
                      }}
                    >
                      {size === 'small' ? t('prod_small_info') : t('prod_large_info')}
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                        color: selectedSize === size ? 'white' : '#7A5C42',
                      }}
                    >
                      {prices[size]} {t('sar')}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{
                      fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                      color: '#8B7355',
                    }}
                  >
                    {t('cart_total')}
                  </span>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                      color: '#4A3728',
                    }}
                  >
                    {price} <span className="text-lg font-normal" style={{ color: '#8B7355' }}>{t('sar')}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs" style={{ color: '#8B7355', fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)' }}>
                    {count} {lang === 'ar' ? 'حبة' : 'Gummies'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full py-4 rounded-2xl text-sm font-semibold cursor-pointer flex items-center justify-center gap-2"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                }}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    {lang === 'ar' ? 'تمت الإضافة!' : 'Added to Cart!'}
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    {t('prod_add_cart')}
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
