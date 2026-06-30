# إعدادات متغيرات البيئة على Vercel

## المشكلة الحالية
الموقع يعرض خطأ "حدث خطأ في إرسال الطلب" عند محاولة إرسال طلب اشتراك لأن متغيرات البيئة غير محددة على Vercel.

## متغيرات البيئة المطلوبة

### 1. **DATABASE_URL** (مطلوب جداً)
- **الوصف:** رابط الاتصال بقاعدة البيانات MySQL/TiDB
- **الصيغة:** `mysql://username:password@host:port/database`
- **مثال:** `mysql://user:pass@db.example.com:3306/iptv_store`
- **الحصول عليه:** من مزود قاعدة البيانات الخاص بك

### 2. **JWT_SECRET** (مطلوب)
- **الوصف:** مفتاح سري لتوقيع جلسات المستخدمين
- **الصيغة:** نص عشوائي طويل (32+ حرف)
- **مثال:** `your-super-secret-jwt-key-here-make-it-long`
- **الحصول عليه:** أنشئ نص عشوائي قوي

### 3. **VITE_APP_ID** (مطلوب للمصادقة)
- **الوصف:** معرف تطبيق OAuth من Manus
- **الحصول عليه:** من لوحة تحكم Manus

### 4. **VITE_OAUTH_PORTAL_URL** (اختياري)
- **الوصف:** رابط بوابة OAuth
- **القيمة الافتراضية:** `https://auth.manus.space`

### 5. **BUILT_IN_FORGE_API_URL** (اختياري)
- **الوصف:** رابط API الداخلي
- **القيمة الافتراضية:** `https://api.manus.space`

### 6. **BUILT_IN_FORGE_API_KEY** (اختياري)
- **الوصف:** مفتاح API الداخلي
- **الحصول عليه:** من لوحة تحكم Manus

---

## خطوات الإضافة على Vercel

### الطريقة 1: عبر لوحة التحكم (الأسهل)

1. اذهب إلى: https://vercel.com/dashboard
2. اختر مشروع `almlaki`
3. انقر على "Settings" (الإعدادات)
4. اختر "Environment Variables" من القائمة الجانبية
5. أضف كل متغير:
   - **Name:** اسم المتغير (مثل `DATABASE_URL`)
   - **Value:** قيمة المتغير
   - **Environments:** اختر "Production"
6. انقر على "Save"
7. انقر على "Redeploy" لإعادة النشر

### الطريقة 2: عبر CLI (Vercel CLI)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# إضافة متغيرات البيئة
vercel env add DATABASE_URL
vercel env add JWT_SECRET
vercel env add VITE_APP_ID

# إعادة النشر
vercel redeploy
```

---

## مثال على متغيرات البيئة الكاملة

```
DATABASE_URL=mysql://user:password@db.example.com:3306/almalki_db
JWT_SECRET=your-super-secret-jwt-key-here-make-it-very-long-and-random
VITE_APP_ID=your-app-id-from-manus
VITE_OAUTH_PORTAL_URL=https://auth.manus.space
BUILT_IN_FORGE_API_URL=https://api.manus.space
BUILT_IN_FORGE_API_KEY=your-api-key-from-manus
```

---

## التحقق من الإضافة

بعد إضافة المتغيرات:

1. اذهب إلى: https://vercel.com/dashboard
2. اختر مشروع `almlaki`
3. انقر على "Deployments"
4. اختر آخر deployment
5. تحقق من "Build Logs" للتأكد من عدم وجود أخطاء
6. اختبر الموقع بفتح رابط المشروع

---

## استكشاف الأخطاء

### الخطأ: "Database not available"
- **السبب:** `DATABASE_URL` غير محددة أو غير صحيحة
- **الحل:** تحقق من رابط قاعدة البيانات وأضفه بشكل صحيح

### الخطأ: "Invalid JWT"
- **السبب:** `JWT_SECRET` غير محددة
- **الحل:** أضف `JWT_SECRET` بقيمة عشوائية قوية

### الخطأ: "API Connection Error"
- **السبب:** قاعدة البيانات لا تستقبل الاتصالات من Vercel
- **الحل:** تأكد من أن قاعدة البيانات تسمح بالاتصالات من Vercel IPs

---

## الخطوات التالية

1. ✅ أضف `DATABASE_URL`
2. ✅ أضف `JWT_SECRET`
3. ✅ أضف `VITE_APP_ID` (اختياري للمصادقة الكاملة)
4. ✅ أعد النشر (Redeploy)
5. ✅ اختبر الموقع

---

**ملاحظة:** بعد إضافة المتغيرات، قد تستغرق الإعادة 2-3 دقائق. انتظر حتى ينتهي البناء.
