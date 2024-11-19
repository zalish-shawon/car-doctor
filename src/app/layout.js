import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <div className="w-[85%] mx-auto">
        <Navbar/>
        {children}
        </div>
      
      </body>
    </html>
  );
}
