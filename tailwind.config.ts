import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'primary-dark': 'hsl(var(--primary-dark))',
        'primary-light': 'hsl(var(--primary-light))',

        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'secondary-dark': 'hsl(var(--secondary-dark))',

        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'accent-light': 'hsl(var(--accent-light))',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        border: 'hsl(var(--border))',

        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
      },
      boxShadow: {
        soft: '0 2px 8px -1px rgba(0, 0, 0, 0.08), 0 4px 16px -2px rgba(0, 0, 0, 0.06)',
        glow: '0 0 20px 0 hsl(var(--primary) / 0.2)',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
