import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('DE');

const navigationItems = [
    { label: 'Home', href: '/', subItems: [] },
    { label: 'Über uns', href: '/identity', subItems: [] },
    { label: 'TRIAX', href: '/triax', subItems: [] },
    { 
      label: 'Services', 
      href: '/services',
      subItems: [
        'Change Management',
        'Business Coaching', 
        'Interkulturelle Intelligenz',
        'Scrum4Sales',
        'Expansion Management'
      ]
    },
    { label: 'SOS', href: '/sos', subItems: [] },
    { label: 'Signature Programme', href: '/signature', subItems: [] }
  ];

  const languages = ['DE', 'EN', 'FR', 'AR'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-elegant backdrop-saturate-150">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
          <a href="/" className="text-3xl font-cormorant font-bold text-primary tracking-wide hover:text-accent-gold transition-all duration-300">
            GloBridge
          </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="text-base font-medium text-foreground/90 hover:text-accent-gold transition-all duration-500 flex items-center space-x-1 py-3 px-4 border-b-2 border-transparent hover:border-accent-gold/60 hover:bg-white/5 rounded-t-lg backdrop-blur-sm"
                >
                  <span>{item.label}</span>
                  {item.subItems.length > 0 && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.subItems.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6 space-y-3">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-muted-foreground hover:text-accent-gold transition-all duration-200 py-2 px-3 rounded-lg hover:bg-accent-cream/50"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-base font-medium text-foreground hover:text-accent-gold transition-all duration-300 py-2 px-4 rounded-lg hover:bg-accent-cream/50">
                <Globe className="h-5 w-5" />
                <span>{currentLanguage}</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-40 bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-3 space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCurrentLanguage(lang)}
                      className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                        currentLanguage === lang 
                          ? 'bg-accent-gold/20 text-accent-gold font-medium' 
                          : 'text-muted-foreground hover:text-accent-gold hover:bg-accent-cream/50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <Button className="bg-accent-gold hover:bg-accent-peru text-white px-6 py-3 rounded-xl font-medium text-base shadow-lg hover:shadow-elegant transition-all duration-300 hover:scale-105">
              Gespräch beginnen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <a
                    href={item.href}
                    className="block text-base font-medium text-foreground hover:text-accent-gold transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.subItems.length > 0 && (
                    <div className="ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCurrentLanguage(lang)}
                        className={`text-sm font-medium transition-colors ${
                          currentLanguage === lang 
                            ? 'text-accent-gold' 
                            : 'text-muted-foreground hover:text-accent-gold'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                  <Button className="btn-accent">
                    Gespräch beginnen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;