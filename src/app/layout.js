import "./globals.css";

 const metadata = {
  title: "Kokonas' Website",
  description: "Kokana's personal website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
