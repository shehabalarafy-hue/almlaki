# Almalki Ultra IPTV Store - Project TODO

## Completed Tasks
- [x] Project initialization with full-stack template (React, Express, tRPC, Drizzle ORM)
- [x] Custom branding: Name changed to "Almalki Ultra", custom logo uploaded and integrated
- [x] Core pages built: Home, Subscription Form, Package Details, Download Guide, Device Setup
- [x] Subscription system: Data saved to MySQL database
- [x] Email notifications: Automated emails sent to shehab.alarafy@gmail.com for new orders
- [x] WhatsApp integration: All contact buttons use +966594150534 with automated message templates
- [x] Automated redirection: Users redirected to WhatsApp after subscription form submission
- [x] Update server names: "Everest" → "الملكي برميوم" (Almalki Premium), "Strong 4K" → "كنج 4K" (King 4K)
- [x] Update pricing: New 1-month package (70 SAR) and updated prices (3, 6, 12 months: 180, 260, 320 SAR)
- [x] FAQ cleanup: Removed cancellation and device limit questions from SubscriptionPage.tsx

## Pending Tasks
- [x] Verify all pricing updates are consistent across all package components
- [x] Update SubscriptionForm.tsx with new server names and pricing
- [x] Update duration prices in SubscriptionForm.tsx (70, 180, 260, 320 SAR)
- [x] Update PackageDetailsPage.tsx with new server names (Almalki Premium, King 4K)
- [x] Test subscription form end-to-end (form submission → email → WhatsApp redirect)
- [x] Verify email notifications include correct package names and pricing
- [x] Implement RTL (Right-to-Left) support for Arabic language
- [x] Review RTL layout across all pages (Home, Subscription, Package Details)
- [x] Test subscription form RTL alignment
- [x] Final visual polish and checkpoint creation

## Notes
- All server names have been updated in Home.tsx
- All pricing has been standardized to: 70 SAR (1 month), 180 SAR (3 months), 260 SAR (6 months), 320 SAR (12 months)
- FAQ section now contains 4 questions instead of 6 (removed cancellation and device limit questions)
- Database schema and email templates may need verification to ensure they reflect the new server names
- Updated PackageDetailsPage.tsx with new server names in all references
- All components now display consistent pricing: 70 SAR (1 month), 180 SAR (3 months), 260 SAR (6 months), 320 SAR (12 months)
- FAQ section in SubscriptionPage.tsx now contains 4 questions (removed cancellation and device limit questions)
- SubscriptionForm.tsx updated to use new duration prices instead of package prices
