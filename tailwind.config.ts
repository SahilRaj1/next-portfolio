import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000', // Background color set to black
      },
      textColor: {
        'white': '#fff', // Text color set to white
      },
      fontFamily: {
        mono: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config;
