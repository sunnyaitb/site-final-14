import { useState } from 'react';
import { Layers, Heart, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TriaxModel = () => {
  const [activeAxis, setActiveAxis] = useState<'structure' | 'culture' | 'human' | null>(null);

  const axes = [
    {
      id: 'structure',
      title: 'Structure',
      subtitle: 'Prozesse & Methoden',
      description: 'Systematische Organisationsentwicklung und agile Transformationsmethoden',
      icon: Cog,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      details: [
        'Agile Organisationsstrukturen',
        'Effiziente Prozessgestaltung', 
        'Systematisches Projektmanagement',
        'Digitale Transformation'
      ]
    },
    {
      id: 'culture',
      title: 'Culture', 
      subtitle: 'Interkulturelle Intelligenz',
      description: 'Verstehen und überbrücken kultureller Unterschiede für nachhaltige Zusammenarbeit',
      icon: Heart,
      color: 'text-accent-gold',
      bgColor: 'bg-accent-gold/10',
      details: [
        'Kulturelle Intelligenz entwickeln',
        'Kommunikationsmuster verstehen',
        'Diversity als Stärke nutzen',
        'Globale Teams effektiv führen'
      ]
    },
    {
      id: 'human',
      title: 'Human',
      subtitle: 'Teams & Emotionen', 
      description: 'Entwicklung menschlicher Potentiale und emotionaler Kompetenz in Veränderungsprozessen',
      icon: Layers,
      color: 'text-accent-peru',
      bgColor: 'bg-accent-peru/10',
      details: [
        'Emotionale Kompetenz stärken',
        'Teamdynamik optimieren',
        'Leadership Development',
        'Change-Bereitschaft fördern'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Systemischer Ansatz',
      description: 'Ganzheitliche Betrachtung aller Dimensionen'
    },
    {
      title: 'Wissenschaftlich fundiert',
      description: 'Basiert auf 15+ Jahren Forschung und Praxis'
    },
    {
      title: 'Praxiserprobt',
      description: 'Bewährt in internationalen Transformationsprojekten'
    },
    {
      title: 'Nachhaltig wirksam',
      description: 'Langfristige und messbare Ergebnisse'
    }
  ];

  const results = [
    { value: '87%', label: 'höhere Mitarbeiterzufriedenheit nach TRIAx-Transformation' },
    { value: '45%', label: 'schnellere Projektrealisierung durch systemischen Ansatz' },
    { value: '63%', label: 'Reduktion kultureller Konflikte in internationalen Teams' },
    { value: '92%', label: 'Nachhaltigkeit der Veränderungen nach 2 Jahren' }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="section-padding bg-accent-cream">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-display text-primary mb-6">
              Das TRIAx-Modell
            </h1>
            <p className="text-subheadline text-muted-foreground max-w-4xl mx-auto">
              Unser systemischer Ansatz für nachhaltige Transformation verbindet drei fundamentale Dimensionen zu einem ganzheitlichen Modell
            </p>
          </div>
        </div>
      </section>

      {/* Why TRIAx Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-headline text-primary mb-6">
                Warum TRIAx?
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Die meisten Transformationsansätze konzentrieren sich auf einzelne Aspekte – entweder auf Struktur, Technologie oder Menschen. Wir haben erkannt, dass nachhaltige Veränderung nur gelingt, wenn alle drei Dimensionen systematisch berücksichtigt werden.
              </p>
              <p className="text-body-large text-muted-foreground mb-8">
                Das TRIAx-Modell ist das Ergebnis von über 15 Jahren internationaler Beratungserfahrung und wissenschaftlicher Forschung zu systemischen Veränderungsprozessen.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-accent-gold" />
                    <h3 className="text-lg font-cormorant font-semibold text-primary">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRIAx Model Visualization */}
      <section className="section-padding bg-accent-cream">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-headline text-primary mb-6">
              Das TRIAx-Modell
            </h2>
            <p className="text-subheadline text-muted-foreground max-w-3xl mx-auto">
              Unser systemischer Ansatz verbindet drei fundamentale Dimensionen der Transformation zu einem ganzheitlichen Modell
            </p>
          </div>

          {/* Interactive Triangle Visualization - Smaller */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="aspect-square relative">
              {/* Triangle Background */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <polygon 
                  points="150,40 260,240 40,240" 
                  fill="none" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="2"
                  className="opacity-30"
                />
                
                {/* Connecting Lines */}
                <line x1="150" y1="40" x2="150" y2="240" stroke="hsl(var(--accent-gold))" strokeWidth="1" className="opacity-20" />
                <line x1="150" y1="140" x2="260" y2="240" stroke="hsl(var(--accent-gold))" strokeWidth="1" className="opacity-20" />
                <line x1="150" y1="140" x2="40" y2="240" stroke="hsl(var(--accent-gold))" strokeWidth="1" className="opacity-20" />
                
                {/* Center Point */}
                <circle 
                  cx="150" 
                  cy="140" 
                  r="6" 
                  fill="hsl(var(--accent-gold))"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                
                {/* TRIAX Label */}
                <text x="150" y="150" textAnchor="middle" className="fill-accent-gold text-sm font-cormorant font-semibold">
                  TRIAX
                </text>
              </svg>

              {/* Axis Points */}
              {axes.map((axis, index) => {
                const positions = [
                  { top: '5%', left: '50%', transform: 'translate(-50%, -50%)' }, // Top
                  { bottom: '5%', right: '5%', transform: 'translate(50%, 50%)' }, // Bottom Right  
                  { bottom: '5%', left: '5%', transform: 'translate(-50%, 50%)' } // Bottom Left
                ];
                
                const IconComponent = axis.icon;
                
                return (
                  <button
                    key={axis.id}
                    className={`absolute z-10 p-4 rounded-xl transition-all duration-300 group ${
                      activeAxis === axis.id 
                        ? `${axis.bgColor} scale-110 shadow-elegant` 
                        : 'bg-background hover:bg-muted shadow-lg hover:shadow-elegant hover:scale-105'
                    }`}
                    style={positions[index]}
                    onMouseEnter={() => setActiveAxis(axis.id as any)}
                    onMouseLeave={() => setActiveAxis(null)}
                  >
                    <div className="text-center space-y-2">
                      <div className={`w-12 h-12 mx-auto rounded-lg ${axis.bgColor} flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${axis.color}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-cormorant font-semibold text-primary">
                          {axis.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {axis.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Systemische Wirkung */}
          <div className="text-center mb-16">
            <h3 className="text-subheadline text-primary mb-4">
              Systemische Wirkung
            </h3>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Im TRIAx-Modell beeinflussen sich alle drei Dimensionen gegenseitig. Veränderungen in einer Dimension wirken sich automatisch auf die anderen aus. Diese systemische Betrachtung ermöglicht nachhaltige und ganzheitliche Transformationen.
            </p>
          </div>
        </div>
      </section>

      {/* Die drei Dimensionen im Detail */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-headline text-primary mb-6">
              Die drei Dimensionen im Detail
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {axes.map((axis) => {
              const IconComponent = axis.icon;
              
              return (
                <div 
                  key={axis.id}
                  className={`bg-background rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-elegant ${
                    activeAxis === axis.id ? 'scale-105 shadow-elegant' : ''
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${axis.bgColor} flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${axis.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-cormorant font-semibold text-primary">
                          {axis.title}
                        </h3>
                        <p className="text-sm text-accent-gold font-medium">
                          {axis.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {axis.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {axis.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Systemische Wirkung Details */}
      <section className="section-padding bg-accent-cream">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-headline text-primary mb-6">
              Systemische Wirkung
            </h2>
            <p className="text-subheadline text-muted-foreground max-w-3xl mx-auto">
              Das Besondere am TRIAx-Modell ist die systemische Betrachtung: Alle drei Dimensionen beeinflussen sich gegenseitig.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-4">
                <div className="text-2xl font-cormorant font-semibold text-accent-gold">
                  Culture → Human
                </div>
                <p className="text-muted-foreground">
                  Kulturelle Intelligenz verbessert zwischenmenschliche Beziehungen und Teameffektivität
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-4">
                <div className="text-2xl font-cormorant font-semibold text-accent-gold">
                  Human → Structure
                </div>
                <p className="text-muted-foreground">
                  Starke Teams und Leadership schaffen bessere Prozesse und Organisationsstrukturen
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-4">
                <div className="text-2xl font-cormorant font-semibold text-accent-gold">
                  Structure → Culture
                </div>
                <p className="text-muted-foreground">
                  Klare Strukturen und Prozesse fördern eine offene und vertrauensvolle Kultur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnisse mit TRIAx */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-headline text-primary mb-6">
              Ergebnisse mit TRIAx
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-accent-cream rounded-2xl p-8 text-center">
                <div className="text-4xl font-cormorant font-bold text-accent-gold mb-4">
                  {result.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-headline text-white mb-6">
              TRIAx in Ihrer Organisation
            </h2>
            <p className="text-body-large text-white/90 mb-8">
              Erfahren Sie, wie das TRIAx-Modell Ihre spezifischen Transformationsherausforderungen lösen kann.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent-gold hover:bg-accent-peru text-white px-8 py-4 rounded-xl font-medium text-lg group">
                Erstberatung anfordern
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-medium text-lg">
                Unsere Leistungen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TriaxModel;