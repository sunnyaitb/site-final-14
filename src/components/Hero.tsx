import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBridge from '@/assets/hero-bridge.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBridge} 
          alt="Bridge connecting cultures and systems" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/85 to-accent-gold/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-hero text-white leading-none">
              Transformation beginnt 
              <span className="block text-accent-gold">im Kopf.</span>
              <span className="block text-white opacity-90">Wirkung folgt im Tun.</span>
            </h1>
            
            <p className="text-subheadline text-white/90 max-w-3xl mx-auto">
              Wo Algorithmen skalieren, muss Führung wieder fühlen. 
              Mind´Up Consulting verbindet Kulturen, transformiert Systeme und entwickelt Menschen.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-cormorant font-medium text-white">
                Interkulturelle Intelligenz
              </h3>
              <p className="text-white/70 text-sm">
                Brücken zwischen Kulturen bauen, Vielfalt als Stärke nutzen
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                <Target className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-cormorant font-medium text-white">
                TRIAX®-Modell
              </h3>
              <p className="text-white/70 text-sm">
                Systemische Transformation durch Struktur, Kultur und Mensch
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-cormorant font-medium text-white">
                Elite Transformation
              </h3>
              <p className="text-white/70 text-sm">
                Top-1% Beratung für nachhaltigen Wandel und Wachstum
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 space-y-6">
            <p className="text-xl text-accent-gold font-cormorant font-medium">
              "Beginnen wir dort, wo andere enden: Im echten Kontakt."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-accent-gold hover:bg-accent-peru text-white px-8 py-4 rounded-xl font-medium text-lg group">
                Transformation starten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium text-lg">
                TRIAX® entdecken
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-accent-gold">500+</div>
                <div className="text-sm text-white/80">Transformationen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-accent-gold">40+</div>
                <div className="text-sm text-white/80">Länder</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-accent-gold">95%</div>
                <div className="text-sm text-white/80">Erfolgsrate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-accent-gold">€50M+</div>
                <div className="text-sm text-white/80">Generierter Wert</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;