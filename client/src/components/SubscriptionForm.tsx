"use client";

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
        return;
      }

      // إرسال البيانات عبر tRPC
      await createSubscription.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        packageName: selectedPackage.name,
        duration: selectedDuration.label,
        price: formData.package === "strong4k" ? selectedDuration.price : selectedPackage.price,
        deviceType: formData.deviceType as "android" | "apple" | "smarttv",
      });

      setSubmitted(true);
      toast.success("تم استقبال طلبك بنجاح! سيتم توجيهك للواتساب");

      // تحويل تلقائي للواتساب بعد ثانيتين
      setTimeout(() => {
        const whatsappMessage = `مرحباً، أنا ${formData.fullName}\nأريد الاشتراك في باقة ${selectedPackage.name}\nللمدة: ${selectedDuration.label}\nنوع الجهاز: ${selectedDevice.label}\nرقم الهاتف: ${formData.phone}\nالبريد الإلكتروني: ${formData.email}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.location.href = `https://wa.me/966594150534?text=${encodedMessage}`;
      }, 2000);

      // إعادة تعيين النموذج بعد 3 ثواني
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
      }, 3000);
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const selectedPackage = packages.find((p) => p.id === formData.package);
    const selectedDuration = durations.find((d) => d.id === formData.duration);
    const selectedDevice = deviceTypes.find((d) => d.id === formData.deviceType);
    const whatsappMessage = `مرحباً، أنا ${formData.fullName}\nأريد الاشتراك في باقة ${selectedPackage?.name}\nللمدة: ${selectedDuration?.label}\nنوع الجهاز: ${selectedDevice?.label}\nرقم الهاتف: ${formData.phone}\nالبريد الإلكتروني: ${formData.email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

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
        <a
          href={`https://wa.me/966594150534?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <MessageCircle className="mr-2" size={20} />
            الانتقال للواتساب الآن
          </Button>
        </a>

        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm text-muted-foreground">
          ملء النموذج أدناه لطلب الاشتراك. سيتم توجيهك تلقائياً للواتساب لإرسال بيانات طلبك. جميع بيانات العملاء محمية وآمنة.
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border p-8">
      <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
        طلب اشتراك جديد
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        ملء النموذج أدناه لطلب الاشتراك، سيتم توجيهك للواتساب تلقائياً لإرسال بيانات طلبك.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="text-foreground font-semibold mb-2 block">
            الاسم الكامل *
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="أدخل اسمك الكامل"
            value={formData.fullName}
            onChange={(e) => handleInputChange(e, "fullName")}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            dir="rtl"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
            البريد الإلكتروني *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-foreground font-semibold mb-2 block">
            رقم الهاتف *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+966 5XXXXXXXX"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            dir="ltr"
          />
        </div>

        {/* Package Selection */}
        <div>
          <Label htmlFor="package" className="text-foreground font-semibold mb-2 block">
            اختر الباقة *
          </Label>
          <Select value={formData.package} onValueChange={(value) => handleSelectChange("package", value)}>
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="اختر باقة الاشتراك" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {packages.map((pkg) => (
                <SelectItem key={pkg.id} value={pkg.id} className="text-foreground">
                  {pkg.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Duration Selection */}
        <div>
          <Label htmlFor="duration" className="text-foreground font-semibold mb-2 block">
            مدة الاشتراك *
          </Label>
          <Select value={formData.duration} onValueChange={(value) => handleSelectChange("duration", value)}>
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="اختر مدة الاشتراك" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {durations.map((duration) => (
                <SelectItem key={duration.id} value={duration.id} className="text-foreground">
                  {duration.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Device Type Selection */}
        <div>
          <Label htmlFor="deviceType" className="text-foreground font-semibold mb-2 block">
            نوع الجهاز *
          </Label>
          <Select value={formData.deviceType} onValueChange={(value) => handleSelectChange("deviceType", value)}>
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="اختر نوع الجهاز" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {deviceTypes.map((device) => (
                <SelectItem key={device.id} value={device.id} className="text-foreground">
                  {device.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Info Box */}
        <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg flex gap-3">
          <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-muted-foreground">
            بعد إرسال الطلب، سيتم توجيهك للواتساب لإرسال بيانات طلبك. جميع بيانات العملاء محمية وآمنة.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading || createSubscription.isPending}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all disabled:opacity-50"
        >
          {loading || createSubscription.isPending ? "جاري الإرسال..." : "إرسال الطلب"}
        </Button>
      </form>
    </Card>
  );
}
