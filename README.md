# Almalki Ultra - IPTV Store

متجر اشتراكات IPTV احترافي مع تصميم فاخر وتجربة مستخدم متقدمة.

## المميزات

- 🎨 تصميم فاخر مع ألوان ذهبية وأزرق داكن
- 📱 واجهة مستجيبة (Responsive Design)
- 🛒 نظام اشتراكات متكامل
- 💬 تكامل مع WhatsApp
- 📧 نظام البريد الإلكتروني
- 🔐 مصادقة آمنة
- ⚡ أداء عالي جداً
- 🌙 دعم المظهر الداكن

## المتطلبات

- Node.js 18+
- npm أو pnpm أو yarn
- MySQL 8+ أو قاعدة بيانات متوافقة

## التثبيت المحلي

```bash
# استخرج الملفات
unzip iptv-store-source.zip
cd iptv-store

# ثبّت المتطلبات
npm install

# أنشئ ملف .env.local
# أضف متغيرات البيئة المطلوبة

# شغّل الهجرات
npm run db:push

# شغّل الخادم
npm run dev
```

افتح المتصفح على: http://localhost:5173

## النشر على Vercel

1. ادفع الأكواد إلى GitHub
2. اذهب إلى Vercel وأنشئ مشروع جديد
3. اختر المستودع من GitHub
4. أضف متغيرات البيئة
5. انقر على Deploy

## الأوامر المتاحة

```bash
npm run dev              # تشغيل الخادم والواجهة
npm run build           # بناء الإنتاج
npm run test            # تشغيل الاختبارات
npm run format          # تنسيق الأكواد
npm run db:push         # تشغيل الهجرات
```

## البنية

```
iptv-store/
├── client/              # الواجهة الأمامية (React)
├── server/              # الخادم (Express + tRPC)
├── drizzle/             # قاعدة البيانات
├── shared/              # ملفات مشتركة
└── package.json         # المتطلبات
```

## الملفات الإرشادية

- `VERCEL_DEPLOYMENT_GUIDE.md` - دليل النشر على Vercel
- `LOCAL_SETUP_GUIDE.md` - دليل التثبيت المحلي
- `ENV_VARIABLES_REFERENCE.md` - شرح متغيرات البيئة

## متغيرات البيئة المطلوبة

```
DATABASE_URL
JWT_SECRET
VITE_APP_ID
OAUTH_SERVER_URL
VITE_OAUTH_PORTAL_URL
OWNER_NAME
OWNER_OPEN_ID
BUILT_IN_FORGE_API_URL
BUILT_IN_FORGE_API_KEY
VITE_FRONTEND_FORGE_API_KEY
VITE_FRONTEND_FORGE_API_URL
VITE_ANALYTICS_ENDPOINT
VITE_ANALYTICS_WEBSITE_ID
```

## الدعم

للمساعدة والدعم، يرجى التواصل عبر:
- البريد الإلكتروني: support@almalki.com
- WhatsApp: +966594150534

## الترخيص

جميع الحقوق محفوظة © 2026 Almalki Ultra

---

**آخر تحديث:** 27 يونيو 2026

**الإصدار:** 1.0.0

**الحالة:** جاهز للإنتاج
