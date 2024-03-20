import { AboutUs } from "./sections/AboutUs";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";

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
