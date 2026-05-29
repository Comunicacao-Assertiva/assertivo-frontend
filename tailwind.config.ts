import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
