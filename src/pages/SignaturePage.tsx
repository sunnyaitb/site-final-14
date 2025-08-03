import Navigation from '@/components/Navigation';
import SignaturePrograms from '@/components/SignaturePrograms';
import Footer from '@/components/Footer';

const SignaturePageHeader = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1920&q=80" 
        alt="Signature Programme" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-gold/20" />
    </div>

    <div className="relative z-10 container-max text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-display text-white leading-tight">
          Signature Programme
        </h1>
        <p className="text-subheadline text-white/90">
          Exklusive Entwicklungsprogramme für Elite-Führungskräfte
        </p>
      </div>
    </div>
  </section>
);

const SignaturePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SignaturePageHeader />
      <SignaturePrograms />
      <Footer />
    </div>
  );
};

export default SignaturePage;