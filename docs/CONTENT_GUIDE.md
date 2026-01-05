# Content Editor Guide

This guide helps non-technical users update content on the DD Enterprise website.

## Quick Reference

All content files are located in the `app/` directory. Each file ending in `.tsx` or `.ts` contains the content for a specific page.

## Homepage Content

**File:** `app/page.tsx` (main structure) and `components/home/*.tsx` (sections)

### Hero Section
**File:** `components/home/Hero.tsx`
- Main headline (line 29-31)
- Subtitle paragraph (line 32-35)
- Button text (lines 37-42)
- Trust indicators (lines 46-58)

### Stats Section
**File:** `components/home/Stats.tsx`
- Update numbers and labels (lines 7-12)

### Services Overview
**File:** `components/home/Services.tsx`
- Service titles and descriptions (lines 9-40)
- Update text in each service card

### Why Choose Us
**File:** `components/home/WhyChooseUs.tsx`
- Benefits list (lines 9-28)
- Update titles and descriptions

### Resources Section
**File:** `components/home/Resources.tsx`
- Resource titles and descriptions (lines 9-25)

### Call-to-Action
**File:** `components/home/CTASection.tsx`
- Headline and text (lines 14-20)

## Services Pages

### Main Services Page
**File:** `app/services/page.tsx`

Update service information (lines 14-54):
```typescript
{
  title: 'Your Service Title',
  description: 'Your service description',
  features: [
    'Feature 1',
    'Feature 2',
    // Add more features
  ],
}
```

### Individual Service Pages

**Data Governance:** `app/services/data-governance/page.tsx`
**Process Mapping:** `app/services/process-mapping/page.tsx`
**Data Integration:** `app/services/data-integration/page.tsx`
**Data Analytics:** `app/services/data-analytics/page.tsx`

Each page has these sections:
1. **Hero section** - Main title and description (lines 15-30)
2. **Overview** - Why it matters (lines 35-70)
3. **Services grid** - Specific offerings (lines 80-120)
4. **CTA section** - Call to action (lines 130-145)

## Reports Page

**File:** `app/reports/page.tsx`

Add/edit reports (lines 11-50):
```typescript
{
  id: 1,
  title: 'Report Title',
  description: 'Report description...',
  category: 'Category',
  publishDate: '2025-03',
  pages: 45,
  thumbnail: 'bg-blue-500',  // Color: blue, green, orange, purple
}
```

## Books Page

**File:** `app/books/page.tsx`

Add/edit books (lines 11-60):
```typescript
{
  id: 1,
  title: 'Book Title',
  subtitle: 'Book Subtitle',
  author: 'Author Name',
  description: 'Book description...',
  pages: 320,
  rating: 4.8,
  thumbnail: 'bg-gradient-to-br from-blue-600 to-blue-800',
}
```

## Case Studies Page

**File:** `app/case-studies/page.tsx`

Add/edit case studies (lines 11-65):
```typescript
{
  title: 'Case Study Title',
  industry: 'Industry Name',
  challenge: 'What was the challenge?',
  solution: 'How did you solve it?',
  results: [
    'Result 1',
    'Result 2',
    'Result 3'
  ],
  color: 'bg-blue-500',
}
```

## Blog Page

**File:** `app/blog/page.tsx`

Add/edit blog posts (lines 11-55):
```typescript
{
  title: 'Blog Post Title',
  excerpt: 'Short description...',
  author: 'Author Name',
  date: '2025-03-15',
  readTime: '8 min read',
  category: 'Category',
  image: 'bg-blue-500',
}
```

## About Page

**File:** `app/about/page.tsx`

### Mission & Vision (lines 24-43)
Update the text in the card sections

### Company Values (lines 51-68)
Edit values:
```typescript
{
  icon: FiTarget,  // Don't change
  title: 'Value Name',
  description: 'Value description',
}
```

### Team Members (lines 76-100)
Add/edit team:
```typescript
{
  name: 'Full Name',
  role: 'Job Title',
  bio: 'Short bio...',
}
```

## Contact Page

**File:** `app/contact/page.tsx`

### Contact Information (lines 63-92)
- Email addresses (lines 70-71)
- Phone number (line 81)
- Office address (lines 91-93)

### Business Hours (lines 98-103)
Update hours and days

## Landing Pages

**File:** `app/landing/[slug]/page.tsx`

Add new landing pages (lines 8-45):
```typescript
'your-campaign-slug': {
  title: 'Campaign Title',
  subtitle: 'Campaign Subtitle',
  description: 'Full description...',
  heroImage: 'bg-gradient-to-br from-blue-600 to-blue-900',
  benefits: [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
  ],
  cta: 'Call to Action Button Text',
  formFields: ['firstName', 'lastName', 'email', 'company'],
}
```

Access at: `yourdomain.com/landing/your-campaign-slug`

## Navigation & Footer

### Navigation Menu
**File:** `components/Navbar.tsx`

Update menu items (lines 10-18):
```typescript
{ name: 'Menu Item', href: '/page-url' }
```

### Footer
**File:** `components/Footer.tsx`

#### Company Info (lines 22-27)
Update company description

#### Contact Details (lines 98-111)
- Email addresses
- Phone number  
- Office address

#### Social Links (lines 29-39)
Update social media URLs (replace `#` with actual URLs)

## Content Best Practices

### Writing Tips

1. **Headlines**
   - Keep under 10 words when possible
   - Use action verbs
   - Be specific and clear

2. **Descriptions**
   - 1-2 sentences for excerpts
   - 2-3 paragraphs for full descriptions
   - Focus on benefits, not just features

3. **CTAs (Call-to-Action)**
   - Use action words: "Get," "Download," "Start"
   - Create urgency when appropriate
   - Be specific: "Download Free Guide" vs "Learn More"

### SEO Tips

1. **Page Titles**
   - Include main keyword
   - Keep under 60 characters
   - Make it compelling

2. **Descriptions**
   - Include relevant keywords naturally
   - Explain value clearly
   - Keep under 160 characters for meta descriptions

3. **Headings**
   - Use hierarchical structure (H1 → H2 → H3)
   - Include keywords
   - Make them descriptive

## Colors Reference

When updating colors in content files:

```typescript
// Primary colors (Blue)
'bg-primary-50' through 'bg-primary-900'

// Secondary colors (Green)
'bg-secondary-50' through 'bg-secondary-900'

// Standard colors
'bg-blue-500'    // Blue
'bg-green-500'   // Green
'bg-purple-500'  // Purple
'bg-orange-500'  // Orange
'bg-indigo-500'  // Indigo
'bg-pink-500'    // Pink
'bg-gray-500'    // Gray
```

## Icon Reference

Available icons (from react-icons/fi):

```typescript
FiCheck        // Checkmark
FiArrowRight   // Right arrow
FiMail         // Email
FiPhone        // Phone
FiMapPin       // Location pin
FiUser         // User
FiUsers        // Multiple users
FiDatabase     // Database
FiShield       // Shield
FiLink         // Link
FiBarChart2    // Bar chart
FiTrendingUp   // Trending up
FiBook         // Book
FiFileText     // Document
FiClock        // Clock
FiStar         // Star
FiAward        // Award
FiTarget       // Target
FiHeart        // Heart
```

## Common Tasks

### Add a New Report

1. Open `app/reports/page.tsx`
2. Find the `reports` array (line 11)
3. Add new entry:
```typescript
{
  id: 7,  // Next available number
  title: 'Your Report Title',
  description: 'Report description...',
  category: 'Category Name',
  publishDate: '2025-04',
  pages: 30,
  thumbnail: 'bg-blue-500',
}
```
4. Save file

### Add a New Team Member

1. Open `app/about/page.tsx`
2. Find the `team` array (line 76)
3. Add new member:
```typescript
{
  name: 'Jane Doe',
  role: 'Chief Data Officer',
  bio: 'Expert in enterprise data management...',
}
```
4. Save file

### Update Contact Information

1. Open `components/Footer.tsx`
2. Update:
   - Email: lines 98-99
   - Phone: line 105
   - Address: lines 109-111
3. Also update `app/contact/page.tsx` (lines 70, 81, 91-93)
4. Save both files

### Create a Landing Page

1. Open `app/landing/[slug]/page.tsx`
2. Add to `landingPages` object (line 8):
```typescript
'spring-promo-2025': {
  title: 'Spring Data Governance Promo',
  subtitle: '50% Off First Month',
  description: 'Limited time offer...',
  heroImage: 'bg-gradient-to-br from-green-600 to-green-900',
  benefits: [
    'Complete setup included',
    'Priority support',
    '30-day money-back guarantee',
  ],
  cta: 'Claim Your Discount',
  formFields: ['firstName', 'lastName', 'email', 'company'],
}
```
3. Save file
4. Access at: `/landing/spring-promo-2025`

## Need Help?

- Check the main README.md for technical setup
- See CRM_INTEGRATION.md for CRM setup
- Contact the development team for code changes
- Use the SETUP_GUIDE.md for installation issues

## Testing Changes

After making content changes:

1. **Local Testing:**
   - Run `npm run dev`
   - Visit http://localhost:3000
   - Check your changes

2. **Before Publishing:**
   - Check all links work
   - Test forms submit correctly
   - Verify mobile responsiveness
   - Check spelling and grammar

3. **After Publishing:**
   - Clear browser cache
   - Test on different devices
   - Verify CRM integration still works

## Content Checklist

Before publishing new content:

- [ ] Spelling and grammar checked
- [ ] All links work correctly
- [ ] Images/colors display properly
- [ ] Mobile version looks good
- [ ] SEO fields updated
- [ ] Contact info is current
- [ ] CTAs are clear and compelling
- [ ] Forms tested and working

## Content Calendar

Track content updates:

| Page | Last Updated | Next Update | Owner |
|------|--------------|-------------|-------|
| Homepage | 2025-03-01 | Quarterly | Marketing |
| Services | 2025-02-15 | As needed | Product |
| Reports | Monthly | 2025-04-01 | Content |
| Blog | Weekly | Ongoing | Content |
| About | 2025-01-15 | Annually | HR |

---

Remember: Always test locally before publishing to production!

