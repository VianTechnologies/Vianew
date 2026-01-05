# 🚀 Quick Start Guide

## ⚠️ Step 1: Upgrade Node.js (REQUIRED)

Your current version: **Node 12.18.0**  
Required version: **Node 18.17.0+**

### Quick Install (macOS):

```bash
# Using Homebrew
brew install node@18
brew link node@18 --force --overwrite

# Verify
node --version  # Should show v18.x.x or higher
```

---

## 📦 Step 2: Install Dependencies

```bash
cd /Users/avijit/Documents/ddenterprise
npm install
```

---

## ⚙️ Step 3: Configure CRM (Optional for testing)

Create `.env.local`:

```bash
# For HubSpot
NEXT_PUBLIC_CRM_TYPE=hubspot
NEXT_PUBLIC_HUBSPOT_API_KEY=your_key_here
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id

# OR for testing without CRM
NEXT_PUBLIC_CRM_TEST_MODE=true
```

See `.env.template` for all options.

---

## 🎨 Step 4: Run Development Server

```bash
npm run dev
```

Open: **http://localhost:3000**

---

## 🎯 What You'll See

✅ **Homepage** - Modern design with all sections  
✅ **Services** - 4 detailed service pages  
✅ **Reports** - Download with lead capture  
✅ **Books** - E-books with lead capture  
✅ **Contact** - Working contact form  
✅ **About** - Company information  
✅ **Blog** - Blog listing page  
✅ **Case Studies** - Success stories  

---

## 📝 Quick Customization

### 1. Update Company Name
**File:** `components/Navbar.tsx` (line 23-25)  
**File:** `components/Footer.tsx` (line 20-27)

### 2. Update Contact Info
**File:** `components/Footer.tsx` (lines 98-111)  
**File:** `app/contact/page.tsx` (lines 70-93)

### 3. Change Colors
**File:** `tailwind.config.ts` (lines 12-30)

### 4. Add Content
- Reports: `app/reports/page.tsx`
- Books: `app/books/page.tsx`
- Services: `app/services/*/page.tsx`

---

## 🚀 Deploy to Production

### Vercel (Recommended - Free):

```bash
npm install -g vercel
vercel
```

Follow prompts, add environment variables, deploy!

---

## 📚 Need More Help?

- **Complete Setup:** `SETUP_GUIDE.md`
- **CRM Integration:** `docs/CRM_INTEGRATION.md`
- **Content Updates:** `docs/CONTENT_GUIDE.md`
- **Full Documentation:** `README.md`
- **Project Overview:** `PROJECT_SUMMARY.md`

---

## ✅ Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] All service pages work
- [ ] Forms accept input
- [ ] Mobile view looks good
- [ ] No console errors

---

## 🎉 That's It!

You now have a fully functional, modern website with:
- Lead generation system
- CRM integration ready
- Mobile responsive design
- SEO optimized
- Production ready

**Happy launching! 🚀**

---

**Quick Commands:**

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Check code quality
```


