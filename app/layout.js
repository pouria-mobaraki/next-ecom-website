import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/layout/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header/>
        {children}
       <Footer/>
        <BootstrapClient/>
        <ToastContainer/>
        </body>
    </html>
  );
}
