import { Crown, Compass, Rocket, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignaturePrograms = () => {
  const programs = [
    {
      icon: Crown,
      title: "Elite Leadership Transformation",
      tagline: "Für CEOs und Senior Executives",
      duration: "6 Monate",
      format: "1:1 Executive Coaching + Group Masterclasses",
      description: "Das Prestigeprogramm für Führungspersönlichkeiten, die nicht nur führen, sondern Transformation verkörpern wollen.",
      highlights: [
        "Persönlicher Leadership-Archetyp",
        "Systemische Führungsdiagnostik", 
        "Cultural Intelligence Mastery",
        "Transformation Leadership Lab",
        "Elite Peer Learning Circle",
        "24/7 Executive Support"
      ],
      outcomes: "Authentische Führungsexzellenz, kulturelle Meisterschaft, systemische Wirksamkeit",
      investment: "€85.000"
    },
    {
      icon: Compass,
      title: "Global Bridge Builder Certification",
      tagline: "Interkulturelle Exzellenz für Führungskräfte",
      duration: "4 Monate",
      format: "Blended Learning + International Labs",
      description: "Werden Sie zum Brückenbauer zwischen Kulturen, Systemen und Menschen.",
      highlights: [
        "Cultural Intelligence Assessment",
        "Cross-Cultural Leadership Skills",
        "International Business Ethics",
        "Global Communication Mastery",
        "Virtual Team Excellence",
        "Internationale Zertifizierung"
      ],
      outcomes: "Globale Führungskompetenz, kulturelle Sensibilität, internationale Netzwerke",
      investment: "€45.000"
    },
    {
      icon: Rocket,
      title: "TRIAX® Master Program", 
      tagline: "Systemische Transformation für Change Leader",
      duration: "8 Monate",
      format: "Cohort-Based Learning + Live Projects",
      description: "Das einzige Programm seiner Art: Meistern Sie systemische Transformation nach dem TRIAX®-Modell.",
      highlights: [
        "TRIAX® Methodology Deep Dive",
        "Live Transformation Projects",
        "Systemisches Change Management",
        "Tools & Framework Library",
        "Master Practitioner Zertifikat",
        "Alumni-Netzwerk Access"
      ],
      outcomes: "TRIAX® Expertise, systemische Denkweise, Change Leadership Excellence",
      investment: "€65.000"
    },
    {
      icon: Globe,
      title: "Exponential Growth Academy",
      tagline: "Für Scale-up CEOs und Gründer",
      duration: "12 Monate",
      format: "Executive Coaching + Peer Masterminds",
      description: "Von Startup zu Scale-up: Navigieren Sie durch exponentielles Wachstum mit kultureller Intelligenz.",
      highlights: [
        "Scale-up Leadership Diagnostik",
        "Cultural Scaling Strategies",
        "International Expansion Roadmap",
        "Investor Relations Excellence",
        "Team & Culture Design",
        "Quarterly Strategy Sessions"
      ],
      outcomes: "Skalierbare Führung, kulturelle Wachstumsstrategien, internationale Expansion",
      investment: "€120.000"
    }
  ];

  return (
    <section className="section-padding bg-accent-cream">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-display text-primary mb-6">
            Signature Programme
          </h2>
          <p className="text-subheadline text-muted-foreground max-w-3xl mx-auto">
            Exklusive Entwicklungsprogramme für Elite-Führungskräfte. 
            Limitierte Plätze, maximale Wirkung, lebenslange Transformation.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            
            return (
              <div 
                key={index}
                className="bg-background rounded-2xl shadow-elegant overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Program Header */}
                    <div className="lg:col-span-1 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-accent-gold" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-cormorant font-semibold text-primary">
                            {program.title}
                          </h3>
                          <p className="text-accent-gold font-medium">
                            {program.tagline}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="font-medium text-primary">Dauer:</span>
                          <span className="text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="font-medium text-primary">Format:</span>
                          <span className="text-muted-foreground text-sm">{program.format}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-primary">Investition:</span>
                          <span className="text-accent-gold font-semibold">{program.investment}</span>
                        </div>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Programm-Highlights:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">Transformation-Outcomes:</h4>
                        <p className="text-muted-foreground">{program.outcomes}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn-accent">
                          Programm-Details anfordern
                        </Button>
                        <Button variant="outline" className="btn-outline">
                          Bewerbung einreichen
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusive Notice */}
        <div className="mt-20 text-center">
          <div className="bg-primary-dark rounded-2xl p-12 text-white">
            <h3 className="text-headline text-white mb-4">
              Exklusivität als Prinzip
            </h3>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto mb-8">
              Unsere Signature Programme sind limitiert auf maximal 12 Teilnehmer pro Kohorte. 
              Jeder Platz wird sorgfältig vergeben – basierend auf Potenzial, Commitment und kultureller Passung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent-gold hover:bg-accent-peru text-white px-8 py-4">
                Aufnahmegespräch vereinbaren
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Alumni-Testimonials lesen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignaturePrograms;