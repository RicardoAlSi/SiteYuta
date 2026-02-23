import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
