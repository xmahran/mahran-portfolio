# Mahran - Portfolio

A premium, futuristic, and visually striking developer portfolio built with Next.js, TypeScript, Three.js, and Framer Motion.

## Features

- **3D Interactive Elements**: Immersive Three.js scenes with React Three Fiber
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Premium Design**: Luxury tech brand aesthetic with neon accents
- **Fully Responsive**: Optimized for all devices
- **Performance Optimized**: Lazy loading and code splitting
- **SEO Friendly**: Comprehensive metadata and semantic HTML
- **Contact Form**: Functional contact form with email integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: Resend API

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mahran-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional, for contact form):

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mahran-portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects pages
│   │   └── [slug]/       # Dynamic project detail pages
│   ├── tech/              # Tech stack page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   └── contact/      # Contact form API endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── 3d/               # 3D scene components
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   ├── Navigation.tsx    # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── CursorGlow.tsx    # Cursor effect
├── lib/                  # Utilities and configurations
│   └── content.ts        # Content data (easily editable)
└── public/               # Static assets
```

## Customizing Content

All content can be easily updated in `lib/content.ts`:

- **Personal Information**: Name, title, location, contact details
- **Experience**: Job history and timeline
- **Projects**: Project details, tech stacks, metrics
- **Tech Stack**: Technologies and proficiency levels
- **Social Links**: GitHub, LinkedIn, Twitter, etc.

## Theme Customization

The color scheme and theme can be customized in:

- `tailwind.config.ts`: Color palette and design tokens
- `app/globals.css`: Global styles and CSS variables

### Color Palette

- **Primary**: Neon Blue (#00f0ff)
- **Background**: Dark (#0a0a0a)
- **Surface**: Dark Gray (#111111)
- **Accents**: Electric Blue, Cyan, Purple

## Contact Form Setup

The contact form is functional and ready to send emails to your inbox. To enable email sending:

1. Sign up at [Resend](https://resend.com)
2. Create an API key in your Resend dashboard
3. Add it to your `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
```

Without the API key, the form will still work in development mode and log submissions to the console.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables (RESEND_API_KEY) in Vercel dashboard
4. Deploy with default settings

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspiration from luxury tech brands
- Built with modern web technologies
- 3D graphics powered by Three.js

---

**Mohamed Mahran** - Lead Full Stack Engineer & Founder  
Berlin, Germany
