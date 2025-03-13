// app/page.tsx
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}
