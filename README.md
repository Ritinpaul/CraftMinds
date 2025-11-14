# CraftMind - Digital Crafts

A modern, professional website for CraftMind, a technology company specializing in web development, mobile apps, AI solutions, and enterprise software.

## Project Overview

**CraftMind** - Transforming Ideas into Digital Reality

This is a React-based website showcasing CraftMind' services and expertise in:
- Web Development
- Mobile App Development
- AI & Machine Learning Solutions
- Enterprise Software (ERP, CRM)
- Blockchain Development

## Features

- **3D Hero Animation**: Interactive Three.js-powered cube animation with professional rose gold/copper aesthetic
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI/UX**: Beautiful gradient animations, smooth transitions, and professional styling
- **Service Showcase**: Comprehensive display of services with interactive cards
- **Contact Form**: Functional contact form with validation
- **About Section**: Company mission, vision, and values presentation
- **SEO Optimized**: Dynamic meta tags, structured data (JSON-LD), and Open Graph tags for better search engine visibility
- **Google Analytics**: Integrated Google Analytics 4 (GA4) for tracking page views and user interactions

## Technologies Used

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Three.js** - 3D graphics and animations
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **react-icons** - Icon library
- **Zod** - Schema validation
- **React Hook Form** - Form management

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd cesta-digital-crafts
```

2. Install dependencies:
```sh
npm install
```


3. Create a `.env` file in the root directory and add your environment variables:
```env
# Google Analytics 4 Measurement ID (optional)
# Get this from your Google Analytics dashboard
# Format: G-XXXXXXXXXX
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL (for SEO and structured data)
# Update this with your actual domain after deployment
VITE_SITE_URL=https://craftminds.com
```

4. Start the development server:
```sh
npm run dev
```

5. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```sh
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable React components
│   ├── Hero.tsx   # Hero section with 3D animation
│   ├── Navbar.tsx # Navigation bar
│   └── ...
├── pages/         # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## SEO & Analytics Setup

### Google Analytics Setup

1. Create a Google Analytics 4 (GA4) property in your [Google Analytics account](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add it to your `.env` file as `VITE_GA_MEASUREMENT_ID`
4. The analytics will automatically track:
   - Page views on route changes
   - Form submissions
   - Button clicks (when implemented)
   - Custom events

### SEO Features

The project includes comprehensive SEO optimization:

- **Dynamic Meta Tags**: Each page has unique title, description, and keywords
- **Open Graph Tags**: For better social media sharing
- **Twitter Cards**: Optimized Twitter sharing
- **Structured Data (JSON-LD)**: 
  - Organization schema
  - Website schema
  - Service schemas
  - Breadcrumb navigation
  - Local business information
- **Canonical URLs**: Prevents duplicate content issues
- **Robots Meta Tags**: Proper search engine indexing

### Updating SEO for Each Page

Each page component uses the `<SEO>` component to set page-specific metadata:

```tsx
<SEO
  title="Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  url="https://craftminds.com/page"
  structuredData={schemaData}
/>
```

## Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your repository
4. Vercel will auto-detect the Vite framework
5. Add environment variables in Vercel dashboard:
   - `VITE_GA_MEASUREMENT_ID` (your GA4 measurement ID)
   - `VITE_SITE_URL` (your production URL)
6. Click "Deploy"

The `vercel.json` configuration file is already set up for optimal deployment.

## Development

- **Linting**: `npm run lint`
- **Type Checking**: TypeScript is configured to check types during development

## License

This project is private and proprietary.
