'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, MapPin, CheckCircle2, Package } from 'lucide-react';

export default function ShippingPage() {
  const { lang } = useStore();
  const isRTL = lang === 'ar';

  const sections = lang === 'ar' ? [
    {
      icon: Truck,
      title: 'المناطق التي نخدمها',
      content: [
        'نوفر خدمة التوصيل لجميع مناطق ومناطق المملكة العربية السعودية بدون استثناء، تشمل: الرياض، جدة، مكة المكرمة، المدينة المنورة، الدمام، الخبر، الظهران، أبها، تبوك، بريدة، الطائف، نجران، جازان، حائل، الجبيل، ينبع، القصيم، وغيرها من المدن والقرى في جميع أنحاء المملكة.',
        'نعمل مع أفضل شركات الشحن في المملكة لضمان وصول طلبك بأمان وفي الوقت المحدد.',
      ],
    },
    {
      icon: Clock,
      title: 'مدة التوصيل',
      content: [
        'المدن الرئيسية (الرياض، جدة، الدمام): ٢-٣ أيام عمل',
        'المدن الثانوية: ٣-٥ أيام عمل',
        'المناطق النائية والقرى: ٥-٧ أيام عمل',
        'يتم حساب أيام العمل من يوم تأكيد الطلب (الأحد - الخميس). الطلبات التي تُConfirm في الجمعة والسبت تبدأ المعالجة يوم الأحد.',
      ],
    },
    {
      icon: Package,
      title: 'رسوم الشحن',
      content: [
        '✨ التوصيل مجاني تمامًا لجميع الطلبات داخل المملكة العربية السعودية بدون حد أدنى للطلب.',
        'نعم، التوصيل مجاني سواء طلبتِ علبة واحدة أو عشر علب!',
      ],
    },
    {
      icon: Shield,
      title: 'تغليف آمن',
      content: [
        'نحرص على تغليف منتجاتنا بعناية فائقة لضمان وصولها بحالة ممتازة. كل طلب يتم تغليفه في علبة كرتون مخصصة مع حشوة واقية تحمي المنتج من أي ضرر أثناء النقل.',
        'المنتج محفوظ في عبوته الأصلية المختومة التي تحافظ على جودته وطزاجته لفترة طويلة.',
      ],
    },
    {
      icon: MapPin,
      title: 'تتبع الشحنة',
      content: [
        'بمجرد تأكيد الطلب وشحنه، ستصلك رسالة عبر الواتساب أو البريد الإلكتروني تحتوي على رقم التتبع ورابط لمتابعة شحنتك خطوة بخطوة.',
        'يمكنك أيضًا التواصل معنا في أي وقت للاستفسار عن حالة شحنتك.',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'شروط الشحن',
      content: [
        'يرجى كتابة العنوان بالكامل مع الرمز البريدي ورقم الهاتف الصحيح لضمان وصول الطلب',
        'سيتصل مندوب الشحن قبل التوصيل للتأكد من تواجدك',
        'إذا لم يتم التوصيل بسبب عدم الرد، سيتم إعادة المحاولة في اليوم التالي',
        'في حال رفض الاستلام، يمكن إعادة جدولة التوصيل مجانًا',
      ],
    },
  ] : [
    {
      icon: Truck,
      title: 'Areas We Serve',
      content: [
        'We deliver to all regions and cities across Saudi Arabia without exception, including: Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Dhahran, Abha, Tabuk, Buraidah, Taif, Najran, Jizan, Hail, Jubail, Yanbu, Qassim, and all other cities and villages across the Kingdom.',
        'We work with the best shipping companies in the Kingdom to ensure your order arrives safely and on time.',
      ],
    },
    {
      icon: Clock,
      title: 'Delivery Time',
      content: [
        'Major cities (Riyadh, Jeddah, Dammam): 2-3 business days',
        'Secondary cities: 3-5 business days',
        'Remote areas and villages: 5-7 business days',
        'Business days are counted from order confirmation (Sunday - Thursday). Orders confirmed on Friday and Saturday begin processing on Sunday.',
      ],
    },
    {
      icon: Package,
      title: 'Shipping Fees',
      content: [
        'Delivery is completely FREE for all orders within Saudi Arabia with no minimum order requirement.',
        'Yes, shipping is free whether you order 1 box or 10 boxes!',
      ],
    },
    {
      icon: Shield,
      title: 'Safe Packaging',
      content: [
        'We take great care in packaging our products to ensure they arrive in excellent condition. Every order is packaged in a custom cardboard box with protective cushioning to safeguard the product during transit.',
        'The product is kept in its original sealed packaging that maintains its quality and freshness for a long time.',
      ],
    },
    {
      icon: MapPin,
      title: 'Shipment Tracking',
      content: [
        'Once your order is confirmed and shipped, you will receive a message via WhatsApp or email containing your tracking number and a link to follow your shipment step by step.',
        'You can also contact us at any time to inquire about your shipment status.',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Shipping Conditions',
      content: [
        'Please provide the complete address with postal code and correct phone number to ensure delivery',
        'The delivery courier will call before delivery to confirm your availability',
        'If delivery fails due to no response, a retry will be attempted the next day',
        'If delivery is refused, rescheduling is free of charge',
      ],
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Truck size={14} style={{ color: '#38BDF8' }} />
              <span
                className="text-xs font-medium tracking-wider uppercase"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0EA5E9',
                }}
              >
                {lang === 'ar' ? 'خدمة التوصيل' : 'Delivery Service'}
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'سياسة الشحن' : 'Shipping Policy'}
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {lang === 'ar'
                ? 'نوفر توصيل مجاني وسريع لجميع أنحاء المملكة العربية السعودية'
                : 'We provide free and fast delivery across Saudi Arabia'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Sections */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 md:p-8 benefit-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(56, 189, 248, 0.12)' }}>
                    <section.icon size={20} style={{ color: '#38BDF8' }} />
                  </div>
                  <h2
                    className="text-lg md:text-xl font-bold"
                    style={{
                      fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                      color: '#0F172A',
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {section.content.map((text, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                        color: '#475569',
                      }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Free Shipping Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 glass-strong rounded-3xl p-6 md:p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(14, 165, 233, 0.04))',
            }}
          >
            <Truck size={40} style={{ color: '#38BDF8', margin: '0 auto 1rem' }} />
            <h3
              className="text-xl md:text-2xl font-bold mb-3"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'توصيل مجاني لجميع أنحاء المملكة' : 'Free Delivery Across Saudi Arabia'}
            </h3>
            <p
              className="text-sm"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {lang === 'ar'
                ? 'بدون حد أدنى للطلب — سواء علبة واحدة أو أكثر'
                : 'No minimum order required — whether 1 box or more'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
