import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Car doctor",
  description: "Car doctor helps you find the best car for your needs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <div>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      
      </body>
    </html>
  );
}
