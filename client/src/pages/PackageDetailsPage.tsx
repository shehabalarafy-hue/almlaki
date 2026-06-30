import { useRoute } from "wouter";
import Header from "@/components/Header";
import PackageDetails from "@/components/PackageDetails";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const packagesData = {
  everest: {
    name: "الملكي برميوم",
    description:
      "إذا كنت تبحث عن أفضل اشتراك IPTV يجمع بين القوة، الثبات الخارق، والتنوع، فإن اشتراك إيفرست هو الاشتراك الأفضل وخيارك الأمثل لمشاهدة المباريات بدون تقطيع في السوق حالياً!",
    highlights: [
      {
        icon: "🏁",
        title: "أقوى اشتراك مباريات (بدون تقطيع)",
        description:
          "شاهد جميع المباريات والبطولات العالمية والمحلية بث مباشر وحصري. قنوات رياضية بجودات متعددة تضمن لك بثاً مستقراً ومريحاً للعين حتى مع سرعات الإنترنت المتوسطة.",
      },
      {
        icon: "🎬",
        title: "أكبر اشتراك مسلسلات وأفلام",
        description:
          "مكتبة فيديو ضخمة ومتجددة تضم أحدث الأفلام السينمائية والمسلسلات الحصرية (العربية، الأجنبية، والتركية). تحديث يومي ومستمر لإضافة كل جديد أولاً بأول!",
      },
      {
        icon: "🔒",
        title: "جودة وثبات خارق",
        description:
          "بنية تحتية متطورة وقوية تضمن لك تجربة مشاهدة آمنة ومستقرة تماماً ومحمية من التوقفات. متوافق مع جميع الأجهزة الذكية.",
      },
    ],
    features: [
      "بث مباشر لجميع المباريات بدون تقطيع",
      "قنوات رياضية بجودات متعددة (HD، FHD، 4K)",
      "مكتبة أفلام وسلاسل ضخمة ومتجددة",
      "تحديث يومي للمحتوى الجديد",
      "دعم جميع الأجهزة الذكية",
      "سيرفرات موزعة عالمياً",
      "حماية كاملة من التوقفات",
      "دعم فني 24/7",
      "سرعة بث فائقة",
      "جودة صوت وصورة عالية جداً",
    ],
  },
  hulk: {
    name: "هولك IPTV",
    description:
      "إذا كنت تبحث عن أفضل اشتراك IPTV يجمع بين القوة، الثبات، والتنوع بدون تقطيع، فإن اشتراك هولك الألماني هو خيارك الأول والأقوى في السوق حالياً!",
    highlights: [
      {
        icon: "🏁",
        title: "أقوى اشتراك مباريات",
        description:
          "شاهد جميع المباريات والبطولات العالمية والمحلية بث مباشر وحصري. قنوات رياضية بجودات متعددة تضمن لك بثاً مستقراً حتى مع سرعات الإنترنت المتوسطة.",
      },
      {
        icon: "🎬",
        title: "أكبر اشتراك مسلسلات وأفلام",
        description:
          "مكتبة فيديو ضخمة ومتجددة تضم أحدث الأفلام السينمائية والمسلسلات الحصرية. تحديث يومي ومستمر لإضافة كل جديد أولاً بأول!",
      },
      {
        icon: "🔒",
        title: "جودة وثبات ألماني",
        description:
          "بنية تحتية ألمانية قوية تضمن لك وداعاً لمشاكل التقطيع أثناء القمم الكروية الحاسمة. متوافق مع جميع الأجهزة الذكية.",
      },
    ],
    features: [
      "سيرفرات ألمانية موثوقة",
      "بث مباشر بدون تقطيع",
      "قنوات رياضية متعددة الجودات",
      "مكتبة محتوى ضخمة",
      "تحديثات يومية",
      "دعم جميع الأجهزة",
      "ثبات عالي جداً",
      "سرعة بث ممتازة",
      "دعم فني متميز",
      "حماية من الانقطاعات",
    ],
  },
  falcon: {
    name: "فالكون IPTV",
    description:
      "إذا كنت تبحث عن أفضل اشتراك IPTV يجمع بين الشهرة، الثبات، والتنوع بدون تقطيع، فإن اشتراك فالكون الأصلي هو خيارك الأول والأقوى في السوق حالياً!",
    highlights: [
      {
        icon: "🏁",
        title: "أقوى اشتراك مباريات",
        description:
          "شاهد جميع المباريات والبطولات العالمية والمحلية بث مباشر وحصري بوضوح تام. قنوات رياضية بجودات متعددة تضمن لك بثاً مستقراً بدون تقطيع.",
      },
      {
        icon: "🎬",
        title: "أكبر اشتراك مسلسلات وأفلام",
        description:
          "مكتبة فيديو ضخمة ومتجددة تضم أحدث الأفلام السينمائية والمسلسلات الحصرية. تحديث يومي ومستمر لإضافة كل جديد أولاً بأول!",
      },
      {
        icon: "🔒",
        title: "جودة وثبات السيرفر الأصلي",
        description:
          "سيرفرات فالكون الأصلية والمعروفة بقوتها واستقرارها العالي جداً منذ سنوات. متوافق مع جميع الأجهزة الذكية.",
      },
    ],
    features: [
      "سيرفرات أصلية موثوقة",
      "سمعة عالية في السوق",
      "بث مباشر بدون تقطيع",
      "قنوات رياضية متعددة",
      "مكتبة محتوى ضخمة",
      "تحديثات يومية",
      "دعم جميع الأجهزة",
      "ثبات عالي جداً",
      "سرعة بث ممتازة",
      "دعم فني 24/7",
    ],
  },
  strong: {
    name: "كنج 4K",
    description:
      "إذا كنت تبحث عن أفضل اشتراك IPTV يجمع بين الدقة الخارقة، الثبات، والتنوع بدون تقطيع، فإن اشتراك كنج 4K و 8K هو خيارك الأول والأقوى في السوق حالياً!",
    highlights: [
      {
        icon: "🏁",
        title: "أقوى اشتراك مباريات بدقة فائقة",
        description:
          "شاهد جميع المباريات والبطولات العالمية والمحلية بث مباشر وحصري بأعلى دقة ممكنة. قنوات رياضية بجودات متعددة تضمن لك بثاً مستقراً بدون تقطيع.",
      },
      {
        icon: "🎬",
        title: "أكبر اشتراك مسلسلات وأفلام سينمائية",
        description:
          "مكتبة فيديو ضخمة ومتجددة تضم أحدث الأفلام السينمائية والمسلسلات الحصرية بأعلى نقاوة. تحديث يومي ومستمر لإضافة كل جديد أولاً بأول!",
      },
      {
        icon: "🔒",
        title: "جودة وثبات سيرفرات سترونق",
        description:
          "بنية تحتية عملاقة توفر جودة 4K الحقيقية و 8K مع ثبات تام أثناء القمم الكروية الحاسمة. متوافق مع جميع الأجهزة الذكية.",
      },
    ],
    features: [
      "دعم جودة 4K و 8K",
      "بث مباشر بدقة فائقة",
      "قنوات رياضية بجودات متعددة",
      "مكتبة محتوى ضخمة بأعلى نقاوة",
      "تحديثات يومية",
      "دعم جميع الأجهزة الحديثة",
      "ثبات عالي جداً",
      "سرعة بث ممتازة",
      "دعم فني متميز",
      "حماية من الانقطاعات",
    ],
  },
  vulture: {
    name: "فولتشر IPTV",
    description:
      "إذا كنت تبحث عن أفضل اشتراك IPTV يجمع بين المتعة الترفيهية، الثبات، والتنوع بدون تقطيع، فإن اشتراك فولتشر هو خيارك الأول والأقوى في السوق حالياً!",
    highlights: [
      {
        icon: "🏁",
        title: "أقوى اشتراك مباريات",
        description:
          "شاهد جميع المباريات والبطولات العالمية والمحلية بث مباشر وحصري بوضوح تام وثبات ممتاز. قنوات رياضية بجودات متعددة تضمن لك بثاً مستقراً بدون تقطيع.",
      },
      {
        icon: "🎬",
        title: "أفضل اشتراك ترفيهي",
        description:
          "اشتراك ترفيهي من الطراز الأول يضم مكتبة فيديو ضخمة ومتجددة تحتوي على أحدث الأفلام والمسلسلات الحصرية. تحديث يومي ومستمر لإضافة كل جديد أولاً بأول!",
      },
      {
        icon: "🔒",
        title: "جودة وثبات سيرفر فولتشر",
        description:
          "بنية تحتية متطورة تضمن لك تجربة مشاهدة مريحة ومستقرة تماماً أثناء القمم الكروية أو متابعة مسلسلك المفضل. متوافق مع جميع الأجهزة الذكية.",
      },
    ],
    features: [
      "محتوى ترفيهي متنوع",
      "بث مباشر بدون تقطيع",
      "قنوات رياضية متعددة",
      "مكتبة أفلام وسلاسل ضخمة",
      "تحديثات يومية",
      "دعم جميع الأجهزة",
      "ثبات عالي جداً",
      "سرعة بث ممتازة",
      "دعم فني 24/7",
      "تجربة مشاهدة مريحة",
    ],
  },
  smarters: {
    name: "سيرفر الفا",
    description:
      "إذا كنت تبحث عن أفضل اشتراك IPTV يجمع بين الشهرة العالمية، السعر الاقتصادي، والثبات بدون تقطيع، فإن اشتراك سيرفر الفا هو خيارك الأسهل للتوفير والمتعة في السوق حالياً!",
    highlights: [
      {
        icon: "🏁",
        title: "أفضل اشتراك مباريات",
        description:
          "شاهد جميع المباريات والبطولات العالمية والمحلية بث مباشر وحصري بوضوح تام وثبات ممتاز. قنوات رياضية بجودات متعددة تناسب جميع سرعات الإنترنت.",
      },
      {
        icon: "🎬",
        title: "أكبر اشتراك مسلسلات وأفلام",
        description:
          "يغنيك عن الاشتراكات المتعددة والمكلفة حيث يضم مكتبة فيديو ضخمة ومتجددة تحتوي على أحدث الأفلام والمسلسلات الحصرية. تحديث يومي ومستمر!",
      },
      {
        icon: "🔒",
        title: "الخيار الأسهل والأكثر توافقاً",
        description:
          "واجهة تشغيل هي الأسهل والأكثر استقراراً في العالم. متوافق ويعمل بسلاسة فائقة على جميع الأجهزة الذكية والكمبيوتر.",
      },
    ],
    features: [
      "واجهة سهلة الاستخدام",
      "بث مباشر بدون تقطيع",
      "قنوات رياضية متعددة",
      "مكتبة محتوى ضخمة",
      "توفير اقتصادي",
      "دعم جميع الأجهزة",
      "استقرار عالي",
      "سهولة التثبيت والتفعيل",
      "دعم فني متميز",
      "تحديثات منتظمة",
    ],
  },
};

export default function PackageDetailsPage() {
  const [, params] = useRoute("/package/:id");
  const packageId = params?.id as string;

  const packageData =
    packagesData[packageId as keyof typeof packagesData];

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            الباقة غير موجودة
          </h1>
          <p className="text-muted-foreground mb-8">
            عذراً، لم نتمكن من العثور على الباقة المطلوبة.
          </p>
          <a href="/">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              العودة إلى الرئيسية
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-accent transition-colors">
              الرئيسية
            </a>
            <span>/</span>
            <a
              href="/#packages"
              className="hover:text-accent transition-colors"
            >
              الباقات
            </a>
            <span>/</span>
            <span className="text-accent">{packageData.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <PackageDetails
            packageId={packageId}
            packageName={packageData.name}
            description={packageData.description}
            features={packageData.features}
            highlights={packageData.highlights}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">عن Almalki Ultra</h4>
              <p className="text-sm text-muted-foreground">
                أفضل خدمات البث المباشر والأفلام والمسلسلات بجودة 4K
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-accent transition-colors">
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
                    href="/subscription"
                    className="hover:text-accent transition-colors"
                  >
                    طلب اشتراك
                  </a>
                </li>
              </ul>
            </div>
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
          <div className="h-px bg-border mb-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Almalki Ultra. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
