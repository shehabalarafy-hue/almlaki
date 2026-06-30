import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Smartphone, CheckCircle2 } from "lucide-react";

export default function DownloadGuidePage() {
  const steps = [
    {
      number: 1,
      title: "تثبيت تطبيق Downloader",
      description:
        "قم بتحميل وتثبيت تطبيق Downloader الشهير من متجر تطبيقات جهازك",
      details: [
        "ابحث عن تطبيق 'Downloader' في Google Play Store أو Amazon Appstore",
        "اضغط على زر التحميل والتثبيت",
        "انتظر حتى ينتهي التثبيت بالكامل",
      ],
      icon: "📱",
    },
    {
      number: 2,
      title: "إدخال كود التحميل",
      description:
        "افتح تطبيق Downloader وأدخل الكود الخاص بنا للوصول إلى تطبيقنا",
      details: [
        "افتح تطبيق Downloader",
        "في خانة الرابط/البحث ضع الكود: 4217716",
        "اضغط على زر Go أو البحث",
      ],
      icon: "🔐",
      code: "4217716",
    },
    {
      number: 3,
      title: "تثبيت تطبيق Almalki Ultra",
      description:
        "انتظر حتى ينتهي التحميل ثم قم بتثبيت التطبيق على جهازك",
      details: [
        "انتظر حتى ينتهي تحميل تطبيق Almalki Ultra",
        "اضغط على زر Install (تثبيت)",
        "إذا ظهر لك تنبيه، فعّل خيار 'تثبيت من مصادر غير معروفة' لتطبيق Downloader من الإعدادات",
      ],
      icon: "⬇️",
    },
    {
      number: 4,
      title: "الاستمتاع بالخدمة",
      description:
        "بعد التثبيت، افتح التطبيق وسجل دخولك ببيانات اشتراكك",
      details: [
        "افتح تطبيق Almalki Ultra",
        "أدخل بيانات اشتراكك (اسم المستخدم وكلمة المرور)",
        "استمتع بمشاهدة جميع القنوات والأفلام",
      ],
      icon: "🎉",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button
              onClick={() => window.history.back()}
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <ArrowRight size={16} />
              العودة
            </button>
            <span>/</span>
            <span className="text-accent">طريقة التحميل</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Download size={64} className="text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            طريقة تحميل وتثبيت تطبيق Almalki Ultra
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اتبع الخطوات البسيطة أدناه لتحميل وتثبيت تطبيق Almalki Ultra على جهازك
            (أندرويد والشاشات الذكية)
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-accent to-accent/20" />
                )}

                <div className="flex gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-card rounded-lg border border-border p-8 hover:border-accent/50 transition-colors">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-4xl">{step.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Code Box (if applicable) */}
                      {step.code && (
                        <div className="my-6 p-6 bg-background rounded-lg border-2 border-accent/50">
                          <p className="text-sm text-muted-foreground mb-3">
                            كود التحميل الخاص بنا:
                          </p>
                          <div className="flex items-center gap-4">
                            <code className="text-3xl font-bold text-accent">
                              {step.code}
                            </code>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(step.code);
                                alert("تم نسخ الكود!");
                              }}
                              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                            >
                              نسخ الكود
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Details List */}
                      <div className="space-y-3">
                        {step.details.map((detail, detailIdx) => (
                          <div
                            key={detailIdx}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={20}
                              className="text-accent flex-shrink-0 mt-1"
                            />
                            <p className="text-foreground">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              ملاحظات مهمة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-accent mb-3">
                  ⚠️ إذا واجهت مشكلة
                </h3>
                <p className="text-muted-foreground text-sm">
                  إذا لم تتمكن من تثبيت التطبيق، تأكد من تفعيل خيار "تثبيت من
                  مصادر غير معروفة" لتطبيق Downloader من إعدادات جهازك.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-accent mb-3">
                  ✅ بعد التثبيت
                </h3>
                <p className="text-muted-foreground text-sm">
                  بعد التثبيت بنجاح، افتح التطبيق وسجل دخولك ببيانات اشتراكك
                  لبدء الاستمتاع بالخدمة.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-accent mb-3">
                  📱 الأجهزة المدعومة
                </h3>
                <p className="text-muted-foreground text-sm">
                  يعمل التطبيق على جميع أجهزة أندرويد والشاشات الذكية (Samsung
                  و LG وغيرها).
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-accent mb-3">
                  🆘 تحتاج مساعدة؟
                </h3>
                <p className="text-muted-foreground text-sm">
                  فريق الدعم الخاص بنا متاح 24/7 للمساعدة. تواصل معنا عبر
                  الواتساب.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            هل تحتاج إلى مساعدة؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            فريق الدعم الخاص بنا متاح 24/7 للإجابة على جميع أسئلتك والمساعدة في
            حل أي مشاكل
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/subscription">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                طلب اشتراك جديد
              </Button>
            </a>
            <a
              href="https://wa.me/966594150534?text=أحتاج مساعدة في تحميل التطبيق"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-card border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                تواصل معنا عبر الواتساب
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/manus-storage/almalki-logo_27904025.jpg"
                  alt="Almalki Ultra"
                  className="h-8 w-8 rounded"
                />
                <span className="text-lg font-bold text-accent">
                  Almalki Ultra
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                أفضل خدمات البث المباشر والأفلام والمسلسلات بجودة 4K
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/"
                    className="hover:text-accent transition-colors"
                  >
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a
                    href="/#packages"
                    className="hover:text-accent transition-colors"
                  >
                    الباقات
                  </a>
                </li>
                <li>
                  <a
                    href="/download-guide"
                    className="hover:text-accent transition-colors"
                  >
                    طريقة التحميل
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
              <a
                href="https://wa.me/966594150534"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm"
              >
                واتساب: +966 59 415 0534
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Almalki Ultra. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
