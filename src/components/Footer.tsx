import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {t.siteName} Security. Built by{' '}
            <span className="text-gradient font-semibold">
              {t.developerCredit}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;