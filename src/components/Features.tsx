import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import infoCard from '@/assets/info-card.webp';

const features = [
  'Atendimento rápido e humanizado',
  'Entregamos em até 1 hora na sua região',
  'Discrição e sigilo em todos os pedidos',
  'Pagamento na entrega via PIX, cartão ou dinheiro',
  'Sem taxa surpresa: você sabe o valor antes de confirmar',
];

export const Features = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Card Container */}
          <div className="bg-card rounded-3xl shadow-large overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 lg:p-12 bg-secondary/30 flex flex-col justify-center"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Por que escolher a <span className="text-gradient">Farmarela?</span>
                </h3>
                
                <div className="space-y-5">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground text-lg font-medium leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <img
                  src={infoCard}
                  alt="Interior da Drogarias Farmarela"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};