# English 115 - Literary Stories Website

A beautiful, animated Next.js website showcasing classic literary stories for English 115 course.

## Features

✨ **Beautiful Animations**: Smooth Framer Motion animations throughout the site
🎨 **Modern Design**: Clean, responsive design with Tailwind CSS
📚 **Five Classic Stories**: Complete texts with summaries and metadata
📱 **Responsive**: Works perfectly on desktop and mobile devices
🌙 **Dark Mode Ready**: Built with dark mode support in mind

## Stories Included

1. **Shooting an Elephant** by George Orwell (c. 1936)
   - Autobiographical essay about imperialism and moral dilemmas

2. **A Clean, Well-Lighted Place** by Ernest Hemingway (1933)
   - Short story exploring loneliness and the search for meaning

3. **Esme** by Saki (H.H. Munro) (1911)
   - Satirical tale about class and social interactions

4. **The Black Cat** by Edgar Allan Poe (1843)
   - Psychological horror story about guilt and madness

5. **A Modest Proposal** by Jonathan Swift (1729)
   - Satirical essay critiquing social and economic policies

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── stories/
│       └── [id]/
│           └── page.tsx    # Individual story pages
└── components/             # (Future components)
```

## Features Overview

### Homepage
- Hero section with course title
- Animated story cards with hover effects
- Gradient backgrounds and modern typography
- Responsive grid layout

### Story Pages
- Individual pages for each story
- Complete story text with proper formatting
- Story metadata (author, year, genre, word count)
- Summary section
- Navigation back to homepage

### Animations
- Page entrance animations
- Hover effects on cards
- Smooth transitions between sections
- Framer Motion powered animations

## Customization

The website is built to be easily customizable:

- **Colors**: Modify the gradient colors in the story data
- **Content**: Update story text, summaries, and metadata
- **Styling**: Adjust Tailwind classes for different themes
- **Animations**: Modify Framer Motion settings for different effects

## Deployment

To deploy this website:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel, Netlify, or any static hosting service**

## Academic Purpose

This website was created as a creative project for English 115, showcasing the analysis and presentation of classic literature in a modern, interactive format.

---

Built with ❤️ for English 115
