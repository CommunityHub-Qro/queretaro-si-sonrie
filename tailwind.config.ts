import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundColor: {
        secondary: '#292929',
        third: '#FF4141',
        fourth: '#FFE135',
        fifth: '#00A2FF',
      },
      borderColor: {
        secondary: '#292929',
        third: '#FF4141',
        fourth: '#FFE135',
        fifth: '#00A2FF',
      }
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
} satisfies Config;
