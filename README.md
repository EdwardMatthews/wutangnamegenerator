# Wu Tang Name Generator

A modern web application that generates Wu Tang style names using Next.js and TailwindCSS.

## Features

- Generate unique Wu Tang style names
- Server-side rendering for better SEO
- Responsive design with hip-hop aesthetic
- Smooth animations and transitions
- Mobile-friendly interface

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- React Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with header and footer
│   ├── page.tsx      # Homepage with name generator
│   └── not-found.tsx # 404 page
├── components/
│   ├── Header.tsx    # Navigation header
│   ├── Footer.tsx    # Site footer
│   ├── Features.tsx  # Features section
│   ├── FAQ.tsx       # FAQ section
│   └── HowItWorks.tsx # How it works section
└── utils/
    └── nameGenerator.ts # Name generation logic
```

## Development

- The site uses server-side rendering for better SEO
- All animations are implemented using CSS for better performance
- Components are modular and reusable
- Follows modern React best practices

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## License

This project is licensed under the MIT License.
