# FluentRise English Academy — Master Demo Website

A production-quality, reusable demo website for English coaching institutes.
Built with React + Vite. Designed to be customized for any English-speaking or coaching institute.

---

## Quick Start

```bash
cd fluentrise
npm install
npm run dev
```

Open: http://localhost:5173

---

## Build for Production

```bash
npm run build
npm run preview
```

---

## How to Convert This Demo Into a Client Website

### Step 1 — Update the central configuration

Open `src/config/siteConfig.js` and update every value:

```js
export const siteConfig = {
  demoMode: false,           // ← Set to false for real client
  name: "Your Institute Name",
  shortName: "YIN",
  tagline: "Your Tagline",
  city: "Your City",
  area: "Your Area",
  address: "Full Address",
  phone: "+91 XXXXX XXXXX",
  phoneRaw: "+91XXXXXXXXXX",
  email: "contact@yourinstitute.com",
  whatsapp: "91XXXXXXXXXX",  // Country code + number, no spaces or +
  instagram: "https://instagram.com/youraccount",
  facebook: "https://facebook.com/yourpage",
  googleBusinessUrl: "https://g.page/yourbusiness",
  googleMapsEmbed: "YOUR_GOOGLE_MAPS_EMBED_URL",
  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM",
  siteUrl: "https://yourdomain.com",
};
```

### Step 2 — Update courses

Edit `src/data/courses.js` — add, remove, or modify courses.

### Step 3 — Update batch timings

Edit `src/data/batches.js` — update times, days, and modes.

### Step 4 — Update trainers

Edit `src/data/trainers.js` — add real trainer names, bios, and photos.
Set `image: "/path/to/photo.jpg"` or use a URL.

### Step 5 — Update testimonials

Edit `src/data/testimonials.js` — replace with real student feedback.

### Step 6 — Update reviews

Edit `src/data/reviews.js` — replace with real Google reviews.
Update `overallRating` and `totalReviews`.

### Step 7 — Update gallery

Edit `src/data/gallery.js` — replace `src` URLs with real photos.
Add images to `public/gallery/` and reference as `/gallery/photo.jpg`.

### Step 8 — Update FAQs

Edit `src/data/faqs.js` — update with institute-specific answers.

### Step 9 — Update SEO

Edit `index.html`:
- Update `<title>`
- Update `<meta name="description">`
- Update `<link rel="canonical">`
- Update Open Graph tags
- Update the JSON-LD structured data block

### Step 10 — Update colors

Edit `src/styles/globals.css` — change CSS variables:

```css
:root {
  --color-primary: #1d4ed8;       /* Main brand color */
  --color-secondary: #7c3aed;     /* Secondary color */
  --color-accent: #f59e0b;        /* Accent color */
}
```

### Step 11 — Update logo

Replace the text logo in `src/components/Navbar/Navbar.jsx` and `src/components/Footer/Footer.jsx`
with an `<img>` tag pointing to the client's logo file.

### Step 12 — Disable demo mode

In `src/config/siteConfig.js`:
```js
demoMode: false
```

This removes:
- The demo banner at the top
- The "Demo Website" footer badge
- The "Demo Website" hero tag
- The DemoSalesSection at the bottom of the homepage

---

## Project Structure

```
src/
├── components/
│   ├── Hero/           Hero section
│   ├── Navbar/         Navigation bar
│   ├── Footer/         Footer
│   ├── Sections/       All homepage/page sections
│   └── ui/             Reusable UI components
├── pages/              One file per page/route
├── layouts/            MainLayout wrapper
├── data/               All content data (courses, trainers, etc.)
├── config/             siteConfig.js — central configuration
├── hooks/              useScrollAnimation
├── utils/              analytics.js, whatsapp.js
└── styles/             globals.css — design system
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/courses` | All Courses |
| `/courses/:id` | Course Detail |
| `/batches` | Batch Timings |
| `/trainers` | Our Trainers |
| `/testimonials` | Testimonials |
| `/gallery` | Gallery |
| `/contact` | Contact |
| `/free-demo` | Book Free Demo |

---

## WhatsApp Integration

The WhatsApp number is configured in `src/config/siteConfig.js`:

```js
whatsapp: "919876543210",  // Format: country code + number
whatsappMessage: "Hello! I am interested in your courses...",
```

All WhatsApp buttons use `src/utils/whatsapp.js` — change the number once, it updates everywhere.

---

## Forms

Forms are currently frontend-only with a simulated success state.

To connect to a real backend, edit the `handleSubmit` function in:
- `src/components/Sections/DemoBookingForm.jsx`
- `src/components/Sections/ContactSection.jsx`

Options:
- **Formspree**: `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: formData })`
- **Google Sheets**: Use a Google Apps Script web app endpoint
- **Custom API**: Replace the `setTimeout` with a real `fetch` call

---

## Analytics

Add your tracking IDs in `src/config/siteConfig.js`:

```js
googleAnalyticsId: "G-XXXXXXXXXX",
facebookPixelId: "XXXXXXXXXXXXXXXXX",
```

Events are tracked via `src/utils/analytics.js`. Add the GA4/Pixel script tags to `index.html`.

---

## Demo Mode

`demoMode: true` enables:
- Top banner: "Demo Website — All content is fictional"
- Hero tag: "Demo Website"
- Footer badge: "Demo Website"
- DemoSalesSection: "Imagine This Website With Your Institute's Brand"

`demoMode: false` removes all of the above for a clean client website.

---

## Deployment

### Netlify (Recommended)
1. `npm run build`
2. Drag the `dist/` folder to netlify.com/drop
3. Or connect your GitHub repo for auto-deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
Add to `vite.config.js`:
```js
base: '/your-repo-name/'
```
Then run `npm run build` and push `dist/` to `gh-pages` branch.

### Custom Server (Apache/Nginx)
Upload `dist/` contents to your web root.
Add a redirect rule so all routes serve `index.html`:

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

---

## Reusing for Multiple Clients

```
Institute A:  Update siteConfig.js + data files → npm run build → Deploy
Institute B:  Update siteConfig.js + data files → npm run build → Deploy
Institute C:  Update siteConfig.js + data files → npm run build → Deploy
```

The core UI components never change. Only configuration and data change per client.

---

## Tech Stack

- React 18
- Vite
- React Router v6
- Lucide React (icons)
- Pure CSS (no Tailwind — easier for client customization)

---

*This is a demo website. All institute names, trainer names, student names, reviews, and statistics shown are fictional and for demonstration purposes only.*
