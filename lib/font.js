import localFont from "next/font/local";

// Outfit (100–900)
export const outfit = localFont({
  src: [
    {
      path: "./fonts/Outfit.woff",  // 👈 fixed
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

// Instrument Serif Italic
export const instrumentSerifItalic = localFont({
  src: [
    {
      path: "./fonts/InstrumentSerif-Italic.woff", // 👈 fixed
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif-italic",
});

// Instrument Serif Regular
export const instrumentSerif = localFont({
  src: [
    {
      path: "./fonts/InstrumentSerif-Regular.woff", // 👈 fixed
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-instrument-serif",
});

// NyghtSerif Bold Italic
export const nyghtSerifBoldItalic = localFont({
  src: [
    {
      path: "./fonts/NyghtSerif-BoldItalic.woff", // 👈 fixed
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-nyghtserif-bold-italic",
});

// NyghtSerif Medium Italic
export const nyghtSerifMediumItalic = localFont({
  src: [
    {
      path: "./fonts/NyghtSerif-MediumItalic.woff", // 👈 fixed
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-nyghtserif-medium-italic",
});
