import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import deliveryImage from '@/assets/delivery.jpg';

const deliveryFeatures = [
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Receba seus medicamentos em até 2 horas',
  },
  {
    icon: Clock,
    title: 'Horário Flexível',
    description: 'Entregas das 7h às 22h, todos os dias',
  },
  {
    icon: MapPin,
    title: 'Ampla Cobertura',
    description: 'Atendemos toda a região central',
  },
];

export const Delivery = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 Delivery Express
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Receba seus medicamentos sem sair de casa
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Contamos com uma equipe dedicada para levar seus medicamentos 
                até você com rapidez e segurança. É só ligar ou enviar uma mensagem!
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {deliveryFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur p-4 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                    <p className="text-primary-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              >
                <Phone className="mr-2 w-5 h-5" />
                (00) 0000-0000
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-white/30 text-primary-foreground hover:bg-white/10"
              >
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={deliveryImage}
                alt="Delivery Farmácia Todinha"
                className="w-full rounded-3xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-white text-primary p-4 rounded-2xl shadow-large"
              >
                <p className="font-display font-bold text-2xl">GRÁTIS</p>
                <p className="text-sm text-muted-foreground">Acima de R$ 50</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
