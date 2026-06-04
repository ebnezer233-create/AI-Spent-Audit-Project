import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: { credex: { 50:"#eefdf6", 600:"#0f9f6e", 900:"#063d2d" } } } },
  plugins: []
};
export default config;
