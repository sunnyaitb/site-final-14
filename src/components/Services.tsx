import { ArrowRight, TrendingUp, Users, Globe, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Change Management',
      subtitle: 'Transformation mit System',
      description: 'Nachhaltiger Wandel durch das TRIAX®-Modell. Wir begleiten Ihre Organisation vom ersten Impuls bis zur vollständigen Integration neuer Arbeitsweisen.',
      results: [
        '30% kürzere Transformation-Zyklen',
        '+15% Mitarbeiterengagement', 
        '85% nachhaltige Veränderungsrate'
      ],
      features: [
        'Systemische Change-Architektur',
        'Kulturelle Transformations-Maps',
        'Neurowissenschaftlich fundierte Methoden',
        'Stakeholder-Resonanz-Analyse'
      ],
      investment: 'ab 25.000 €',
      duration: '3-12 Monate'
    },
    {
      icon: Users,
      title: 'Business Coaching',
      subtitle: 'Führung neu gedacht',
      description: 'Executive Coaching für Führungskräfte, die systemisch denken und kulturell intelligent handeln möchten. Persönlichkeitsentwicklung mit nachweisbarem Business-Impact.',
      results: [
        '+20% Entscheidungssicherheit',
        '+10% Team-Resilienz',
        '40% bessere Konfliktlösung'
      ],
      features: [
        'Archetypen-basiertes Leadership',
        'Interkulturelle Führungskompetenzen',
        'Systemische Selbstreflexion',
        'Resonanz-Leadership Training'
      ],
      investment: 'ab 15.000 €',
      duration: '6-18 Monate'
    },
    {
      icon: Globe,
      title: 'Interkulturelle Intelligenz',
      subtitle: 'Vielfalt als Wettbewerbsvorteil',
      description: 'Entwicklung kultureller Kompetenzen für globale Teams und internationale Expansion. Brücken bauen zwischen Kulturen, Märkten und Denkweisen.',
      results: [
        '+25% globale Marktanteile',
        '-10% kulturbedingte Konflikte',
        '50% schnellere Markterschließung'
      ],
      features: [
        'Cultural Intelligence Assessment',
        'Cross-Cultural Team Dynamics',
        'Global Leadership Development',
        'Market Entry Cultural Strategy'
      ],
      investment: 'ab 20.000 €',
      duration: '4-8 Monate'
    },
    {
      icon: Zap,
      title: 'Scrum4Sales',
      subtitle: 'Vertrieb neu erfunden',
      description: 'Agile Vertriebstransformation mit neuro-psychologischen Verkaufsstrategien. Verkaufen wird zu einem Akt der Resonanz und des echten Servicegedankens.',
      results: [
        '+40% Vertriebseffizienz',
        '-20% Verkaufszyklen',
        '60% höhere Abschlussraten'
      ],
      features: [
        'Neuro-Sales Methodologie',
        'Agile Sales Team Transformation',
        'Empathie-basierte Verkaufstechniken',
        'Customer Journey Resonance Mapping'
      ],
      investment: 'ab 30.000 €',
      duration: '3-6 Monate'
    },
    {
      icon: Target,
      title: 'Expansion Management',
      subtitle: 'GCC/DACH/MENA',
      description: 'Strategische Begleitung bei internationaler Expansion in die Regionen Golf-Kooperationsrat, DACH und MENA. Kulturell intelligente Markterschließung.',
      results: [
        '70% erfolgreiche Market Entries',
        '+35% schnellere ROI-Erreichung',
        '90% kulturelle Akzeptanz'
      ],
      features: [
        'Regional Cultural Deep-Dive',
        'Market Entry Strategy Design',
        'Local Leadership Development',
        'Cross-Border Team Integration'
      ],
      investment: 'ab 50.000 €',
      duration: '6-24 Monate'
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-display text-primary mb-6">
            Services & Wirkfelder
          </h2>
          <p className="text-subheadline text-muted-foreground max-w-4xl mx-auto">
            Jede Dienstleistung ist eine Reise der Transformation. 
            Entdecken Sie, wie wir Ihr Unternehmen und Ihre Führung auf die nächste Stufe bringen.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-accent-gold" />
                      </div>
                      <div>
                        <h3 className="text-headline text-primary">
                          {service.title}
                        </h3>
                        <p className="text-lg text-accent-gold font-cormorant font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-body-large text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-cormorant font-semibold text-primary mb-4">
                      Was wir konkret tun:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Investment & Duration */}
                  <div className="grid grid-cols-2 gap-6 p-6 bg-background rounded-xl border border-border">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Investment</div>
                      <div className="text-lg font-cormorant font-semibold text-primary">
                        {service.investment}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Dauer</div>
                      <div className="text-lg font-cormorant font-semibold text-primary">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <Button className="btn-accent group">
                    {service.title} entdecken
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Results Card */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-primary-dark text-white p-8 rounded-2xl">
                    <h4 className="text-xl font-cormorant font-semibold mb-6">
                      Nachweisbare Resultate
                    </h4>
                    
                    <div className="space-y-6">
                      {service.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-accent-gold" />
                          </div>
                          <div>
                            <div className="text-lg font-cormorant font-semibold text-accent-gold">
                              {result.split(' ')[0]}
                            </div>
                            <div className="text-sm opacity-90">
                              {result.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-sm opacity-80 italic">
                        "Transformation messbar machen – das ist unser Anspruch an jedes Projekt."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-background rounded-2xl p-12 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-headline text-primary mb-6">
              Welcher Service passt zu Ihrer Herausforderung?
            </h3>
            <p className="text-body-large text-muted-foreground mb-8">
              Jede Organisation ist einzigartig. Lassen Sie uns in einem unverbindlichen Gespräch 
              herausfinden, welcher Ansatz für Sie der richtige ist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-accent group">
                Kostenlose Transformation-Analyse
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Service-Guide herunterladen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;