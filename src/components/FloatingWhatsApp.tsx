import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/966594150534?text=أحتاج مساعدة"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-40 group-hover:opacity-60 smooth-transition" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-20" />

        {/* Button */}
        <div className="relative btn-premium rounded-full p-5 shadow-2xl hover:shadow-3xl cursor-pointer flex items-center justify-center lift-hover">
          <MessageCircle size={28} className="animate-bounce" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-card text-foreground text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none border border-accent/30 shadow-lg">
          <span className="gradient-text font-semibold">تواصل معنا عبر الواتساب</span>
        </div>
        
        {/* Arrow */}
        <div className="absolute bottom-2 right-6 w-2 h-2 bg-card border border-accent/30 rounded-full opacity-0 group-hover:opacity-100 smooth-transition" />
      </div>
    </a>
  );
}
