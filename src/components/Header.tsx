import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import logoFarmarela from '@/assets/logo-farmarela.png';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Contato', href: '#contato' },
];

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5514991864546&text=Ol%C3%A1%2C+cheguei+atrav%C3%A9s+do+site+e+gostaria+de+fazer+um+pedido.&type=phone_number&app_absent=0";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block overflow-x-hidden">
        <div className="container-custom flex flex-wrap justify-between items-center text-sm gap-4">
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
            <a href="tel:+5514991864546" className="flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>(14) 99186-4546</span>
            </a>
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Rua Romeu Massinatori, 140 - Marília/SP</span>
            </div>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="hidden lg:inline">Seg a Sex: 08h às 19h | Sáb: 08h às 18h</span>
            <span className="lg:hidden">Seg-Sex: 08h-19h | Sáb: 08h-18h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 overflow-x-hidden ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-lg shadow-medium' 
            : 'bg-background'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <motion.a 
              href="#inicio"
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={logoFarmarela} 
                alt="Drogarias Farmarela" 
                className="h-10 sm:h-12 md:h-14 py-2 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors link-underline py-2 whitespace-nowrap"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="btn-whatsapp text-sm xl:text-base px-4 xl:px-6">
                  <WhatsAppIcon className="mr-2 w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Peça pelo WhatsApp</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-whatsapp mt-4 w-full">
                    <WhatsAppIcon className="mr-2 w-5 h-5" />
                    Peça pelo WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};