import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arctic: {
          900: "#0A0F14",
          800: "#0F1C26",
          700: "#111E2E",
          cyan: "#6FE8FF",
          frost: "#9FF2FF"
        }
      },
      boxShadow: {
        glow: "0 0 24px rgba(111, 232, 255, 0.35)",
        soft: "0 16px 40px rgba(4, 8, 13, 0.45)"
      },
      borderRadius: {
        panel: "12px"
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-8%, 2%, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 10s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;
