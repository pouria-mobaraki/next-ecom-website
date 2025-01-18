import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/layout/Footer";
import NextNprogress from "@/components/libraries/nextNprogress";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextNprogress>
        <Header/>
        {children}
       <Footer/>
        <BootstrapClient/>
        <ToastContainer/>
        </NextNprogress>
        </body>
    </html>
  );
}
