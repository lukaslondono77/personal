# 🚀 Entrepreneur 3D Portfolio Website

A stunning entrepreneur portfolio website featuring interactive 3D backgrounds powered by Three.js. Built with React, Vite, and modern web technologies.

## ✨ Features

- **Interactive 3D Background**: Dynamic particle fields and geometric shapes using Three.js
- **Modern UI/UX**: Clean, professional design with glass morphism effects
- **High Contrast Theme**: Optimized for readability with vibrant accent colors
- **Fully Responsive**: Looks great on all devices
- **Smooth Animations**: Engaging transitions and micro-interactions
- **Performance Optimized**: Fast load times and smooth 60fps animations

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg-dark: #000000;
  --text-primary: #ffffff;
  --accent-primary: #00ff88;
  --accent-secondary: #0088ff;
  --accent-tertiary: #ff0088;
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Services Section**: Edit `src/components/Services.jsx`
- **Contact Section**: Edit `src/components/Contact.jsx`

### 3D Background

Customize the 3D elements in `src/components/ThreeBackground.jsx`:
- Adjust particle count and distribution
- Modify geometric shapes and animations
- Change colors and materials
- Adjust camera position and controls

## 📱 Sections

1. **Hero** - Eye-catching introduction with call-to-actions
2. **About** - Personal background and achievement stats
3. **Services** - What you offer to clients/partners
4. **Contact** - Contact form and social links

## 🎯 Performance Tips

- The 3D background is optimized for performance
- Particle count can be adjusted in `ThreeBackground.jsx`
- Use `npm run build` for production-optimized bundle

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Three.js and React

