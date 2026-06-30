import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface SubscriptionFormProps {
  onClose?: () => void;
}

export default function SubscriptionForm({ onClose }: SubscriptionFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    package: "",
    duration: "",
    deviceType: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // tRPC mutation for creating subscription
  const createSubscription = trpc.subscription.create.useMutation();

  const packages = [
    { id: "everest", name: "الملكي برميوم", description: "الاشتراك الأفضل", price: 190 },
    { id: "strong4k", name: "كنج 4K", description: "جودة عالية جداً", price: 320 },
    { id: "hulk", name: "هولك IPTV", description: "قوي وموثوق", price: 250 },
    { id: "falcon", name: "فالكون IPTV", description: "الاشتراك العصري", price: 300 },
    { id: "vulture", name: "فولتشر IPTV", description: "الترفيهي المتميز", price: 149 },
    { id: "smarters", name: "سيرفر الفا", description: "تطبيق موثوق", price: 150 },
  ];

  const durations = [
    { id: "1month", label: "شهر واحد", price: 70 },
    { id: "3months", label: "3 أشهر", price: 180 },
    { id: "6months", label: "6 أشهر", price: 260 },
    { id: "1year", label: "سنة واحدة", price: 320 },
  ];

  const deviceTypes = [
    { id: "android", label: "أندرويد" },
    { id: "apple", label: "أبل" },
    { id: "smarttv", label: "شاشة ذكية" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("يرجى إدخال الاسم الكامل");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("يرجى إدخال بريد إلكتروني صحيح");
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      toast.error("يرجى إدخال رقم هاتف صحيح");
      return false;
    }
    if (!formData.package) {
      toast.error("يرجى اختيار باقة");
      return false;
    }
    if (!formData.duration) {
      toast.error("يرجى اختيار مدة الاشتراك");
      return false;
    }
    if (!formData.deviceType) {
      toast.error("يرجى اختيار نوع الجهاز");
      return false;
    }
    return true;
  };

  const redirectToWhatsApp = (packageName: string, duration: string, deviceLabel: string) => {
    // Generate WhatsApp message with new format
    const whatsappMessage = `مرحباً Almalki ultra، أود الاشتراك في الباقة التالية:

🔹 السيرفر: ${packageName}
⏱️ المدة: ${duration}
💰 السعر: ${formData.package === "strong4k" ? durations.find(d => d.id === formData.duration)?.price : packages.find(p => p.id === formData.package)?.price} ريال

يرجي ارسال طريقة الدفع لتفعيل الاشتراك.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.location.href = `https://wa.me/966594150534?text=${encodedMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const selectedPackage = packages.find((p) => p.id === formData.package);
      const selectedDuration = durations.find((d) => d.id === formData.duration);
      const selectedDevice = deviceTypes.find((d) => d.id === formData.deviceType);

      if (!selectedPackage || !selectedDuration || !selectedDevice) {
        toast.error("يرجى اختيار باقة ومدة وجهاز صحيحة");
        setLoading(false);
        return;
      }

      // Try to send data to backend
      try {
        await createSubscription.mutateAsync({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          packageName: selectedPackage.name,
          duration: selectedDuration.label,
          price: formData.package === "strong4k" ? selectedDuration.price : selectedPackage.price,
          deviceType: formData.deviceType as "android" | "apple" | "smarttv",
        });
        console.log("[Subscription] Data saved successfully");
      } catch (dbError) {
        // If database fails, continue to WhatsApp anyway
        console.warn("[Subscription] Database save failed, continuing to WhatsApp:", dbError);
      }

      setSubmitted(true);
      toast.success("تم استقبال طلبك بنجاح! سيتم توجيهك للواتساب");

      // تحويل تلقائي للواتساب بعد ثانيتين
      setTimeout(() => {
        redirectToWhatsApp(selectedPackage.name, selectedDuration.label, selectedDevice.label);
      }, 2000);

      // إعادة تعيين النموذج بعد 5 ثواني
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          package: "",
          duration: "",
          deviceType: "",
        });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("[Subscription] Error:", error);
      // Even if there's an error, show success message and redirect to WhatsApp
      toast.success("سيتم توجيهك للواتساب الآن");
      
      const selectedPackage = packages.find((p) => p.id === formData.package);
      const selectedDuration = durations.find((d) => d.id === formData.duration);
      const selectedDevice = deviceTypes.find((d) => d.id === formData.deviceType);

      if (selectedPackage && selectedDuration && selectedDevice) {
        setSubmitted(true);
        setTimeout(() => {
          redirectToWhatsApp(selectedPackage.name, selectedDuration.label, selectedDevice.label);
        }, 1000);
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const selectedPackage = packages.find((p) => p.id === formData.package);
    const selectedDuration = durations.find((d) => d.id === formData.duration);
    const selectedDevice = deviceTypes.find((d) => d.id === formData.deviceType);

    return (
      <Card className="bg-card border-border p-8 text-center">
        <div className="mb-4 flex justify-center">
          <CheckCircle2 className="text-accent" size={64} />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          شكراً لك على اختيارك Almalki Ultra
        </h3>
        <p className="text-muted-foreground mb-6">
          سيتم توجيهك للواتساب الآن لإرسال بيانات طلبك. جميع بيانات العملاء محمية وآمنة.
        </p>

        {/* رابط الواتس آب البديل */}
        <button
          onClick={() => {
            if (selectedPackage && selectedDuration && selectedDevice) {
              redirectToWhatsApp(selectedPackage.name, selectedDuration.label, selectedDevice.label);
            }
          }}
          className="inline-block"
        >
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <MessageCircle className="mr-2" size={20} />
            الانتقال للواتساب الآن
          </Button>
        </button>

        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm text-muted-foreground">
          ملء النموذج أدناه لطلب الاشتراك. سيتم توجيهك تلقائياً للواتساب لإرسال بيانات طلبك. جميع بيانات العملاء محمية وآمنة.
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border p-8">
      <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
        طلب الاشتراك
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        ملء النموذج أدناه لطلب الاشتراك
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* الاسم الكامل */}
        <div>
          <Label htmlFor="fullName" className="text-foreground mb-2 block">
            الاسم الكامل *
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="أدخل اسمك الكامل"
            value={formData.fullName}
            onChange={(e) => handleInputChange(e, "fullName")}
            className="bg-background border-border text-foreground placeholder-muted-foreground"
            dir="rtl"
          />
        </div>

        {/* البريد الإلكتروني */}
        <div>
          <Label htmlFor="email" className="text-foreground mb-2 block">
            البريد الإلكتروني *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
            className="bg-background border-border text-foreground placeholder-muted-foreground"
          />
        </div>

        {/* رقم الهاتف */}
        <div>
          <Label htmlFor="phone" className="text-foreground mb-2 block">
            رقم الهاتف *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="966501234567"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            className="bg-background border-border text-foreground placeholder-muted-foreground"
            dir="ltr"
          />
        </div>

        {/* اختيار الباقة */}
        <div>
          <Label htmlFor="package" className="text-foreground mb-2 block">
            الباقة *
          </Label>
          <Select value={formData.package} onValueChange={(value) => handleSelectChange("package", value)}>
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="اختر الباقة" />
            </SelectTrigger>
            <SelectContent>
              {packages.map((pkg) => (
                <SelectItem key={pkg.id} value={pkg.id}>
                  {pkg.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* اختيار المدة */}
        <div>
          <Label htmlFor="duration" className="text-foreground mb-2 block">
            مدة الاشتراك *
          </Label>
          <Select value={formData.duration} onValueChange={(value) => handleSelectChange("duration", value)}>
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="اختر المدة" />
            </SelectTrigger>
            <SelectContent>
              {durations.map((duration) => (
                <SelectItem key={duration.id} value={duration.id}>
                  {duration.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* اختيار نوع الجهاز */}
        <div>
          <Label htmlFor="deviceType" className="text-foreground mb-2 block">
            نوع الجهاز *
          </Label>
          <Select value={formData.deviceType} onValueChange={(value) => handleSelectChange("deviceType", value)}>
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="اختر نوع الجهاز" />
            </SelectTrigger>
            <SelectContent>
              {deviceTypes.map((device) => (
                <SelectItem key={device.id} value={device.id}>
                  {device.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* رسالة التنبيه */}
        <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg flex gap-3">
          <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-muted-foreground">
            بعد إرسال الطلب، سيتم توجيهك للواتساب لإرسال بيانات طلبك. جميع بيانات العملاء محمية وآمنة.
          </p>
        </div>

        {/* زر الإرسال */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
        >
          {loading ? "جاري الإرسال..." : "إرسال الطلب"}
        </Button>
      </form>
    </Card>
  );
}
