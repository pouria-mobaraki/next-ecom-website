import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/layout/Footer";
import NextNprogress from "@/components/libraries/NextNprogress";
import { AuthProvider } from "@/context/AuthContext";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>
        <NextNprogress>
        <Header/>
        {children}
       <Footer/>
        <BootstrapClient/>
        <ToastContainer/>
        </NextNprogress>
        </AuthProvider>
        </body>
    </html>
  );
}
