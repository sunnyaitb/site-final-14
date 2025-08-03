import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import Identity from '@/components/Identity';
import Services from '@/components/Services';
import SignaturePrograms from '@/components/SignaturePrograms';
import SosPackages from '@/components/SosPackages';
import Footer from '@/components/Footer';

const HomeOverview = () => (
  <section className="py-20 bg-background">
    <div className="container-max">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-cormorant font-bold text-foreground mb-6">
          Willkommen bei GloBridge
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ihr Partner für systemische Transformation und interkulturelle Intelligenz. 
          Wir verbinden Welten – kulturell, technologisch, menschlich.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-4">TRIAX® Modell</h3>
          <p className="text-muted-foreground">Systemische Transformation durch Struktur, Kultur und Mensch</p>
        </div>
        <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-4">Premium Services</h3>
          <p className="text-muted-foreground">Maßgeschneiderte Lösungen für Change Management und Business Coaching</p>
        </div>
        <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-4">SOS Support</h3>
          <p className="text-muted-foreground">Sofortige Hilfe für akute Transformationskrisen</p>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <HomeOverview />
      <Footer />
    </div>
  );
};

export default Home;