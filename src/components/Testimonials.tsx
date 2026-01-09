import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Cliente há 5 anos',
    content: 'Atendimento excepcional! Sempre encontro o que preciso e os farmacêuticos são muito atenciosos.',
    rating: 5,
    avatar: 'MS',
  },
  {
    name: 'João Santos',
    role: 'Cliente há 3 anos',
    content: 'Melhor farmácia da região. Preços justos e entrega super rápida. Recomendo!',
    rating: 5,
    avatar: 'JS',
  },
  {
    name: 'Ana Oliveira',
    role: 'Cliente há 2 anos',
    content: 'O serviço de aferição de pressão é muito bom. Me sinto cuidada sempre que vou lá.',
    rating: 5,
    avatar: 'AO',
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pharmacy-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
