import "../styles/globals.css"
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
