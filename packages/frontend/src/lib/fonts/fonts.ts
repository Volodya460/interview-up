import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../../assets/fonts/Manrope-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const poppins = localFont({
  src: [
    {
      path: "../../assets/fonts/Poppins-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../assets/fonts/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});
