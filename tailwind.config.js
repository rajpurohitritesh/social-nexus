/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
        'glow-lg': '0 0 0 1px hsl(var(--nx-primary) / 0.3), 0 20px 50px hsl(var(--nx-primary) / 0.25), 0 0 80px hsl(var(--nx-primary) / 0.15)',
        soft: '0 10px 35px hsl(0 0% 0% / 0.25)',
        'cardhover': '0 0 0 1px hsl(var(--nx-primary) / 0.25), 0 25px 50px -12px hsl(0 0% 0% / 0.35), 0 0 0 1px hsl(var(--nx-border) / 0.5)',
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
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--nx-primary) / 0.2)' },
          '50%': { boxShadow: '0 0 40px hsl(var(--nx-primary) / 0.4)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 1.4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
}

