import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Contato', href: '#contato' },
];

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
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(00) 0000-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rua da Farmácia, 123 - Centro</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Seg a Sáb: 7h às 22h | Dom: 8h às 20h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-lg shadow-medium' 
            : 'bg-background'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="#inicio"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-foreground">Farmácia</span>
                <span className="text-primary font-display font-semibold text-lg -mt-1">Todinha</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors link-underline py-2"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button className="btn-gradient">
                Fale Conosco
              </Button>
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
                <Button className="btn-gradient mt-4">
                  Fale Conosco
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
