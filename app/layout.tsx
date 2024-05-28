import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Silicone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://kit.fontawesome.com/81af572429.css" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className="wrapper">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}