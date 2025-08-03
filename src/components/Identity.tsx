import { Quote, Star, Globe, Heart } from 'lucide-react';
import globridgeStory from '@/assets/globridge-story.jpg';
import philosophyImage from '@/assets/philosophy-image.jpg';
import haltungImage from '@/assets/haltung-image.jpg';

const Identity = () => {
  const values = [
    {
      icon: Globe,
      title: 'Respekt vor kultureller Vielfalt',
      description: 'Jede Kultur bringt einzigartige Perspektiven und Stärken mit. Wir ehren diese Vielfalt als Grundlage für Innovation und Wachstum.'
    },
    {
      icon: Heart,
      title: 'Authentizität in der Beratung',
      description: 'Echte Transformation entsteht nur durch authentische Beziehungen. Wir beraten mit Herz und Verstand, ohne Masken oder Fassaden.'
    },
    {
      icon: Star,
      title: 'Systemisches Denken',
      description: 'Wir betrachten Organisationen als lebende Systeme. Jede Veränderung wirkt auf das Ganze – das verstehen und nutzen wir.'
    },
    {
      icon: Quote,
      title: 'Nachhaltige Transformation',
      description: 'Oberflächliche Veränderungen verpuffen. Wir schaffen Transformation, die tief geht und dauerhaft wirkt.'
    }
  ];

  const testimonials = [
    {
      quote: "Mind´Up Consulting hat uns den Spiegel des Selbst gezeigt. Durch ihre Arbeit haben wir nicht nur unsere Prozesse verbessert, sondern als Team eine neue Klarheit und Verbindung gefunden.",
      author: "Dr. Sarah Chen",
      role: "CEO, TechGlobal Solutions",
      result: "+35% Mitarbeiterengagement"
    },
    {
      quote: "Das TRIAX®-Modell war der Durchbruch für unsere internationale Expansion. Endlich hatten wir einen systematischen Ansatz, der Struktur, Kultur und Menschen gleichermaßen berücksichtigt.",
      author: "Ahmad Al-Rashid", 
      role: "Managing Director MENA, InnovaCorp",
      result: "+60% Marktpenetration"
    },
    {
      quote: "Resonanz statt Beratung – das war unser Wendepunkt. Die Zusammenarbeit mit Mind´Up fühlte sich an wie ein intensives Gespräch mit einem weisen Freund.",
      author: "Marie Dubois",
      role: "Head of Transformation, EuroFinance",
      result: "+45% Prozesseffizienz"
    }
  ];

  return (
    <section id="identity" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display text-primary mb-6">
            Identität & Ursprung
          </h2>
          <p className="text-subheadline text-muted-foreground max-w-4xl mx-auto">
            Wir sind nicht für alle. Aber zu 100% für die Richtigen. 
            Entdecken Sie, was uns formt und antreibt.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-headline text-primary mb-6">Unsere Story</h3>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  GloBridge entstand aus einer einfachen Erkenntnis: Die größten Transformations-Herausforderungen 
                  unserer Zeit entstehen nicht durch mangelnde Technologie oder Strategien, sondern durch die Unfähigkeit, 
                  menschliche Systeme zu verstehen und zu verbinden.
                </p>
                <p>
                  2018 begann unsere Reise mit der Frage: "Warum scheitern 70% aller Change-Projekte?" Die Antwort führte 
                  uns tief in die Psychologie von Organisationen, in kulturelle Intelligenz und systemisches Denken.
                </p>
                <p>
                  Heute stehen wir für eine neue Generation der Beratung – eine, die Resonanz über Rhetorik stellt, 
                  Verbindung über Vorschriften und nachhaltige Transformation über schnelle Lösungen.
                </p>
              </div>
            </div>
            
            <div className="relative mt-8">
              <img 
                src={globridgeStory} 
                alt="GloBridge Story" 
                className="w-full h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>

            <div className="bg-accent-cream p-8 rounded-2xl">
              <h4 className="text-xl font-cormorant font-semibold text-primary mb-4">
                Unsere Mission
              </h4>
              <p className="text-body text-muted-foreground italic">
                "Brücken zu bauen, wo andere Mauern sehen. Transformation zu ermöglichen, 
                wo andere Stillstand akzeptieren. Menschen zu verbinden, wo andere Systeme isolieren."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-dark text-white p-12 rounded-2xl">
              <h4 className="text-xl font-cormorant font-semibold mb-6">
                Unsere Vision 2030
              </h4>
              <p className="text-body-large opacity-90 mb-8">
                Eine Welt, in der kulturelle Vielfalt als Innovationsmotor verstanden wird, 
                in der systemisches Denken Silos überwindet und in der echte menschliche 
                Verbindung den Grundstein für nachhaltigen Erfolg legt.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-cormorant font-bold text-accent-gold">1000+</div>
                  <div className="text-sm opacity-80">Transformierte Organisationen</div>
                </div>
                <div>
                  <div className="text-3xl font-cormorant font-bold text-accent-gold">50+</div>
                  <div className="text-sm opacity-80">Länder mit TRIAX®-Impact</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={haltungImage} 
                alt="Unsere Haltung" 
                className="w-full h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
        
        {/* Unsere Haltung */}
        <div className="mb-24">
          <h3 className="text-headline text-primary text-center mb-12">Unsere Haltung</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <h4 className="font-semibold text-primary mb-3">Resonanz statt Beratung</h4>
              <p className="text-muted-foreground">Wir schwingen mit unseren Klienten mit, statt ihnen etwas zu verordnen.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <h4 className="font-semibold text-primary mb-3">Verbindung statt Prozesse</h4>
              <p className="text-muted-foreground">Menschen stehen im Zentrum, nicht Frameworks oder Methoden.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <h4 className="font-semibold text-primary mb-3">Tiefe statt Oberfläche</h4>
              <p className="text-muted-foreground">Wir gehen dorthin, wo andere nicht hinschauen wollen.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <h4 className="font-semibold text-primary mb-3">Kulturelle Intelligenz</h4>
              <p className="text-muted-foreground">Jede Kultur hat ihre eigene Weisheit. Wir verstehen und übersetzen.</p>
            </div>
          </div>
        </div>

        {/* Philosophie */}
        <div className="mb-24">
          <h3 className="text-headline text-primary text-center mb-12">Philosophie</h3>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={philosophyImage} 
                alt="Unsere Philosophie" 
                className="w-full h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>
            <div className="space-y-6 text-body text-muted-foreground order-1 lg:order-2">
              <p className="text-2xl font-cormorant italic text-accent-gold">
                "Echte Macht schreit nicht. Sie flüstert."
              </p>
              <p>
                Unsere Philosophie basiert auf der Überzeugung, dass nachhaltige Veränderung von innen heraus entsteht. 
                Wir glauben an die Kraft der leisen Töne, der subtilen Interventionen und der respektvollen Begegnung.
              </p>
              <p>
                Transformation ist für uns kein Projekt, sondern eine Sprache – eine Sprache, die wir fließend sprechen 
                zwischen Menschen, Märkten und Maschinen. Wir übersetzen zwischen Welten und schaffen Brücken, 
                wo andere nur Abgründe sehen.
              </p>
              <p>
                In einer Welt der schnellen Lösungen setzen wir auf tiefgreifende Veränderung. 
                In einer Zeit der Digitalisierung vergessen wir nie den Menschen. 
                In einer Ära der Globalisierung ehren wir die lokale Weisheit.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h3 className="text-headline text-primary text-center mb-12">
            Unsere Werte
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center space-y-6 group">
                  <div className="w-20 h-20 mx-auto bg-accent-cream rounded-2xl flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                    <IconComponent className="h-10 w-10 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-cormorant font-semibold text-primary mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-accent-cream rounded-3xl p-12">
          <h3 className="text-headline text-primary text-center mb-12">
            Stimmen unserer Klienten
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 space-y-6 shadow-lg">
                <Quote className="h-8 w-8 text-accent-gold" />
                <blockquote className="text-body text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="space-y-2">
                    <div className="font-cormorant font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-accent-gold">
                      Resultat: {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div className="mt-24 text-center">
          <h3 className="text-headline text-primary mb-8">
            Für wen wir arbeiten
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-body-large text-muted-foreground mb-8">
              Unsere Klienten sind visionäre Führungskräfte und mutige Organisationen, 
              die bereit sind für echte Transformation. Sie denken systemisch, 
              handeln nachhaltig und schätzen kulturelle Intelligenz als Wettbewerbsvorteil.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-lg font-cormorant font-semibold text-accent-gold">
                  Globale Konzerne
                </h4>
                <p className="text-sm text-muted-foreground">
                  DAX-Unternehmen und internationale Corporations mit komplexen kulturellen Herausforderungen
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-cormorant font-semibold text-accent-gold">
                  Scale-ups & Mittelstand
                </h4>
                <p className="text-sm text-muted-foreground">
                  Wachsende Unternehmen an kritischen Wendepunkten ihrer Entwicklung
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-cormorant font-semibold text-accent-gold">
                  Führungspersönlichkeiten
                </h4>
                <p className="text-sm text-muted-foreground">
                  C-Level Executives und Senior Leader mit systemischen Führungsaufgaben
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;