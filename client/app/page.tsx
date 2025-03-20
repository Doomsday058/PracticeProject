// app/page.tsx
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import ReviewsSection from './components/ReviewsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
