import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5514991864546&text=Ol%C3%A1%2C+cheguei+atrav%C3%A9s+do+site+e+gostaria+de+fazer+um+pedido.&type=phone_number&app_absent=0";

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Rua Romeu Massinatori, 140',
    subContent: 'Hípica Paulista, Marília - SP, 17522-780',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '(14) 99186-4546',
    subContent: 'WhatsApp disponível',
    link: 'tel:+5514991864546',
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    content: 'Seg a Sex: 08h às 19h',
    subContent: 'Sáb: 08h às 18h',
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-muted/30 overflow-x-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 w-full min-w-0"
          >
            <div>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Contato
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Entre em <span className="text-gradient">contato</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Estamos sempre prontos para atender você. Entre em contato 
                conosco através dos canais abaixo.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 w-full">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-4 sm:p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all w-full"
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-start gap-3 sm:gap-4 group">
                      <div className="icon-container w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform flex-shrink-0">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium text-sm sm:text-base break-words">{info.content}</p>
                        {info.subContent && (
                          <p className="text-muted-foreground text-xs sm:text-sm break-words">{info.subContent}</p>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="icon-container w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base break-words">{info.content}</p>
                        {info.subContent && (
                          <p className="text-muted-foreground text-xs sm:text-sm break-words">{info.subContent}</p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="btn-whatsapp text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 w-full">
                <WhatsAppIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">Fale Conosco pelo WhatsApp</span>
              </Button>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-large h-[400px] lg:h-full min-h-[400px] w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.836726853853!2d-49.97063662393756!3d-22.23453037970143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd5c2ce8aaaab%3A0x5e5e5e5e5e5e5e5e!2sR.%20Romeu%20Massinatori%2C%20140%20-%20H%C3%ADpica%20Paulista%2C%20Mar%C3%ADlia%20-%20SP%2C%2017522-780!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Drogarias Farmarela"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};