'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const { lang } = useStore();
  const isRTL = lang === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = lang === 'ar' ? [
    {
      q: 'ما هو كولاجين جلوو ويڤ الجيلي؟',
      a: 'كولاجين جلوو ويڤ هي حبّات جيلي على شكل دب صغيرة مصنوعة من الكولاجين البحري المستخلص من قشور الأسماك المعاد تدويرها. منتجنا سعودي ١٠٠٪، مستدام، ويتميز بسرعة الامتصاص (أسرع ١.٥ مرة من المكملات التقليدية). يساعد في تحسين إشراقة البشرة ومرونتها وصحتها العامة من الداخل إلى الخارج.',
    },
    {
      q: 'كيف أستخدم المنتج؟',
      a: 'ننصح بتناول حبتين يوميًا من جيلي الكولاجين، preferably في الصباح مع كوب من الماء. يمكنك تناولها قبل أو بعد الوجبات حسب ما يناسبك. للحصول على أفضل النتائج، يُفضل الالتزام بالاستخدام المنتظم يوميًا لمدة لا تقل عن ٤ أسابيع.',
    },
    {
      q: 'هل المنتج مناسب لجميع الأعمار؟',
      a: 'منتج كولاجين جلوو ويڤ مناسب للبالغين من عمر ١٨ عامًا فما فوق. لا يُنصح باستخدامه للأطفال أو النساء الحوامل والمرضعات دون استشارة الطبيب. إذا كنتِ تعانين من حساسية للأسماك أو المأكولات البحرية، يُرجى استشارة طبيبك قبل الاستخدام.',
    },
    {
      q: 'متى أبدأ بملاحظة النتائج؟',
      a: 'تختلف النتائج من شخص لآخر، لكن معظم المستخدمين يلاحظون تحسنًا في نعومة البشرة وترطيبها خلال ٤-٦ أسابيع من الاستخدام المنتظم. النتائج الأكثر وضوحًا مثل تحسين مرونة الجلد وتقليل التجاعيد الدقيقة تظهر عادةً خلال ٨-١٢ أسبوعًا.',
    },
    {
      q: 'هل المنتج آمن؟ هل له أي أعراض جانبية؟',
      a: 'نعم، منتجنا آمن تمامًا. يتم تصنيعه وفقًا لأعلى معايير الجودة والسلامة. الكولاجين البحري المستخلص من قشور الأسماك يُعتبر من أكثر أنواع الكولاجين أمانًا وفعالية. في حالات نادرة جدًا، قد تحدث حساسية خفيفة لدى الأشخاص الذين يعانون من حساسية للأسماك.',
    },
    {
      q: 'ما هي طرق الدفع المتاحة؟',
      a: 'نوفر خيارين للدفع: الدفع عند الاستلام (COD) وهو الخيار الأكثر شيوعًا، والدفع عبر بطاقة الائتمان أو الخصم (فيزا / ماستركارد). جميع المعاملات المشفّرة وآمنة تمامًا.',
    },
    {
      q: 'كم تستغرق مدة التوصيل؟',
      a: 'التوصيل مجاني لجميع أنحاء المملكة العربية السعودية. مدة التوصيل عادةً من ٢ إلى ٥ أيام عمل حسب المنطقة. يتم شحن الطلبات من الرياض عبر شركات شحن معتمدة مع رقم تتبع يمكنك متابعته.',
    },
    {
      q: 'هل يمكنني إلغاء الطلب بعد تأكيده؟',
      a: 'نعم، يمكنك إلغاء الطلب قبل مغادرة المخزن بالتواصل معنا عبر الواتساب أو البريد الإلكتروني. في حال تم شحن الطلب بالفعل، يمكنك رفض الاستلام عند وصوله وسيتم استرداد المبلغ كاملًا خلال ٣-٥ أيام عمل.',
    },
    {
      q: 'هل يوجد خصومات للطلبات بالجملة؟',
      a: 'نعم! نوفر عروضًا وخصومات حصرية لمتابعينا على حسابات التواصل الاجتماعي. تابعينا على انستقرام وتويتر للحصول على أحدث العروض والكودات الخاصة. كذلك نوفر خصومات عند طلب أكثر من علبة.',
    },
    {
      q: 'ما هي سياسة الإرجاع؟',
      a: 'يمكنك طلب الإرجاع خلال ١٤ يومًا من تاريخ الاستلام بشرط أن يكون المنتج بحالته الأصلية سليمًا ولم يُفتح. يجب أن يكون الغلاف الخارجي سليمًا بدون تمزق. تواصلي معنا عبر الواتساب أو البريد الإلكتروني مع إرفاق صورة للمنتج ورقم الطلب.',
    },
  ] : [
    {
      q: 'What is Glow Wave Collagen Gummies?',
      a: 'Glow Wave Collagen Gummies are bear-shaped gummy supplements made from marine collagen extracted from recycled fish scales. Our product is 100% Saudi-made, sustainable, and features fast absorption (1.5x faster than traditional supplements). It helps improve skin radiance, elasticity, and overall health from the inside out.',
    },
    {
      q: 'How do I use the product?',
      a: 'We recommend taking 2 gummies daily, preferably in the morning with a glass of water. You can take them before or after meals as per your preference. For best results, maintain consistent daily use for at least 4 weeks.',
    },
    {
      q: 'Is the product suitable for all ages?',
      a: 'Glow Wave Collagen Gummies are suitable for adults aged 18 and above. It is not recommended for children or pregnant/nursing women without consulting a doctor. If you have allergies to fish or seafood, please consult your physician before use.',
    },
    {
      q: 'When will I start seeing results?',
      a: 'Results vary from person to person, but most users notice improvement in skin softness and hydration within 4-6 weeks of consistent use. More visible results such as improved skin elasticity and reduced fine lines typically appear within 8-12 weeks.',
    },
    {
      q: 'Is the product safe? Are there any side effects?',
      a: 'Yes, our product is completely safe. It is manufactured according to the highest quality and safety standards. Marine collagen derived from fish scales is considered one of the safest and most effective types of collagen. In very rare cases, mild allergic reactions may occur in individuals with fish allergies.',
    },
    {
      q: 'What payment methods are available?',
      a: 'We offer two payment options: Cash on Delivery (COD), which is the most popular option, and Credit/Debit Card payment (Visa/Mastercard). All transactions are encrypted and completely secure.',
    },
    {
      q: 'How long does delivery take?',
      a: 'Delivery is free across Saudi Arabia. Delivery time is typically 2-5 business days depending on your location. Orders are shipped from Riyadh through approved courier services with a tracking number you can follow.',
    },
    {
      q: 'Can I cancel my order after confirmation?',
      a: 'Yes, you can cancel your order before it leaves the warehouse by contacting us via WhatsApp or email. If the order has already been shipped, you can refuse delivery upon arrival and a full refund will be processed within 3-5 business days.',
    },
    {
      q: 'Do you offer bulk order discounts?',
      a: 'Yes! We offer exclusive deals and discounts for our social media followers. Follow us on Instagram and Twitter for the latest offers and promo codes. We also provide discounts when ordering multiple boxes.',
    },
    {
      q: 'What is your return policy?',
      a: 'You can request a return within 14 days of delivery, provided the product is in its original, sealed, and undamaged condition. The outer packaging must be intact. Contact us via WhatsApp or email with a photo of the product and your order number.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <HelpCircle size={14} style={{ color: '#38BDF8' }} />
              <span
                className="text-xs font-medium tracking-wider uppercase"
                style={{
                  fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                  color: '#0EA5E9',
                }}
              >
                {lang === 'ar' ? 'مركز المساعدة' : 'Help Center'}
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {lang === 'ar'
                ? 'هنا تجدين إجابات لأكثر الأسئلة شيوعًا عن منتجات جلوو ويڤ. إذا لم تجدي إجابة سؤالك، تواصلي معنا!'
                : 'Find answers to the most common questions about Glow Wave products. If you don\'t find what you\'re looking for, feel free to contact us!'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24 section-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div
                  className="glass-card rounded-2xl overflow-hidden"
                  style={{
                    borderColor: openIndex === i ? 'rgba(56, 189, 248, 0.3)' : undefined,
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 cursor-pointer text-right"
                  >
                    <span
                      className="text-sm md:text-base font-semibold flex-1"
                      style={{
                        fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                        color: '#0F172A',
                      }}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mx-3"
                    >
                      {isRTL ? (
                        <ChevronUp size={18} style={{ color: '#38BDF8' }} />
                      ) : (
                        <ChevronDown size={18} style={{ color: '#38BDF8' }} />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 md:px-6 pb-5 md:pb-6 pt-0"
                          style={{
                            borderTop: '1px solid rgba(56, 189, 248, 0.1)',
                          }}
                        >
                          <p
                            className="text-sm leading-relaxed pt-4"
                            style={{
                              fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                              color: '#475569',
                            }}
                          >
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 glass-strong rounded-3xl p-6 md:p-8 text-center"
          >
            <h3
              className="text-lg md:text-xl font-bold mb-3"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#0F172A',
              }}
            >
              {lang === 'ar' ? 'ما زلتِ تحتاجين مساعدة؟' : 'Still need help?'}
            </h3>
            <p
              className="text-sm mb-6"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
                color: '#64748B',
              }}
            >
              {lang === 'ar'
                ? 'فريقنا جاهز لمساعدتك عبر واتساب في أي وقت'
                : 'Our team is ready to help you via WhatsApp anytime'}
            </p>
            <a
              href="https://wa.me/966553517226"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold"
              style={{
                fontFamily: lang === 'ar' ? 'var(--font-tajawal)' : 'var(--font-poppins)',
              }}
            >
              <MessageCircle size={16} />
              {lang === 'ar' ? 'تواصلي معنا' : 'Contact Us'}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
