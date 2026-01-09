import { motion } from 'framer-motion';
import { ArrowRight, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import medicinesImage from '@/assets/medicines.jpg';

const categories = [
  { name: 'Medicamentos', count: '500+' },
  { name: 'Vitaminas', count: '150+' },
  { name: 'Dermocosméticos', count: '200+' },
  { name: 'Higiene', count: '300+' },
];

const featuredProducts = [
  {
    name: 'Vitamina C 1000mg',
    category: 'Vitaminas',
    price: 'R$ 24,90',
    originalPrice: 'R$ 32,90',
    discount: '24% OFF',
    rating: 4.8,
  },
  {
    name: 'Protetor Solar FPS 50',
    category: 'Dermocosméticos',
    price: 'R$ 49,90',
    originalPrice: 'R$ 65,00',
    discount: '23% OFF',
    rating: 4.9,
  },
  {
    name: 'Dipirona Sódica 500mg',
    category: 'Medicamentos',
    price: 'R$ 8,90',
    originalPrice: null,
    discount: null,
    rating: 4.7,
  },
];

export const Products = () => {
  return (
    <section id="produtos" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nossos Produtos
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tudo que você precisa em um{' '}
                <span className="text-gradient">só lugar</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Contamos com um estoque completo de medicamentos, vitaminas, 
                produtos de higiene e beleza. Sempre com os melhores preços e promoções.
              </p>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/50 p-4 rounded-2xl hover:bg-secondary transition-colors cursor-pointer group"
                >
                  <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{category.count} produtos</p>
                </motion.div>
              ))}
            </div>

            <Button className="btn-gradient group">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Featured Products */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden mb-6">
              <img
                src={medicinesImage}
                alt="Produtos"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <p className="text-sm font-medium opacity-80">Ofertas Especiais</p>
                <p className="font-display text-2xl font-bold">Até 40% OFF</p>
              </div>
            </div>

            {/* Product Cards */}
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pharmacy-card flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Tag className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <p className="font-display font-bold text-primary">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-xs text-muted-foreground line-through">{product.originalPrice}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
