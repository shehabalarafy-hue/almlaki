import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/manus-storage/almalki-logo_27904025.jpg" alt="Almalki Ultra" className="h-10 w-10 rounded" />
          <span className="text-xl font-bold text-accent hidden sm:inline">Almalki Ultra</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("packages")}
            className="text-foreground hover:text-accent transition-colors"
          >
            الباقات
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-foreground hover:text-accent transition-colors"
          >
            المميزات
          </button>
          <button
            onClick={() => scrollToSection("activation")}
            className="text-foreground hover:text-accent transition-colors"
          >
            طرق التفعيل
          </button>
          <a
            href="/download-guide"
            className="text-foreground hover:text-accent transition-colors"
          >
            طريقة التحميل
          </a>
          <a
            href="/setup"
            className="text-foreground hover:text-accent transition-colors"
          >
            التفعيل على الأجهزة
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/966594150534?text=أريد الاستفسار عن الاشتراكات"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all">
              تواصل معنا
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("packages")}
              className="text-foreground hover:text-accent transition-colors text-right"
            >
              الباقات
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-accent transition-colors text-right"
            >
              المميزات
            </button>
            <button
              onClick={() => scrollToSection("activation")}
              className="text-foreground hover:text-accent transition-colors text-right"
            >
              طرق التفعيل
            </button>
            <a
              href="/download-guide"
              className="text-foreground hover:text-accent transition-colors text-right"
            >
              طريقة التحميل
            </a>
            <a
              href="/setup"
              className="text-foreground hover:text-accent transition-colors text-right"
            >
              التفعيل على الأجهزة
            </a>
            <a
              href="https://wa.me/966594150534?text=أريد الاستفسار عن الاشتراكات"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                تواصل معنا
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
