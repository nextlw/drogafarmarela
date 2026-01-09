import { motion } from 'framer-motion';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import logoFarmarela from '@/assets/logo-farmarela.png';

const quickLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img 
              src={logoFarmarela} 
              alt="Drogarias Farmarela" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-background/70 leading-relaxed">
              Há mais de 30 anos cuidando da saúde e bem-estar da sua família 
              com qualidade e carinho.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6">Localização</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Rua Romeu Massinatori, 140<br />
                  Hípica Paulista, Marília - SP<br />
                  CEP: 17522-780
                </span>
              </div>
              <a 
                href="tel:+5514991864546" 
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(14) 99186-4546</span>
              </a>
              
              {/* Ligar Button */}
              <a
                href="tel:+5514991864546"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6">Horário</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span>08h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>08h - 18h</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary/20 rounded-xl">
              <p className="text-sm text-primary font-medium">
                🚀 Delivery disponível!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/50 text-sm text-center md:text-left">
              <p>© Copyright 2025. Todos os direitos reservados.</p>
              <p className="mt-1">Razão Social: Droga Farma de Marília LTDA</p>
              <p>CNPJ: 71.641.161/0001-02</p>
            </div>
            <p className="text-background/50 text-sm">
              Desenvolvido com ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};