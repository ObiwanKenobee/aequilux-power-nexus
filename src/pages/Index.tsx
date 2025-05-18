
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/landing/HeroBanner';
import ValueProps from '@/components/landing/ValueProps';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Navbar />
      <main>
        <HeroBanner />
        <ValueProps />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
