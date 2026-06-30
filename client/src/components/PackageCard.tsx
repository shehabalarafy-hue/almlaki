'use client';

import { useCallback, useState } from 'react';
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  packages: {
    duration: string;
    price: number;
    originalPrice?: number;
  }[];
  featured?: boolean;
}

export default function PackageCard({
  id,
  name,
  description,
  logo,
  packages,
  featured = false,
}: PackageCardProps) {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  // معالج اختيار/إلغاء الباقة
  const handlePackageSelect = useCallback((duration: string) => {
    setSelectedDuration((prev) => (prev === duration ? null : duration));
  }, []);

  // إنشاء رابط الواتساب
  const getWhatsAppUrl = () => {
    const phoneNumber = "966594150534";
    let message = "";
    
    if (selectedDuration) {
      const selectedPrice = packages.find(p => p.duration === selectedDuration)?.price;
      message = `مرحباً Almalki ultra، أود الاشتراك في الباقة التالية:%0A%0A🔹 السيرفر: ${name}%0A⏱️ المدة: ${selectedDuration}%0A💰 السعر: ${selectedPrice} ريال%0A%0Aيرجي ارسال طريقة الدفع لتفعيل الاشتراك.`;
    } else {
      message = `مرحباً Almalki ultra، أود الاستفسار عن باقات ${name}`;
    }
    
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden smooth-transition-slow ${
        featured
          ? "border-2 border-accent shadow-2xl shadow-accent/20 scale-105"
          : "border border-border hover:border-accent/50"
      } bg-card hover:shadow-xl transition-all duration-300`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
          الأفضل
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <img src={logo} alt={name} className="w-12 h-12 rounded-lg mb-3 mx-auto" />
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>

        {/* Packages */}
        <div className="space-y-2 mb-6">
          {packages.map((pkg, idx) => (
            <button
              key={idx}
              onClick={() => handlePackageSelect(pkg.duration)}
              className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center justify-between text-left group/pkg ${
                selectedDuration === pkg.duration
                  ? "border-2 border-accent bg-gradient-to-r from-accent/20 to-accent/5 shadow-lg shadow-accent/30 scale-105"
                  : "border border-border bg-background hover:border-accent/50 hover:bg-accent/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    selectedDuration === pkg.duration
                      ? "border-accent bg-accent"
                      : "border-border group-hover/pkg:border-accent/50"
                  }`}
                >
                  {selectedDuration === pkg.duration && (
                    <Check size={14} className="text-accent-foreground animate-bounce" />
                  )}
                </div>
                <span
                  className={`font-medium transition-colors duration-300 ${
                    selectedDuration === pkg.duration
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {pkg.duration}
                </span>
              </div>
              <div className="text-right">
                <span className="font-bold text-accent text-lg">{pkg.price}</span>
                <span className="text-muted-foreground text-sm"> ريال</span>
                {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                  <span className="text-xs text-muted-foreground line-through ml-2">
                    {pkg.originalPrice}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Package Info */}
        {selectedDuration && (
          <div className="mb-4 p-3 bg-accent/10 border border-accent/30 rounded-md flex items-center justify-between">
            <span className="text-sm text-foreground">
              ✓ تم اختيار: <span className="font-semibold text-accent">{selectedDuration}</span>
            </span>
            <button
              type="button"
              onClick={() => setSelectedDuration(null)}
              className="text-accent hover:text-accent/80 transition-colors"
              title="إلغاء الاختيار"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-2">
          <a href={`/package/${id}`} className="block">
            <Button
              className={`w-full transition-all duration-300 ${
                featured
                  ? "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg"
                  : "bg-card border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              عرض التفاصيل
            </Button>
          </a>
          {/* رابط الواتساب المباشر */}
          {selectedDuration ? (
            <>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button
                  type="button"
                  className="w-full transition-all duration-300 cursor-pointer px-4 py-3 rounded-md font-semibold text-base shadow-md bg-green-600 text-white hover:bg-green-700 active:bg-green-800 hover:shadow-xl hover:scale-105 group relative overflow-hidden animate-pulse"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative">✓ اطلب عبر الواتساب</span>
                </button>
              </a>
              {/* عرض الباقة والسعر المحددة */}
              <div className="mt-2 p-2 bg-accent/5 border border-accent/20 rounded-md text-center">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-accent">{selectedDuration}</span>
                  {' '}
                  <span className="text-foreground">•</span>
                  {' '}
                  <span className="font-bold text-accent">{packages.find(p => p.duration === selectedDuration)?.price} ريال</span>
                </p>
              </div>
            </>
          ) : (
            <button
              type="button"
              disabled
              className="w-full transition-all duration-300 cursor-not-allowed px-4 py-3 rounded-md font-semibold text-base shadow-md bg-gray-500 text-gray-300 opacity-60"
            >
              اختر باقة أولاً
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
