import Navigation from '@/components/Navigation';
import SosPackages from '@/components/SosPackages';
import Footer from '@/components/Footer';

const SosPageHeader = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80" 
        alt="SOS Pakete" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-gold/20" />
    </div>

    <div className="relative z-10 container-max text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-display text-white leading-tight">
          SOS-Pakete
        </h1>
        <p className="text-subheadline text-white/90">
          Sofortige Hilfe für akute Transformationskrisen
        </p>
      </div>
    </div>
  </section>
);

const SosPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SosPageHeader />
      <SosPackages />
      <Footer />
    </div>
  );
};

export default SosPage;