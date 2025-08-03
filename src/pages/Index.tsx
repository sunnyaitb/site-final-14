import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Identity from '@/components/Identity';
import TriaxModel from '@/components/TriaxModel';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Identity />
      <TriaxModel />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
