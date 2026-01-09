import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import loja1 from '@/assets/loja-1.webp';
import loja2 from '@/assets/loja-2.webp';
import loja3 from '@/assets/loja-3.webp';
import loja4 from '@/assets/loja-4.webp';

const images = [loja1, loja2, loja3, loja4];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-large aspect-[4/3]">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Interior da loja ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-background/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
              Nossa Estrutura
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              A farmácia que resolve,{' '}
              <span className="text-gradient">sem complicação</span>
            </h2>
            
            <p className="text-xl text-primary font-semibold">
              Entrega com agilidade, confiança e cuidado.
            </p>
            
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>
                Na Droga Farma de Marília, você encontra muito mais do que medicamentos. 
                Aqui, o nosso compromisso é com a sua saúde e bem-estar, oferecendo 
                produtos de qualidade, preços justos e um atendimento próximo e humanizado.
              </p>
              <p>
                Tudo isso com a facilidade de comprar online e receber com rapidez, 
                sem sair de casa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/50 p-4 rounded-xl text-center"
              >
                <p className="font-display text-2xl font-bold text-primary">+30</p>
                <p className="text-sm text-muted-foreground">Anos de história</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/50 p-4 rounded-xl text-center"
              >
                <p className="font-display text-2xl font-bold text-primary">1h</p>
                <p className="text-sm text-muted-foreground">Entrega rápida</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/50 p-4 rounded-xl text-center"
              >
                <p className="font-display text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Confiança</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};