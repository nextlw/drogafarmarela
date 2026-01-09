import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Delivery } from '@/components/Delivery';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Products />
        <Delivery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
