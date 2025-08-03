import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const offices = [
    {
      country: 'Deutschland',
      city: 'Frankfurt am Main',
      address: 'Bockenheimer Landstraße 24',
      postal: '60323 Frankfurt',
      phone: '+49 69 2710 5847',
      email: 'frankfurt@mindup-consulting.com'
    },
    {
      country: 'Marokko',
      city: 'Casablanca',
      address: 'Boulevard Zerktouni 45',
      postal: '20100 Casablanca',
      phone: '+212 522 47 8293',
      email: 'casablanca@mindup-consulting.com'
    },
    {
      country: 'UAE',
      city: 'Dubai',
      address: 'DIFC, Gate Village 8',
      postal: 'Dubai, UAE',
      phone: '+971 4 571 9842',
      email: 'dubai@mindup-consulting.com'
    }
  ];

  const languages = [
    { code: 'DE', name: 'Deutsch' },
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'AR', name: 'العربية' }
  ];

  const services = [
    'Change Management',
    'Business Coaching',
    'Interkulturelle Intelligenz',
    'Scrum4Sales',
    'Expansion Management'
  ];

  const programmes = [
    'CultureBridge Elite',
    'Neuro-Sales Reset',
    'Leadership Resonance',
    'TRIAX® Workshop'
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-max py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-cormorant font-semibold mb-4">
                Mind´Up Consulting
              </h3>
              <p className="text-body text-white/80 max-w-lg">
                Elite Transformation & Interkulturelle Intelligenz. 
                Wir verbinden Kulturen, transformieren Systeme und entwickeln Menschen 
                durch unser proprietäres TRIAX®-Modell.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-cormorant font-semibold text-accent-gold">
                Unser Versprechen
              </h4>
              <p className="text-sm text-white/70 italic">
                "Transformation beginnt im Kopf. Wirkung folgt im Tun. 
                Resonanz statt Beratung – das ist unser Weg."
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/company/mindup-consulting" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@mindup-consulting.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-cormorant font-semibold text-accent-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-white/70 hover:text-accent-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/20">
              <h5 className="text-sm font-semibold text-white mb-3">Signature Programme</h5>
              <ul className="space-y-2">
                {programmes.map((programme) => (
                  <li key={programme}>
                    <a 
                      href={`#${programme.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs text-white/60 hover:text-accent-gold transition-colors"
                    >
                      {programme}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-cormorant font-semibold text-accent-gold">
              Kontakt & Standorte
            </h4>
            
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="text-sm font-semibold text-white flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-accent-gold" />
                    {office.country} - {office.city}
                  </h5>
                  <div className="text-xs text-white/60 space-y-1 ml-6">
                    <p>{office.address}</p>
                    <p>{office.postal}</p>
                    <a 
                      href={`tel:${office.phone}`} 
                      className="flex items-center hover:text-accent-gold transition-colors"
                    >
                      <Phone className="h-3 w-3 mr-2" />
                      {office.phone}
                    </a>
                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center hover:text-accent-gold transition-colors"
                    >
                      <Mail className="h-3 w-3 mr-2" />
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-xs text-white/60">
              © {currentYear} Mind´Up Consulting. Alle Rechte vorbehalten. TRIAX® ist eine eingetragene Marke.
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-accent-gold" />
                <span className="text-xs text-white/60">Verfügbare Sprachen:</span>
              </div>
              <div className="flex items-center space-x-3">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    className="text-xs text-white/60 hover:text-accent-gold transition-colors"
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-white/60">
              <a href="#privacy" className="hover:text-accent-gold transition-colors">
                Datenschutz
              </a>
              <a href="#impress" className="hover:text-accent-gold transition-colors">
                Impressum
              </a>
              <a href="#terms" className="hover:text-accent-gold transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;