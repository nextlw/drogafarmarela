import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-pharmacy.jpg';

const features = [
  { icon: ShieldCheck, text: 'Produtos Originais' },
  { icon: Clock, text: 'Atendimento 7 dias' },
  { icon: Truck, text: 'Entrega Rápida' },
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
                Sua saúde em primeiro lugar
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Cuidando de você com{' '}
              <span className="text-gradient">carinho e qualidade</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Na Farmácia Todinha você encontra os melhores medicamentos, 
              produtos de saúde e beleza com atendimento especializado e preços justos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient text-lg px-8 py-6 group">
                Ver Produtos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2">
                Saiba Mais
              </Button>
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
                src={heroImage}
                alt="Farmácia Todinha"
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
                    <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">+20 anos</p>
                    <p className="text-sm text-muted-foreground">de confiança</p>
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
