"use client";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "@/public/css/custome.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthCotext";
import { Provider } from "react-redux";
import store from "@/Redux/store";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fa" dir="rtl">
        <body suppressHydrationWarning={true}>
          <ToastContainer />
          <AuthProvider>
            <Provider store={store}>
              <ProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: true }}
                
              />
              <Header />
              {children}
              <Footer />
            </Provider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
