import Navtype from "../components/Navtype";
import "./globals.css";

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








