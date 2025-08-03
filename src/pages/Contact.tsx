import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPageHeader = () => (
  <section className="relative h-96 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=80" 
        alt="Kontakt" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-gold/20" />
    </div>

    <div className="relative z-10 container-max text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-display text-white leading-tight">
          Kontakt
        </h1>
        <p className="text-subheadline text-white/90">
          Beginnen wir dort, wo andere enden: Im echten Kontakt.
        </p>
      </div>
    </div>
  </section>
);

const ContactContent = () => {
  const offices = [
    {
      city: "Berlin",
      country: "Deutschland",
      address: "Unter den Linden 1, 10117 Berlin",
      phone: "+49 (0) 30 123 456 78",
      email: "berlin@globridge.com"
    },
    {
      city: "Paris", 
      country: "France",
      address: "Avenue des Champs-Élysées 1, 75008 Paris",
      phone: "+33 (0) 1 42 96 12 34",
      email: "paris@globridge.com"
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Sheikh Zayed Road, Business Bay, Dubai",
      phone: "+971 (0) 4 123 4567",
      email: "dubai@globridge.com"
    },
    {
      city: "London",
      country: "United Kingdom", 
      address: "1 Canary Wharf, London E14 5AB",
      phone: "+44 (0) 20 7946 0958",
      email: "london@globridge.com"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-headline text-primary mb-8">
              Transformation beginnen
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Vorname</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Nachname</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">E-Mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Unternehmen</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Herausforderung</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none">
                  <option>Interkulturelle Transformation</option>
                  <option>Leadership Development</option>
                  <option>Change Management</option>
                  <option>Market Entry</option>
                  <option>Organisationsentwicklung</option>
                  <option>Krisenintervention</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Nachricht</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none resize-none"
                  placeholder="Beschreiben Sie Ihre Transformationsherausforderung..."
                />
              </div>
              
              <Button className="btn-accent w-full">
                Gespräch vereinbaren
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-headline text-primary mb-8">
              Unsere Standorte
            </h2>
            
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-accent-cream rounded-xl p-6">
                  <h3 className="text-xl font-cormorant font-semibold text-primary mb-4">
                    {office.city}, {office.country}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent-gold" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent-gold" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent-gold" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-primary-dark rounded-xl p-6 text-white">
              <h3 className="text-lg font-cormorant font-semibold mb-4">
                Notfall-Hotline
              </h3>
              <p className="text-white/80 mb-4">
                Bei akuten Transformationskrisen erreichen Sie uns 24/7
              </p>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-gold" />
                <span className="font-medium">+49 (0) 177 SOS-GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ContactPageHeader />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;