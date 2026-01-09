import { motion } from 'framer-motion';
import { 
  Pill, 
  HeartPulse, 
  Stethoscope, 
  Syringe, 
  Baby, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    icon: Pill,
    title: 'Medicamentos',
    description: 'Ampla variedade de medicamentos com qualidade garantida e preços acessíveis.',
  },
  {
    icon: HeartPulse,
    title: 'Aferição de Pressão',
    description: 'Serviço gratuito de aferição de pressão arterial com profissionais capacitados.',
  },
  {
    icon: Stethoscope,
    title: 'Orientação Farmacêutica',
    description: 'Profissionais prontos para tirar suas dúvidas sobre medicamentos.',
  },
  {
    icon: Syringe,
    title: 'Aplicação de Injetáveis',
    description: 'Aplicação segura de injeções por profissionais habilitados.',
  },
  {
    icon: Baby,
    title: 'Linha Infantil',
    description: 'Produtos especiais para o cuidado com bebês e crianças.',
  },
  {
    icon: Sparkles,
    title: 'Dermocosméticos',
    description: 'Linha completa de produtos de beleza e cuidados com a pele.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

export const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo para sua <span className="text-gradient">saúde e bem-estar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma variedade de serviços para cuidar de você e sua família com todo carinho.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="pharmacy-card group cursor-pointer"
            >
              <div className="icon-container mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
