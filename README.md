# عطا استیل | وبسایت شرکت

## 📋 درباره پروژه

وبسایت رسمی شرکت عطا استیل - تولیدکننده برتر مقاطع فولادی برای صنایع زیربنایی کشور. این وبسایت با تکنولوژی‌های مدرن و بهینه‌سازی کامل برای Persian/RTL و GitHub Pages طراحی شده است.

## 🚀 نمایش آنلاین

وبسایت بر روی GitHub Pages در آدرس زیر در دسترس است:
**[https://your-username.github.io/Ata-Steel-Company-website-v1/](https://your-username.github.io/Ata-Steel-Company-website-v1/)**

## ✨ ویژگی‌ها

### 🎨 طراحی و رابط کاربری
- ✅ طراحی کاملاً RTL (راست به چپ) برای زبان فارسی
- ✅ رنگ‌بندی مخصوص صنعت فولاد (آبی تیره و نارنجی)
- ✅ طراحی ریسپانسیو برای همه دستگاه‌ها
- ✅ انیمیشن‌های روان با Intersection Observer
- ✅ فونت Dana برای نمایش بهتر متن فارسی

### 🔧 عملکرد و بهینه‌سازی
- ✅ بهینه‌سازی کامل برای GitHub Pages
- ✅ بارگذاری تصاویر Lazy Loading
- ✅ فونت‌ها با font-display: swap
- ✅ کد JavaScript ماژولار و بهینه
- ✅ CSS Variables برای مدیریت آسان رنگ‌ها
- ✅ Throttled scroll events برای عملکرد بهتر

### 📱 دسترسی‌پذیری
- ✅ ARIA labels و semantic HTML
- ✅ پشتیبانی کامل از صفحه‌کلید
- ✅ Screen reader compatibility
- ✅ Skip links برای navigation آسان
- ✅ Color contrast مناسب
- ✅ Focus management برای mobile menu

### 🔍 سئو و بازاریابی
- ✅ Meta tags کامل برای SEO
- ✅ Open Graph برای شبکه‌های اجتماعی
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URLs
- ✅ مناسب برای موتورهای جستجوی فارسی

## 🗂️ ساختار پروژه

```
Ata-Steel-Company-website-v1/
├── index.html              # صفحه اصلی
├── about.html              # درباره ما
├── products.html           # محصولات
├── projects.html           # پروژه‌ها
├── blog.html              # وبلاگ
├── contact.html           # تماس با ما
├── style.css              # استایل‌های اصلی
├── script.js              # جاوااسکریپت بهینه شده
└── README.md              # مستندات پروژه
```

## 🛠️ تکنولوژی‌های استفاده شده

- **HTML5**: Semantic markup با ARIA support
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript ES6+**: Modular و optimized
- **Dana Font**: فونت اختصاصی فارسی
- **GitHub Pages**: هاستینگ رایگان

## 📦 راه‌اندازی محلی

### پیش‌نیازها
- مرورگر مدرن (Chrome, Firefox, Safari, Edge)
- Git

### نصب و اجرا

```bash
# کلون کردن پروژه
git clone https://github.com/your-username/Ata-Steel-Company-website-v1.git

# ورود به پوشه پروژه
cd Ata-Steel-Company-website-v1

# باز کردن در مرورگر
# index.html را در مرورگر باز کنید
```

برای توسعه محلی، پیشنهاد می‌شود از Live Server استفاده کنید:

```bash
# نصب Live Server (اختیاری)
npm install -g live-server

# اجرای سرور محلی
live-server --port=3000
```

## 🚀 استقرار در GitHub Pages

### روش اول: تنظیمات Repository

1. Repository خود را در GitHub ایجاد کنید
2. فایل‌های پروژه را آپلود کنید
3. به Settings > Pages بروید
4. Source را روی "Deploy from branch" تنظیم کنید
5. Branch را روی `main` انتخاب کنید
6. Save کنید

### روش دوم: استفاده از GitHub Actions (پیشرفته)

فایل `.github/workflows/deploy.yml` ایجاد کنید:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 🔧 پیکربندی

### تنظیمات URL
در فایل‌های HTML، آدرس‌های زیر را با آدرس واقعی خود جایگزین کنید:

```html
<!-- در تمام فایل‌های HTML -->
<meta property="og:url" content="https://your-username.github.io/repo-name/">
<link rel="canonical" href="https://your-username.github.io/repo-name/">
```

### تنظیمات CSS
برای سفارشی‌سازی رنگ‌ها، متغیرهای CSS را در `style.css` تغییر دهید:

```css
:root {
    --primary-bg: #FFFFFF;
    --secondary-bg: #f8f9fa;
    --text-color: #343a40;
    --steel-navy: #2c3e50;
    --vibrant-orange: #f39c12;
}
```

## 📊 بهینه‌سازی‌های انجام شده

### عملکرد
- ⚡ Font preloading برای بارگذاری سریع‌تر
- ⚡ Image lazy loading با Intersection Observer
- ⚡ Throttled scroll events (60fps)
- ⚡ CSS Variables برای کاهش کد تکراری
- ⚡ Optimized animations با will-change

### دسترسی‌پذیری
- ♿ ARIA labels برای تمام عناصر تعاملی
- ♿ Semantic HTML5 structure
- ♿ Keyboard navigation support
- ♿ Screen reader friendly
- ♿ High contrast colors

### سئو
- 🔍 Complete meta tags
- 🔍 Structured data (JSON-LD)
- 🔍 Open Graph tags
- 🔍 Canonical URLs
- 🔍 Persian language optimization

## 🌐 پشتیبانی مرورگرها

| مرورگر | نسخه حداقل | وضعیت |
|---------|-------------|-------|
| Chrome | 60+ | ✅ کامل |
| Firefox | 55+ | ✅ کامل |
| Safari | 12+ | ✅ کامل |
| Edge | 79+ | ✅ کامل |
| IE 11 | - | ⚠️ محدود |

## 📱 تست موبایل

وبسایت روی دستگاه‌های زیر تست شده:
- ✅ iPhone (iOS 13+)
- ✅ Android (Android 8+)
- ✅ iPad
- ✅ تبلت‌های Android

## 🚨 نکات مهم

### RTL Support
- همه عناصر برای نمایش راست به چپ بهینه شده‌اند
- Navigation, margins, padding همه RTL-aware هستند
- Text alignment و direction در CSS تنظیم شده

### فونت فارسی
- فونت Dana از CDN بارگذاری می‌شود
- Fallback fonts: Tahoma, Arial
- font-display: swap برای عملکرد بهتر

### GitHub Pages محدودیت‌ها
- فقط static files پشتیبانی می‌شود
- Server-side processing امکان‌پذیر نیست
- HTTPS به صورت اتوماتیک فعال است

## 🔄 به‌روزرسانی

برای به‌روزرسانی وبسایت:

1. تغییرات را اعمال کنید
2. Commit کنید و push کنید
3. GitHub Pages به صورت خودکار آپدیت می‌شود

```bash
git add .
git commit -m "Update website content"
git push origin main
```

## 🐛 رفع مشکل

### مشکلات رایج

**وبسایت لود نمی‌شود:**
- بررسی کنید GitHub Pages فعال باشد
- صبر کنید تا تغییرات اعمال شود (5-10 دقیقه)

**فونت‌ها لود نمی‌شوند:**
- اتصال اینترنت را بررسی کنید
- Cache مرورگر را پاک کنید

**مشکل RTL:**
- اطمینان حاصل کنید `dir="rtl"` در HTML موجود است
- CSS direction properties را بررسی کنید

## 📞 پشتیبانی

برای سوالات فنی و پشتیبانی:
- GitHub Issues این repository
- ایمیل: [support@ata-steel.com](mailto:support@ata-steel.com)

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است. برای اطلاعات بیشتر فایل LICENSE را مطالعه کنید.

---

**ساخته شده با ❤️ برای صنعت فولاد ایران**

🏗️ عطا استیل - دقت، استحکام، تعهد