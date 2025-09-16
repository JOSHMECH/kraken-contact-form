import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import krakenHero from '@/assets/kraken-hero.jpg';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-background relative">
          {/* Hero Background */}
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${krakenHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80" />
          
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            
            <main className="flex-1 container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 animate-pulse-glow">
                    KRAKEN SECURITY
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Advanced cybersecurity solutions to protect your digital assets from emerging threats
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 kraken-gradient rounded-full animate-pulse-glow"></div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="flex justify-center">
                  <ContactForm />
                </div>
              </div>
            </main>
            
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
