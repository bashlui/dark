import Navtype from "./Navtype.js";
import "./globals.css";
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link>

export const metadata = {
  title: "Taiyō 寿司バー",
  description: "Sushi and Japanese cuisine in the heart of Monterrey.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-stone-950">
          <Navtype />
      </body>
    </html>
  );
}








