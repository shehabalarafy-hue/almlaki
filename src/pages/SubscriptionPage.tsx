import Header from "@/components/Header";
import SubscriptionForm from "@/components/SubscriptionForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SubscriptionPage() {
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
            <span className="text-accent">طلب اشتراك جديد</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SubscriptionForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            لماذا تختار Almalki Ultra؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "سرعة عالية",
                description: "بث بدون تقطيع وتأخير حتى في ساعات الذروة",
              },
              {
                icon: "📺",
                title: "جودة 4K",
                description: "أفضل جودة صورة متاحة مع دعم HDR",
              },
              {
                icon: "🎧",
                title: "دعم 24/7",
                description: "فريق دعم متاح دائماً للمساعدة والاستفسارات",
              },
              {
                icon: "🔒",
                title: "آمن وموثوق",
                description: "خوادم محمية وتشفير كامل للبيانات",
              },
              {
                icon: "📱",
                title: "متعدد الأجهزة",
                description: "استخدم على الهاتف والتلفاز والكمبيوتر",
              },
              {
                icon: "💰",
                title: "أسعار تنافسية",
                description: "أفضل قيمة مقابل المال في السوق",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-background p-6 rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            أسئلة شائعة
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "كم يستغرق تفعيل الاشتراك؟",
                a: "عادة ما يتم تفعيل الاشتراك خلال 24 ساعة من تأكيد الدفع. في بعض الحالات قد يتم التفعيل فوراً.",
              },
              {
                q: "ما هي طرق الدفع المتاحة؟",
                a: "نقبل التحويل البنكي، بطاقات الائتمان، والمحافظ الرقمية. يمكنك الاستفسار عن الطرق المتاحة.",
              },
              {
                q: "هل هناك فترة تجريبية مجانية؟",
                a: "نعم، نوفر فترة تجريبية مدتها 24 ساعة كحد أقصى لجميع العملاء الجدد.",
              },
              {
                q: "كم عدد الأجهزة التي يمكن استخدام الاشتراك عليها؟",
                a: "يمكنك استخدام الاشتراك على جهاز واحد فقط، إلا في حال شراء اشتراك لجهازين في نفس الوقت.",
              },
              {
                q: "ماذا إذا واجهت مشكلة تقنية؟",
                a: "فريق الدعم الخاص بنا متاح 24/7 عبر الواتساب والبريد الإلكتروني والهاتف.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="text-lg font-bold text-accent mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل لديك أي استفسارات؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            فريق الدعم الخاص بنا جاهز للمساعدة
          </p>
          <a
            href="https://wa.me/966594150534?text=أحتاج مساعدة"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              تواصل معنا عبر الواتساب
            </Button>
          </a>
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
                  <a href="/#packages" className="hover:text-accent transition-colors">
                    الباقات
                  </a>
                </li>
                <li>
                  <a href="/#activation" className="hover:text-accent transition-colors">
                    طرق التفعيل
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
