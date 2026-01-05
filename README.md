# Modern Portfolio Website

A modern, performant portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and MDX for UI/UX designers and developers.

## ✨ Features

- 🎨 **Modern Design**: Clean, minimalist interface with smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized images, code splitting, and SSG
- 🎯 **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- 🔍 **Project Filtering**: Search and filter projects by tags
- 📝 **MDX Support**: Write case studies in Markdown with React components
- 🖼️ **Image Gallery**: Lightbox with zoom for project images
- 📊 **Table of Contents**: Auto-generated with scroll spy on case study pages
- ♿ **Accessible**: WCAG AA compliant with semantic HTML
- 🚀 **Easy Deployment**: One-click deploy to Vercel

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter

### Libraries
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Gallery**: yet-another-react-lightbox
- **Utilities**: clsx, tailwind-merge

### Deployment
- **Platform**: Vercel (recommended)
- **Domain**: Custom domain support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app router
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── projects/            # Projects pages
│   │   ├── page.tsx        # Projects index
│   │   ├── [slug]/         # Dynamic project pages
│   │   └── ProjectsClient.tsx
│   ├── resume/              # Resume page
│   ├── contact/             # Contact page
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── layout/             # Nav, Footer
│   ├── project/            # ProjectCard, TagFilter, Gallery, TOC
│   └── ui/                 # Timeline, PageTransition
├── content/
│   └── projects/           # MDX case study files
│       ├── ux-research-app.mdx
│       ├── robotics-vr.mdx
│       ├── event-platform.mdx
│       └── _PROJECT_TEMPLATE.mdx
├── lib/
│   ├── projects.ts         # Project data utilities
│   └── utils/
│       └── cn.ts           # className utilities
├── public/
│   ├── images/
│   │   └── projects/       # Project images
│   └── resume.pdf          # Your resume (add this)
├── types/
│   └── project.ts          # TypeScript types
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## 📝 Adding a New Project

### Step 1: Create MDX File

```bash
cp content/projects/_PROJECT_TEMPLATE.mdx content/projects/my-new-project.mdx
```

### Step 2: Create Image Folders

```bash
mkdir -p public/images/projects/my-new-project/hero
mkdir -p public/images/projects/my-new-project/gallery
```

### Step 3: Add Images

- **Hero image**: `public/images/projects/my-new-project/hero/hero.jpg` (1920x1080px)
- **Gallery images**: `public/images/projects/my-new-project/gallery/image1.jpg`, etc. (1600x900px)

**Optimize images** before adding them:
- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target: <500KB for hero, <300KB for gallery images

### Step 4: Edit Frontmatter

Open `my-new-project.mdx` and update the YAML frontmatter:

```yaml
---
slug: my-new-project           # Must match filename
title: "My Awesome Project"
date: "2024-12-26"
tags: ["UX Design", "React"]
shortDescription: "Brief description for card"
role: "Lead Designer"
tools: ["Figma", "React", "TypeScript"]
heroImage: "/images/projects/my-new-project/hero/hero.jpg"
galleryImages:
  - "/images/projects/my-new-project/gallery/image1.jpg"
  - "/images/projects/my-new-project/gallery/image2.jpg"
links:
  figma: "https://figma.com/..."
  github: "https://github.com/..."
featured: true                 # Show on homepage
---
```

### Step 5: Write Content

Use the template structure and refer to example projects for guidance.

### Step 6: Preview

```bash
npm run dev
```

Navigate to `http://localhost:3000/projects/my-new-project`

## 🎨 Customization

### Update Personal Information

1. **Navigation/Footer** (`components/layout/Navigation.tsx`, `Footer.tsx`):
   - Change "Your Name" to your name
   - Update social media links

2. **Homepage** (`app/page.tsx`):
   - Update hero text
   - Modify about section

3. **About Page** (`app/about/page.tsx`):
   - Add your experience and education
   - Update skills

4. **Contact Page** (`app/contact/page.tsx`):
   - Update email and social links

5. **Metadata** (`app/layout.tsx`):
   - Update site title and description
   - Add your domain to `openGraph.url`

### Update Styling

**Colors**: Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... }, // Change primary color
  accent: { ... },  // Change accent color
}
```

**Fonts**: Update in `app/layout.tsx` (currently using Inter)

### Add Custom Font (Optional)

The template includes a placeholder for Cal Sans font. To use it:

1. Download the font file
2. Place it in `app/fonts/CalSans-SemiBold.woff2`
3. Or remove the reference in `layout.tsx` if not needed

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your site is live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., `yourname.com`)
3. Follow DNS setup instructions:
   - **Type A**: Point to Vercel's IP: `76.76.21.21`
   - **Type CNAME**: `cname.vercel-dns.com`

4. Update domain in code:
   - `app/layout.tsx`: Update `openGraph.url`
   - `app/sitemap.ts`: Update `baseUrl`
   - `app/robots.ts`: Update `sitemap` URL

### Environment Variables (If Needed)

If you add integrations (analytics, form providers), set env vars in Vercel:

```
Settings → Environment Variables → Add
```

## 📋 Pre-Launch Checklist

Before deploying to production:

### Content
- [ ] Replace all "Your Name" placeholders
- [ ] Update email and social media links
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Add at least 3 project case studies
- [ ] Add project images (optimized)
- [ ] Update About page with your info
- [ ] Review and personalize all copy

### Technical
- [ ] Update `baseUrl` in `sitemap.ts`
- [ ] Update domain in `robots.ts`
- [ ] Update `openGraph.url` in `layout.tsx`
- [ ] Add Open Graph image or customize `opengraph-image.tsx`
- [ ] Test all links (internal and external)
- [ ] Verify images load correctly

### Performance & SEO
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Test mobile responsiveness on real devices
- [ ] Verify sitemap generates: `/sitemap.xml`
- [ ] Check robots.txt: `/robots.txt`
- [ ] Test social media preview (LinkedIn, Twitter)
- [ ] Set up Google Analytics (optional)

### Accessibility
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Verify color contrast (use Chrome DevTools)
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Check alt text on all images

### Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 📦 Build Output

```bash
npm run build
```

This generates optimized static files in `.next` directory. Next.js automatically:
- ✅ Generates static pages for all projects
- ✅ Optimizes images with next/image
- ✅ Creates sitemap and robots.txt
- ✅ Minifies JavaScript and CSS
- ✅ Enables automatic code splitting

## 🐛 Troubleshooting

### Build Fails: MDX Parsing Error

**Cause**: Invalid frontmatter or MDX syntax

**Fix**: 
- Verify YAML frontmatter is correctly formatted
- Check for unescaped characters in quotes
- Ensure headings have space after `##`

### Images Not Loading

**Cause**: Incorrect path or missing files

**Fix**:
- Images must be in `/public` folder
- Paths in MDX should start with `/` (e.g., `/images/...`)
- Check file extensions match (.jpg, .png)

### "Cannot find module" Errors

**Cause**: Missing dependencies

**Fix**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

**Cause**: Type mismatches or missing types

**Fix**:
```bash
npx tsc --noEmit
```

Review errors and fix type issues.

### Slow Build Times

**Cause**: Large images or too many dependencies

**Fix**:
- Optimize images (compress, resize)
- Use next/image (automatic optimization)
- Review and remove unused dependencies

## 📚 Resources

### Learning
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Design Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Tools
- [Figma](https://www.figma.com/) - Design mockups
- [TinyPNG](https://tinypng.com/) - Image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
- [Coolors](https://coolors.co/) - Color palettes

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have questions or need help:

1. Check the [example projects](content/projects) for reference
2. Review the [project template](content/projects/_PROJECT_TEMPLATE.mdx)
3. Read the troubleshooting section above

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Happy portfolio building! 🚀
