/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Social Nexus palette (MUST be replaced with exact hex values from the provided PDF)
        // Once you add the palette PDF to this repo, we’ll lock these down.
        nx: {
          bg: 'hsl(var(--nx-bg) / <alpha-value>)',
          fg: 'hsl(var(--nx-fg) / <alpha-value>)',
          muted: 'hsl(var(--nx-muted) / <alpha-value>)',
          border: 'hsl(var(--nx-border) / <alpha-value>)',
          card: 'hsl(var(--nx-card) / <alpha-value>)',
          primary: 'hsl(var(--nx-primary) / <alpha-value>)',
          secondary: 'hsl(var(--nx-secondary) / <alpha-value>)',
          accent: 'hsl(var(--nx-accent) / <alpha-value>)',
          success: 'hsl(var(--nx-success) / <alpha-value>)',
          warning: 'hsl(var(--nx-warning) / <alpha-value>)',
          danger: 'hsl(var(--nx-danger) / <alpha-value>)',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        glow: '0 0 0 1px hsl(var(--nx-border) / 0.7), 0 10px 30px hsl(var(--nx-primary) / 0.22)',
        soft: '0 10px 35px hsl(0 0% 0% / 0.25)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

