'use client';

import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Bell, UserCheck, FileText, Globe } from 'lucide-react';

export default function PrivacyPage() {
  const { lang } = useStore();
  const isRTL = lang === 'ar';

  const sections = lang === 'ar' ? [
    {
      icon: Database,
      title: 'المعلومات التي نجمعها',
      content: [
        'عند تقديم طلب أو التسجيل في موقعنا، قد نجمع المعلومات التالية:',
        '• الاسم الكامل — لتسهيل عملية التوصيل والتواصل',
        '• رقم الهاتف — للتواصل بخصوص الطلب وإرسال رقم التتبع',
        '• عنوان التوصيل — لتوصيل طلبك إلى العنوان الصحيح',
        '• البريد الإلكتروني (اختياري) — لإرسال العروض والتحديثات مع إمكانية إلغاء الاشتراك في أي وقت',
        '• معلومات الطلبات — المنتجات المطلوبة، الكميات، وتفاصيل الدفع',
      ],
    },
    {
      icon: Lock,
      title: 'كيف نحمي معلوماتك',
      content: [
        'نولي حماية بياناتك أهمية قصوى ونتخذ جميع الإجراءات اللازمة لضمان أمانها:',
        '• نستخدم تقنية التشفير SSL لحماية جميع المعاملات والبيانات المنقولة عبر الموقع',
        '• يتم تخزين بياناتك على خوادم آمنة ومحمية بأحدث تقنيات الأمان السيبراني',
        '• نقيّد الوصول إلى بياناتك الشخصية على الموظفين المصرح لهم فقط',
        '• لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا بالقدر الضروري لتنفيذ الطلب (شركات الشحن)',
      ],
    },
    {
      icon: Eye,
      title: 'كيف نستخدم معلوماتك',
      content: [
        'نستخدم المعلومات التي نجمعها للأغراض التالية فقط:',
        '• معالجة وتنفيذ طلباتك وتوصيلها',
        '• التواصل معك بخصوص حالة الطلب وتأكيدات الشراء',
        '• إرسال رقم تتبع الشحنة وتحديثات التوصيل',
        '• تحسين خدماتنا وتجربة التسوق بناءً على تفضيلاتك',
        '• إرسال عروض وخصومات حصرية (فقط إذا وافقتِ على ذلك)',
        '• التعامل مع أي استفسارات أو شكاوى أو طلبات إرجاع',
      ],
    },
    {
      icon: UserCheck,
      title: 'حقوقك في الخصوصية',
      content: [
        'لديكِ الحق الكامل في:',
        '• الوصول إلى بياناتك الشخصية المخزنة لدينا والاطلاع عليها في أي وقت',
        '• طلب تصحيح أي معلومات غير دقيقة أو غير مكتملة',
        '• طلب حذف بياناتك الشخصية من أنظمتنا (مع مراعاة متطلبات الطلبات النشطة)',
        '• إلغاء الاشتراك في الرسائل التسويقية في أي وقت عبر رابط إلغاء الاشتراك أو التواصل المباشر معنا',
        '• سحب موافقتك على معالجة بياناتك في أي وقت',
      ],
    },
    {
      icon: FileText,
      title: 'ملفات تعريف الارتباط (Cookies)',
      content: [
        'يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح:',
        '• ملفات تعريف الارتباط الأساسية: ضرورية لعمل الموقع وتسجيل الدخول والمحافظة على محتويات سلة التسوق',
        '• ملفات تعريف الارتباط التحليلية: تساعدنا في فهم كيفية استخدام الموقع لتحسينه',
        '• يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك',
      ],
    },
    {
      icon: Globe,
      title: 'مشاركة البيانات مع أطراف ثالثة',
      content: [
        'نحن لا نبيع أو نتاجر أو ننقل بياناتك الشخصية إلى أطراف خارجية. نشارك المعلومات فقط مع:',
        '• شركات الشحن المعتمدة — لتوصيل طلبك (الاسم ورقم الهاتف والعنوان فقط)',
        '• مزودي خدمات الدفع — لمعالجة المعاملات المالية بشكل آمن',
        '• نوافق فقط على مشاركة الحد الأدنى الضروري من المعلومات مع هذه الأطراف',
      ],
    },
    {
      icon: Bell,
      title: 'تحديث سياسة الخصوصية',
      content: [
        'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس أي تغييرات في ممارساتنا أو لتتوافق مع المتطلبات القانونية. سنقوم بإخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار واضح على الموقع.',
        'آخر تحديث: أبريل ٢٠٢٥',
      ],
    },
    {
      icon: Shield,
      title: 'تواصل معنا',
      content: [
        'إذا كان لديكِ أي أسئلة أو استفسارات حول سياسة الخصوصية أو كيفية تعاملنا مع بياناتك، لا تترددي في التواصل معنا:',
        '• واتساب: +966 55 351 7226',
        '• البريد الإلكتروني: hello@glowwave.sa',
        '• سنقوم بالرد على استفساراتك خلال 24 ساعة عمل',
      ],
    },
  ] : [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'When placing an order or registering on our website, we may collect the following information:',
        '• Full Name — to facilitate delivery and communication',
        '• Phone Number — to contact you regarding your order and send tracking information',
        '• Delivery Address — to deliver your order to the correct address',
        '• Email Address (optional) — to send offers and updates with the ability to unsubscribe at any time',
        '• Order Information — requested products, quantities, and payment details',
      ],
    },
    {
      icon: Lock,
      title: 'How We Protect Your Information',
      content: [
        'We give the highest priority to protecting your data and take all necessary measures to ensure its security:',
        '• We use SSL encryption technology to protect all transactions and data transmitted through the website',
        '• Your data is stored on secure servers protected with the latest cybersecurity technologies',
        '• We restrict access to your personal data to authorized personnel only',
        '• We do not share your personal information with third parties except as necessary to fulfill orders (shipping companies)',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect for the following purposes only:',
        '• Processing and fulfilling your orders and delivering them',
        '• Communicating with you regarding order status and purchase confirmations',
        '• Sending shipment tracking numbers and delivery updates',
        '• Improving our services and shopping experience based on your preferences',
        '• Sending exclusive offers and discounts (only if you have opted in)',
        '• Handling any inquiries, complaints, or return requests',
      ],
    },
    {
      icon: UserCheck,
      title: 'Your Privacy Rights',
      content: [
        'You have the full right to:',
        '• Access your personal data stored with us and review it at any time',
        '• Request correction of any inaccurate or incomplete information',
        '• Request deletion of your personal data from our systems (considering active order requirements)',
        '• Unsubscribe from marketing messages at any time via the unsubscribe link or by contacting us directly',
        '• Withdraw your consent for data processing at any time',
      ],
    },
    {
      icon: FileText,
      title: 'Cookies',
      content: [
        'Our website uses cookies to improve browsing experience:',
        '• Essential Cookies: necessary for the website to function, login, and maintain shopping cart contents',
        '• Analytics Cookies: help us understand how the website is used to improve it',
        '• You can control cookie settings through your browser preferences',
      ],
    },
    {
      icon: Globe,
      title: 'Third-Party Data Sharing',
      content: [
        'We do not sell, trade, or transfer your personal data to outside parties. We only share information with:',
        '• Approved shipping companies — to deliver your order (name, phone number, and address only)',
        '• Payment service providers — to process financial transactions securely',
        '• We only agree to share the minimum necessary information with these parties',
      ],
    },
    {
      icon: Bell,
      title: 'Privacy Policy Updates',
      content: [
        'We may update this privacy policy from time to time to reflect any changes in our practices or to comply with legal requirements. We will notify you of any material changes via email or through a clear notice on the website.',
        'Last updated: April 2025',
      ],
    },
    {
      icon: Shield,
      title: 'Contact Us',
      content: [
        'If you have any questions or concerns about our privacy policy or how we handle your data, please do not hesitate to contact us:',
        '• WhatsApp: +966 55 351 7226',
        '• Email: hello@glowwave.sa',
        '• We will respond to your inquiries within 24 business hours',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0" />
        <div className="deco-circle" style={{ width: '400px', height: '400px', top: '-150px', right: '-100px' }} />
        <div className="deco-blob" style={{ width: '250px', height: '250px', bottom: '10%', left: '5%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Shield size={14} style={{ color: '#38BDF8' }} />
              <span
                className="text-xs font-medium tracking-wider uppercase"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0EA5E9',
                }}
              >
                {lang === 'ar' ? 'حماية بياناتك' : 'Data Protection'}
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {lang === 'ar'
                ? 'نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية'
                : 'We respect your privacy and are committed to protecting your personal data in accordance with Saudi Arabia\'s Personal Data Protection Law'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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
        </div>
      </section>
    </div>
  );
}
