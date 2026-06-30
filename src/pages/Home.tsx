import Header from "@/components/Header";
import { useEffect, useRef } from "react";
import PackageCard from "@/components/PackageCard";
import ActivationGuide from "@/components/ActivationGuide";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Zap, Tv, Headphones } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Premium Dark Luxury IPTV Store
 * Design: Gold & Dark Navy theme with smooth interactions
 * Typography: Poppins for headings, Inter for body
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply scroll animations to elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll(".scroll-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      id: "everest",
      name: "الملكي برميوم",
      description: "الاشتراك الأفضل",
      logo: "/almalki.jpg",
      featured: true,
      packages: [
        { duration: "3 أشهر", price: 80 },
        { duration: "6 أشهر", price: 130 },
        { duration: "سنة واحدة", price: 190, originalPrice: 250 },
      ],
    },
    {
      id: "strong",
      name: "كنج 4K",
      description: "جودة عالية جداً",
      logo: "/almalki.jpg",
      packages: [
        { duration: "شهر واحد", price: 70 },
        { duration: "3 أشهر", price: 180 },
        { duration: "6 أشهر", price: 260 },
        { duration: "سنة واحدة", price: 320 },
      ],
    },
    {
      id: "hulk",
      name: "هولك IPTV",
      description: "قوي وموثوق",
      logo: "/hulk.jpg",
      packages: [
        { duration: "3 أشهر", price: 100 },
        { duration: "6 أشهر", price: 150 },
        { duration: "سنة واحدة", price: 250 },
      ],
    },
    {
      id: "falcon",
      name: "فالكون IPTV",
      description: "الاشتراك العصري",
      logo: "/falcon.jpg",
      packages: [
        { duration: "3 أشهر", price: 130 },
        { duration: "6 أشهر", price: 200 },
        { duration: "سنة واحدة", price: 300 },
      ],
    },
    {
      id: "vulture",
      name: "فولتشر IPTV",
      description: "الترفيهي المتميز",
      logo: "/vulture.jpg",
      packages: [
        { duration: "3 أشهر", price: 69 },
        { duration: "6 أشهر", price: 99 },
        { duration: "سنة واحدة", price: 149 },
      ],
    },
    {
      id: "smarters",
      name: "سيرفر الفا",
      description: "تطبيق موثوق",
      logo: "/almalki.jpg",
      packages: [
        { duration: "3 أشهر", price: 70 },
        { duration: "6 أشهر", price: 100 },
        { duration: "سنة واحدة", price: 150 },
      ],
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "سرعة عالية",
      description: "بث بدون تقطيع وتأخير",
    },
    {
      icon: "📺",
      title: "جودة 4K",
      description: "أفضل جودة صورة متاحة",
    },
    {
      icon: "🎧",
      title: "دعم 24/7",
      description: "فريق دعم متاح دائماً",
    },
  ];

  const activationGuides = [
    {
      title: "أندرويد و Google TV",
      subtitle:
        "يمكنك تفعيل الاشتراك بسهولة على أجهزة أندرويد و Google TV باتباع الخطوات البسيطة",
      icon: "📱",
      devices: "Google TV والأندرويد",
      steps: [
        {
          number: 1,
          title: "تحميل التطبيق",
          description: "حمل تطبيق IPTV من متجر Google Play",
        },
        {
          number: 2,
          title: "فتح التطبيق",
          description: "افتح التطبيق واذهب إلى الإعدادات",
        },
        {
          number: 3,
          title: "إدخال البيانات",
          description: "أدخل بيانات اشتراكك من البريد الإلكتروني",
        },
        {
          number: 4,
          title: "الاستمتاع",
          description: "ابدأ بمشاهدة القنوات والأفلام",
        },
      ],
    },
    {
      title: "آيفون و Apple TV",
      subtitle:
        "تفعيل سهل على أجهزة Apple مع أفضل جودة صورة",
      icon: "🍎",
      devices: "آيفون وآبل تي في",
      steps: [
        {
          number: 1,
          title: "تحميل التطبيق",
          description: "حمل تطبيق IPTV من App Store",
        },
        {
          number: 2,
          title: "فتح التطبيق",
          description: "افتح التطبيق وانتقل إلى الإعدادات",
        },
        {
          number: 3,
          title: "إدخال البيانات",
          description: "أدخل بيانات الدخول الخاصة بك",
        },
        {
          number: 4,
          title: "الاستمتاع",
          description: "استمتع بمشاهدة جميع المحتوى",
        },
      ],
    },
    {
      title: "سامسونج و LG",
      subtitle:
        "طريقة التفعيل على أجهزة التلفاز الذكية باستخدام 0Player",
      icon: "📺",
      devices: "سامسونج و LG",
      steps: [
        {
          number: 1,
          title: "فتح 0Player",
          description: "افتح تطبيق 0Player على جهازك",
        },
        {
          number: 2,
          title: "اختر Playlist",
          description: "اذهب إلى قائمة التشغيل",
        },
        {
          number: 3,
          title: "إضافة قائمة",
          description: "اختر Add Playlist وثم Portal Code",
        },
        {
          number: 4,
          title: "إدخال الرمز",
          description: "أدخل رمز البوابة وبيانات اشتراكك",
        },
      ],
      portalCode: "53222236",
    },
  ];

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/manus-storage/hero-background_9d18d351.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-1" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            ارتق إلى قمة <span className="gradient-text">تجربة المشاهدة</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            مع اشتراك Almalki Ultra - أفضل خدمات البث المباشر والأفلام والمسلسلات بجودة 4K
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/subscription">
              <Button className="btn-premium text-lg px-10 py-7 rounded-xl lift-hover btn-pulse">
                طلب اشتراك الآن
              </Button>
            </a>
            <a
              href="https://wa.me/966594150534?text=أريد الاستفسار"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-transparent border-2 border-accent text-accent hover:bg-accent/10 text-lg px-10 py-7 rounded-xl smooth-transition scale-hover">
                تواصل عبر الواتساب
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-32 bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="gradient-text text-sm font-bold tracking-widest uppercase">باقات متميزة</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-4">
              باقاتنا المتميزة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر الباقة المناسبة لك بأسعار تنافسية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="scroll-animate">
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="gradient-text text-sm font-bold tracking-widest uppercase">مميزات متفردة</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-4">
              لماذا تختار Almalki Ultra؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="scroll-animate card-premium p-8 rounded-2xl text-center lift-hover hover-zoom hover-glow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activation Guide Section */}
      <section id="activation" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              روابط تهمك
            </h2>
            <p className="text-lg text-muted-foreground">
              طرق التفعيل على جميع الأجهزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activationGuides.map((guide, idx) => (
              <div key={idx} className="scroll-animate">
                <ActivationGuide {...guide} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            هل تواجه مشكلة في التفعيل؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            فريق الدعم الخاص بنا متاح 24/7 للمساعدة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/subscription">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                طلب اشتراك جديد
              </Button>
            </a>
            <a
              href="https://wa.me/966594150534?text=أحتاج مساعدة"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-card border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                تواصل عبر الواتساب
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
                  src="/almalki-logo.jpg"
                  alt="Almalki Ultra"
                  className="h-8 w-8 rounded"
                />
                <span className="text-lg font-bold text-accent">Almalki Ultra</span>
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
                  <button
                    onClick={() =>
                      document
                        .getElementById("packages")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    الباقات
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("features")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    المميزات
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("activation")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    طرق التفعيل
                  </button>
                </li>
                <li>
                  <a
                    href="/subscription"
                    className="hover:text-accent transition-colors"
                  >
                    الأسئلة الشائعة
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
