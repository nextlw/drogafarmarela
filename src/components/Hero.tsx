import { motion } from 'framer-motion';
import { Clock, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import frenteLoja from '@/assets/frente-loja.webp';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5514991864546&text=Ol%C3%A1%2C+cheguei+atrav%C3%A9s+do+site+e+gostaria+de+fazer+um+pedido.&type=phone_number&app_absent=0";

const features = [
  { icon: ShieldCheck, text: 'Produtos Originais' },
  { icon: Clock, text: 'Entrega Expressa' },
  { icon: Truck, text: 'Delivery Rápido' },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                Delivery rápido em toda a região
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Seu remédio{' '}
              <span className="text-gradient">sem sair de casa</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Atendemos via WhatsApp com entrega expressa em toda a região.
            </p>

            {/* Horário de Funcionamento */}
            <div className="bg-secondary/60 p-4 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Horário de Funcionamento</span>
              </div>
              <p className="text-muted-foreground">Segunda à sexta: 08:00h às 19:00h</p>
              <p className="text-muted-foreground">Sábado: 08:00h às 18:00h</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="btn-whatsapp text-lg px-8 py-6 group">
                  <WhatsAppIcon className="mr-2 w-5 h-5" />
                  Peça pelo WhatsApp
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <img
                src={frenteLoja}
                alt="Drogarias Farmarela - Fachada da Loja"
                className="relative w-full rounded-3xl shadow-large object-cover aspect-[4/3]"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Delivery Rápido</p>
                    <p className="text-sm text-muted-foreground">Entrega expressa</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};