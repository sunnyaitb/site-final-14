import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Interkulturelle Intelligenz",
      subtitle: "Wir verbinden Welten",
      description: "kulturell, technologisch, menschlich.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80",
      cta: "Transformation starten"
    },
    {
      id: 2,
      title: "Mind Up TRIAX®-Modell",
      subtitle: "Systemische Transformation durch Struktur, Kultur und Mensch",
      description: "Echte Macht schreit nicht. Sie flüstert.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
      cta: "TRIAX® entdecken"
    },
    {
      id: 3,
      title: "Transformation ist kein Projekt",
      subtitle: "Es ist eine Sprache.",
      description: "Wir sprechen sie fließend – zwischen Menschen, Märkten und Maschinen.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=80",
      cta: "Gespräch beginnen"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/85 to-accent-gold/10" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container-max text-center text-white">
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="space-y-6">
                  <h1 className="text-hero text-white leading-none opacity-0 animate-fade-in">
                    {slide.title}
                  </h1>
                  
                  <div className="space-y-4">
                    <h2 className="text-subheadline text-accent-gold font-cormorant font-medium opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      {slide.subtitle}
                    </h2>
                    
                    <p className="text-xl text-white/90 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      {slide.description}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <Button className="bg-accent-gold hover:bg-accent-peru text-white px-8 py-4 rounded-xl font-medium text-lg group">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-accent-gold scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;