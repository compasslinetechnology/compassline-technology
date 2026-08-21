/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#14263F',
        paper: '#F2F4F1',
        ink: '#1B2733',
        brass: '#A9824C',
        'brass-light': '#C9A876',
        harbor: '#2F5C7A',
        mist: '#DCE3E0',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 38, 63, 0.06), 0 8px 24px rgba(20, 38, 63, 0.06)',
        'card-hover': '0 2px 4px rgba(20, 38, 63, 0.08), 0 16px 32px rgba(20, 38, 63, 0.10)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
};
