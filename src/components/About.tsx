import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import pharmacistImage from '@/assets/pharmacist.jpg';

const highlights = [
  'Equipe de farmacêuticos especializados',
  'Atendimento humanizado e personalizado',
  'Medicamentos com procedência garantida',
  'Preços justos e condições especiais',
  'Ambiente limpo e organizado',
  'Compromisso com sua saúde',
];

export const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <img
              src={pharmacistImage}
              alt="Nossa equipe"
              className="relative w-full rounded-3xl shadow-large object-cover aspect-[3/4]"
            />
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-card-hover"
            >
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-primary">+15.000</p>
                <p className="text-muted-foreground mt-1">Clientes atendidos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Sobre Nós
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mais de 20 anos cuidando da sua{' '}
                <span className="text-gradient">saúde</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Farmácia Todinha nasceu do sonho de oferecer um atendimento 
                farmacêutico de qualidade, com preços justos e um ambiente acolhedor. 
                Desde então, nos tornamos referência na região, sempre priorizando 
                o bem-estar dos nossos clientes.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-primary-foreground font-semibold text-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">+1.000 avaliações 5 estrelas</p>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
