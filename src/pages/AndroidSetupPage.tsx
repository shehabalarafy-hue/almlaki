import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Smartphone, Tv } from "lucide-react";

export default function AndroidSetupPage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  const androidSteps = [
    {
      number: 1,
      title: "تحميل التطبيق",
      description: "قم بتحميل تطبيق IPTV من متجر Google Play",
      details: [
        "افتح متجر Google Play على جهازك",
        "ابحث عن اسم التطبيق المطلوب",
        "اضغط على زر التحميل",
        "انتظر حتى ينتهي التحميل والتثبيت",
      ],
    },
    {
      number: 2,
      title: "فتح التطبيق",
      description: "افتح التطبيق واذهب إلى الإعدادات",
      details: [
        "اضغط على أيقونة التطبيق من الشاشة الرئيسية",
        "انتظر حتى يتم تحميل التطبيق بالكامل",
        "ابحث عن خيار الإعدادات (Settings)",
        "قد تجده في القائمة الرئيسية أو في أعلى الشاشة",
      ],
    },
    {
      number: 3,
      title: "إدخال بيانات الاشتراك",
      description: "أدخل بيانات اشتراكك من البريد الإلكتروني",
      details: [
        "انسخ اسم المستخدم من البريد الإلكتروني",
        "انسخ كلمة المرور من البريد الإلكتروني",
        "الصق البيانات في حقول الإدخال",
        "اضغط على زر تسجيل الدخول",
      ],
    },
    {
      number: 4,
      title: "الاستمتاع بالمحتوى",
      description: "ابدأ بمشاهدة القنوات والأفلام",
      details: [
        "بعد تسجيل الدخول الناجح، ستظهر قائمة القنوات",
        "اختر القناة أو الفيلم الذي تريد مشاهدته",
        "استمتع بمشاهدة محتوى عالي الجودة",
        "يمكنك البحث عن محتوى معين باستخدام خاصية البحث",
      ],
    },
  ];

  const samsungSteps = [
    {
      number: 1,
      title: "تحميل تطبيق 0Player",
      description: "قم بتحميل تطبيق 0Player من متجر التطبيقات",
      details: [
        "افتح متجر التطبيقات على جهاز سامسونج الذكي",
        "ابحث عن 0Player",
        "اضغط على التحميل والتثبيت",
        "انتظر حتى ينتهي التثبيت",
      ],
    },
    {
      number: 2,
      title: "فتح التطبيق",
      description: "افتح تطبيق 0Player",
      details: [
        "اضغط على أيقونة 0Player من الشاشة الرئيسية",
        "انتظر حتى يتم تحميل التطبيق",
        "ستظهر الشاشة الرئيسية للتطبيق",
      ],
    },
    {
      number: 3,
      title: "إضافة قائمة التشغيل",
      description: "اذهب إلى قائمة التشغيل وأضف Playlist جديدة",
      details: [
        "اضغط على خيار 'Playlist' أو 'قائمة التشغيل'",
        "اختر 'Add Playlist' أو 'إضافة قائمة'",
        "اختر 'Portal Code' أو 'رمز البوابة'",
        "أدخل الرمز: 53222236",
      ],
    },
    {
      number: 4,
      title: "إدخال بيانات الاشتراك",
      description: "أدخل بيانات الاشتراك الخاصة بك",
      details: [
        "أدخل اسم المستخدم من البريد الإلكتروني",
        "أدخل كلمة المرور من البريد الإلكتروني",
        "اضغط على زر التأكيد",
        "سيتم تحميل القنوات تلقائياً",
      ],
    },
    {
      number: 5,
      title: "الاستمتاع بالمشاهدة",
      description: "ابدأ بمشاهدة جميع القنوات والمحتوى",
      details: [
        "بعد التحميل الناجح، ستظهر قائمة القنوات",
        "اختر القناة التي تريد مشاهدتها",
        "استمتع بجودة 4K على شاشتك الذكية",
        "يمكنك حفظ القنوات المفضلة",
      ],
    },
  ];

  const lgSteps = [
    {
      number: 1,
      title: "تحميل تطبيق 0Player",
      description: "قم بتحميل تطبيق 0Player من متجر LG",
      details: [
        "افتح متجر LG Apps على جهاز LG الذكي",
        "ابحث عن 0Player",
        "اضغط على التحميل",
        "انتظر حتى ينتهي التثبيت",
      ],
    },
    {
      number: 2,
      title: "فتح التطبيق",
      description: "افتح تطبيق 0Player من قائمة التطبيقات",
      details: [
        "اضغط على أيقونة 0Player",
        "انتظر تحميل التطبيق",
        "ستظهر الشاشة الرئيسية",
      ],
    },
    {
      number: 3,
      title: "إضافة Playlist",
      description: "أضف قائمة تشغيل جديدة",
      details: [
        "اضغط على 'Playlist'",
        "اختر 'Add Playlist'",
        "اختر 'Portal Code'",
        "أدخل الرمز: 53222236",
      ],
    },
    {
      number: 4,
      title: "إدخال البيانات",
      description: "أدخل بيانات اشتراكك",
      details: [
        "أدخل اسم المستخدم",
        "أدخل كلمة المرور",
        "اضغط تأكيد",
        "سيتم تحميل القنوات",
      ],
    },
    {
      number: 5,
      title: "الاستمتاع",
      description: "ابدأ بمشاهدة المحتوى",
      details: [
        "اختر القناة المطلوبة",
        "استمتع بالمشاهدة",
        "استخدم الريموت للتنقل",
      ],
    },
  ];

  const StepCard = ({ step, isExpanded, onToggle }: any) => (
    <div className="border border-border rounded-lg overflow-hidden mb-4 hover:border-accent/50 transition-colors">
      <button
        onClick={onToggle}
        className="w-full p-4 bg-card hover:bg-card/80 transition-colors flex items-center justify-between"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
            {step.number}
          </div>
          <div>
            <h3 className="font-bold text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-accent" size={20} />
        ) : (
          <ChevronDown className="text-accent" size={20} />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 bg-background border-t border-border">
          <ul className="space-y-2">
            {step.details.map((detail: string, idx: number) => (
              <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            طرق التفعيل على الأجهزة
          </h1>
          <p className="text-lg text-muted-foreground">
            اختر جهازك وتابع الخطوات البسيطة للبدء في الاستمتاع بخدماتنا
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="android" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card border border-border">
            <TabsTrigger value="android" className="flex items-center gap-2">
              <Smartphone size={18} />
              <span className="hidden sm:inline">أندرويد</span>
            </TabsTrigger>
            <TabsTrigger value="samsung" className="flex items-center gap-2">
              <Tv size={18} />
              <span className="hidden sm:inline">سامسونج</span>
            </TabsTrigger>
            <TabsTrigger value="lg" className="flex items-center gap-2">
              <Tv size={18} />
              <span className="hidden sm:inline">LG</span>
            </TabsTrigger>
          </TabsList>

          {/* Android Tab */}
          <TabsContent value="android">
            <Card className="bg-card border-border p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                تفعيل على أندرويد
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                اتبع الخطوات البسيطة أدناه لتفعيل الاشتراك على جهازك الأندرويد
              </p>

              <div className="space-y-4">
                {androidSteps.map((step, idx) => (
                  <StepCard
                    key={idx}
                    step={step}
                    isExpanded={expandedStep === idx}
                    onToggle={() =>
                      setExpandedStep(expandedStep === idx ? null : idx)
                    }
                  />
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-accent">ملاحظة مهمة:</span> تأكد من
                  أن جهازك متصل بالإنترنت وأن لديك أحدث إصدار من التطبيق
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Samsung Tab */}
          <TabsContent value="samsung">
            <Card className="bg-card border-border p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                تفعيل على سامسونج
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                اتبع الخطوات أدناه لتفعيل الاشتراك على شاشة سامسونج الذكية
              </p>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-accent">رمز البوابة:</span>{" "}
                  <span className="font-mono text-lg text-accent">53222236</span>
                </p>
              </div>

              <div className="space-y-4">
                {samsungSteps.map((step, idx) => (
                  <StepCard
                    key={idx}
                    step={step}
                    isExpanded={expandedStep === idx}
                    onToggle={() =>
                      setExpandedStep(expandedStep === idx ? null : idx)
                    }
                  />
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-accent">نصيحة:</span> إذا واجهت
                  مشكلة في إيجاد 0Player، تأكد من أن جهازك يدعم التطبيق وأن لديك
                  اتصال إنترنت قوي
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* LG Tab */}
          <TabsContent value="lg">
            <Card className="bg-card border-border p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                تفعيل على LG
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                اتبع الخطوات أدناه لتفعيل الاشتراك على شاشة LG الذكية
              </p>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-accent">رمز البوابة:</span>{" "}
                  <span className="font-mono text-lg text-accent">53222236</span>
                </p>
              </div>

              <div className="space-y-4">
                {lgSteps.map((step, idx) => (
                  <StepCard
                    key={idx}
                    step={step}
                    isExpanded={expandedStep === idx}
                    onToggle={() =>
                      setExpandedStep(expandedStep === idx ? null : idx)
                    }
                  />
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-accent">نصيحة:</span> أجهزة LG
                  الحديثة توفر تجربة ممتازة مع 0Player. تأكد من تحديث نظام التشغيل
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <Card className="bg-card border-border p-8 mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            أسئلة شائعة
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-2">
                ماذا لو لم يعمل التطبيق؟
              </h3>
              <p className="text-sm text-muted-foreground">
                جرب إعادة تشغيل الجهاز وتأكد من اتصالك بالإنترنت. إذا استمرت
                المشكلة، اتصل بفريق الدعم الخاص بنا عبر الواتساب
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-2">
                هل يمكنني استخدام الاشتراك على عدة أجهزة؟
              </h3>
              <p className="text-sm text-muted-foreground">
                نعم، يمكنك استخدام نفس بيانات الاشتراك على عدة أجهزة. تحقق من
                شروط الاشتراك للمزيد من التفاصيل
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-2">
                كيف أحصل على دعم فني؟
              </h3>
              <p className="text-sm text-muted-foreground">
                يمكنك التواصل معنا عبر الواتساب أو البريد الإلكتروني. فريق الدعم
                الخاص بنا متاح 24/7
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-accent/5 border border-border rounded-lg text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            هل تحتاج إلى مساعدة؟
          </h2>
          <p className="text-muted-foreground mb-6">
            فريق الدعم الخاص بنا متاح دائماً لمساعدتك
          </p>
          <a
            href="https://wa.me/966594150534?text=أحتاج مساعدة في التفعيل"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              تواصل معنا عبر الواتساب
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
