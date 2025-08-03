import Navigation from '@/components/Navigation';
import TriaxModel from '@/components/TriaxModel';
import Footer from '@/components/Footer';

const TriaxPageHeader = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80" 
        alt="TRIAX Model" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-gold/20" />
    </div>

    <div className="relative z-10 container-max text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-display text-white leading-tight">
          Das TRIAX®-Modell
        </h1>
        <p className="text-subheadline text-white/90">
          Systemische Transformation durch die intelligente Verbindung von Struktur, Kultur und Mensch
        </p>
      </div>
    </div>
  </section>
);

const Triax = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TriaxPageHeader />
      <TriaxModel />
      <Footer />
    </div>
  );
};

export default Triax;