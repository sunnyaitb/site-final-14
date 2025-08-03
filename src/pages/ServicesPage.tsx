import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPageHeader = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80" 
        alt="Services" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-gold/20" />
    </div>

    <div className="relative z-10 container-max text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-display text-white leading-tight">
          Services
        </h1>
        <p className="text-subheadline text-white/90">
          Maßgeschneiderte Lösungen für nachhaltige Transformation
        </p>
      </div>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServicesPageHeader />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;