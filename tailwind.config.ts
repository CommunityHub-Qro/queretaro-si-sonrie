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
        specialBlack: "#292929",
        specialRed: "#FF4141",
        specialYellow: "#FFE135",
        specialBlue: "#00A2FF",
      },
      borderColor: {
        specialBlack: "#292929",
        specialRed: "#FF4141",
        specialYellow: "#FFE135",
        specialBlue: "#00A2FF",
      },
      textColor: {
        specialRed: "#FF4141",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
} satisfies Config;
