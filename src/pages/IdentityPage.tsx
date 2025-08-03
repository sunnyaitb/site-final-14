import Navigation from '@/components/Navigation';
import Identity from '@/components/Identity';
import Footer from '@/components/Footer';

const IdentityPageHeader = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&q=80" 
        alt="Identität & Ursprung" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-gold/20" />
    </div>

    <div className="relative z-10 container-max text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-display text-white leading-tight">
          Identität & Ursprung
        </h1>
        <p className="text-subheadline text-white/90">
          Wir verbinden Welten – kulturell, technologisch, menschlich
        </p>
      </div>
    </div>
  </section>
);

const IdentityPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <IdentityPageHeader />
      <Identity />
      <Footer />
    </div>
  );
};

export default IdentityPage;