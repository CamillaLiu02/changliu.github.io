# 🚀 Quick Start Guide

## What You Have

A complete, production-ready portfolio website with:

- ✅ Next.js 14 + TypeScript + Tailwind CSS
- ✅ 3 example case studies (UX Research, Robotics VR, Backend System)
- ✅ Homepage, Projects, About, Resume, Contact pages
- ✅ Project filtering, search, and tag system
- ✅ Image gallery with lightbox
- ✅ Table of contents with scroll spy
- ✅ SEO optimized (sitemap, robots.txt, Open Graph)
- ✅ Fully responsive and accessible
- ✅ **Successfully builds and ready to deploy!**

---

## 📋 First Steps (5 minutes)

### 1. Start Development Server

```bash
cd portfolio
npm run dev
```

Open http://localhost:3000

### 2. Personalize Your Portfolio

#### Update Your Name & Info

Search and replace "Your Name" in these files:

```bash
# Navigation & Footer
components/layout/Navigation.tsx
components/layout/Footer.tsx

# Pages
app/page.tsx
app/layout.tsx
app/about/page.tsx
app/contact/page.tsx
```

#### Update Contact Information

**File**: `components/layout/Footer.tsx` and `app/contact/page.tsx`

Replace:
- `your.email@example.com` → Your email
- `github.com/yourusername` → Your GitHub
- `linkedin.com/in/yourusername` → Your LinkedIn
- `@yourusername` → Your Twitter handle

#### Update Metadata

**File**: `app/layout.tsx`

Update:
- Site title and description
- `openGraph.url` → Your domain
- Twitter handle

### 3. Add Your Resume

Place your resume PDF here:

```
public/resume.pdf
```

### 4. Add Your Photo (Optional)

**File**: `app/about/page.tsx` (line ~48)

Replace the placeholder div with:

```tsx
<Image
  src="/images/your-photo.jpg"
  alt="Your Name"
  fill
  className="object-cover"
/>
```

Add your photo to: `public/images/your-photo.jpg`

---

## 📝 Adding Your Projects

### Option 1: Edit Existing Examples

The 3 example projects are fully written case studies. Edit them:

1. `content/projects/ux-research-app.mdx`
2. `content/projects/robotics-vr.mdx`
3. `content/projects/event-platform.mdx`

### Option 2: Create New Projects

```bash
# Copy template
cp content/projects/PROJECT_TEMPLATE.md content/projects/my-project.mdx

# Create image folders
mkdir -p public/images/projects/my-project/hero
mkdir -p public/images/projects/my-project/gallery

# Add images (use placeholders for now)
```

**Quick tip**: Keep the existing projects as examples until you have your own ready!

---

## 🎨 Replace Placeholder Images

Currently using SVG placeholders. Replace with real images:

### Hero Images (1920x1080px)
```
public/images/projects/*/hero/hero.jpg
```

### Gallery Images (1600x900px)
```
public/images/projects/*/gallery/image1.jpg
public/images/projects/*/gallery/image2.jpg
...
```

**Tools to optimize images:**
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

Target: <500KB for hero, <300KB for gallery images

---

## 🎨 Customize Colors

**File**: `tailwind.config.ts`

Change primary and accent colors:

```typescript
primary: {
  // Current: Blue
  500: '#0ea5e9',
  600: '#0284c7',
  // Change to your brand color
},
accent: {
  // Current: Purple
  500: '#d946ef',
  600: '#c026d3',
  // Change to your accent color
},
```

---

## 🚀 Deploy to Vercel (2 minutes)

### Prerequisites
- GitHub account
- Code pushed to GitHub

### Steps

1. **Go to** [vercel.com](https://vercel.com/)
2. **Click** "New Project"
3. **Import** your GitHub repository
4. **Click** "Deploy" (No configuration needed!)
5. **Done!** Your site is live at `https://your-project.vercel.app`

### Add Custom Domain

1. In Vercel dashboard → **Settings** → **Domains**
2. Add your domain (e.g., `yourname.com`)
3. Update DNS:
   - **Type A**: `76.76.21.21`
   - **Type CNAME**: `cname.vercel-dns.com`
4. Update URLs in code:
   - `app/layout.tsx`: `openGraph.url`
   - `app/sitemap.ts`: `baseUrl`
   - `app/robots.ts`: sitemap URL

---

## ✅ Pre-Launch Checklist

Before showing recruiters:

### Content
- [ ] Replace "Your Name" everywhere
- [ ] Update all contact info (email, GitHub, LinkedIn)
- [ ] Add resume PDF
- [ ] Write at least 3 project case studies
- [ ] Replace placeholder images with real ones
- [ ] Personalize About page

### Technical
- [ ] Run `npm run build` successfully
- [ ] Test on mobile device
- [ ] Check all internal links work
- [ ] Verify images load correctly
- [ ] Test contact form (opens email client)

### SEO & Performance
- [ ] Run Lighthouse (aim for 90+ scores)
- [ ] Test social media preview (LinkedIn/Twitter)
- [ ] Verify sitemap: `yoursite.com/sitemap.xml`
- [ ] Check robots.txt: `yoursite.com/robots.txt`

---

## 🐛 Common Issues

### Build Fails
```bash
# Clean install
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Images Not Loading
- Check paths start with `/` (e.g., `/images/...`)
- Verify files exist in `public/` folder
- Check file extensions match (.jpg, .png)

### MDX Parsing Errors
- Avoid `<` characters (use "less than" instead)
- Ensure headings have space: `## Heading` not `##Heading`
- Check YAML frontmatter is valid

---

## 📚 Next Steps

1. **Customize**: Make it yours (colors, content, images)
2. **Add Projects**: Write your best 3-5 case studies
3. **Optimize**: Compress images, test performance
4. **Deploy**: Push to Vercel
5. **Share**: Add to resume, LinkedIn, applications

---

## 🎯 Tips for Great Case Studies

### What Recruiters Look For

- **Process**: How you solved problems, not just final designs
- **Impact**: Quantitative results (increased X by Y%)
- **Collaboration**: How you worked with teams
- **Learning**: What you'd do differently

### Structure (Use the Template!)

1. **Overview**: Problem + Solution summary
2. **Process**: Research → Design → Development → Testing
3. **Challenges**: Specific problems you solved
4. **Results**: Data-driven outcomes
5. **Learnings**: Personal growth

### Content Tips

- Use **specific numbers**: "Increased retention by 45%" not "improved retention"
- Include **user quotes**: Makes research tangible
- Show **iterations**: Demonstrate learning from feedback
- Add **visuals**: Personas, journey maps, wireframes, prototypes

---

## 📂 File Structure Reference

```
portfolio/
├── app/                    # Pages
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects pages
│   ├── about/             # About page
│   ├── resume/            # Resume page
│   └── contact/           # Contact page
├── components/            # Reusable components
├── content/
│   └── projects/          # Your case studies (MDX)
├── public/
│   ├── images/            # All images
│   └── resume.pdf         # Your resume
└── README.md              # Full documentation
```

---

## 💬 Need Help?

1. Check the [full README](README.md)
2. Review example projects for reference
3. Read the [project template](content/projects/PROJECT_TEMPLATE.md)

---

**You're all set! Go build an amazing portfolio! 🚀**
