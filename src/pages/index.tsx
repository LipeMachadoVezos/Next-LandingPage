import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/pages/sections/Header";
import { AboutUs } from "@/pages/sections/AboutUs";
import { Features } from "@/pages/sections/Features";
import { Faq } from "@/pages/sections/Faq";
import { Footer } from "@/pages/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}
