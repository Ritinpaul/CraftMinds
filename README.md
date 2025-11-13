# CraftMinds - Digital Crafts

A modern, professional website for CraftMinds, a technology company specializing in web development, mobile apps, AI solutions, and enterprise software.

## Project Overview

**CraftMinds** - Transforming Ideas into Digital Reality

This is a React-based website showcasing CraftMinds' services and expertise in:
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

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

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

## Development

- **Linting**: `npm run lint`
- **Type Checking**: TypeScript is configured to check types during development

## License

This project is private and proprietary.
