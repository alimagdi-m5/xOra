import { Suspense, lazy } from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";

const Features = lazy(() => import("./sections/Features.jsx"));
const Pricing = lazy(() => import("./sections/Pricing.jsx"));
const Faq = lazy(() => import("./sections/Faq.jsx"));
const Testimonials = lazy(() => import("./sections/Testimonials.jsx"));
const Download = lazy(() => import("./sections/Download.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
        <Download />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
