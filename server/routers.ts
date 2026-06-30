import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createSubscriptionRequest } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Subscription Router
  subscription: router({
    create: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(2, "الاسم مطلوب"),
          email: z.string().email("البريد الإلكتروني غير صحيح"),
          phone: z.string().min(10, "رقم الهاتف مطلوب"),
          packageName: z.string().min(1, "الباقة مطلوبة"),
          duration: z.string().min(1, "المدة مطلوبة"),
          price: z.number().min(0, "السعر مطلوب"),
          deviceType: z.enum(["android", "apple", "smarttv"], { message: "نوع الجهاز مطلوب" }),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // حفظ الطلب في قاعدة البيانات
          const result = await createSubscriptionRequest({
            fullName: input.fullName,
            email: input.email,
            phone: input.phone,
            packageName: input.packageName,
            duration: input.duration,
            price: input.price,
            deviceType: input.deviceType,
            status: "pending",
          });

          // تحويل نوع الجهاز إلى نص عربي
          const deviceTypeLabel = {
            android: "أندرويد",
            apple: "أبل",
            smarttv: "شاشة ذكية"
          }[input.deviceType];

          // إرسال بريد إلكتروني للمالك
          const emailContent = `
            <h2>طلب اشتراك جديد</h2>
            <p><strong>الاسم:</strong> ${input.fullName}</p>
            <p><strong>البريد الإلكتروني:</strong> ${input.email}</p>
            <p><strong>رقم الهاتف:</strong> ${input.phone}</p>
            <p><strong>الباقة:</strong> ${input.packageName}</p>
            <p><strong>المدة:</strong> ${input.duration}</p>
            <p><strong>نوع الجهاز:</strong> ${deviceTypeLabel}</p>
            <p><strong>السعر:</strong> ${input.price} ريال</p>
            <p><strong>التاريخ:</strong> ${new Date().toLocaleString('ar-SA')}</p>
          `;

          await notifyOwner({
            title: `طلب اشتراك جديد من ${input.fullName}`,
            content: emailContent,
          });

          return {
            success: true,
            message: "تم استقبال طلبك بنجاح!",
          };
        } catch (error) {
          console.error("[Subscription] Error creating subscription request:", error);
          throw new Error("فشل في معالجة الطلب. يرجى المحاولة لاحقاً.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
