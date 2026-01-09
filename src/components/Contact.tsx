import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Rua da Farmácia, 123 - Centro',
    subContent: 'CEP: 00000-000',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '(00) 0000-0000',
    subContent: 'WhatsApp: (00) 90000-0000',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'contato@farmaciatodinha.com.br',
    subContent: null,
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    content: 'Seg a Sáb: 7h às 22h',
    subContent: 'Dom: 8h às 20h',
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Contato
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Entre em <span className="text-gradient">contato</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Estamos sempre prontos para atender você. Entre em contato 
                conosco através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/50 p-5 rounded-2xl hover:bg-secondary transition-colors"
                >
                  <div className="icon-container mb-4 w-12 h-12">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                  {info.subContent && (
                    <p className="text-muted-foreground text-sm">{info.subContent}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-3xl shadow-card"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input 
                    placeholder="Seu nome" 
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input 
                    placeholder="(00) 00000-0000" 
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input 
                  type="email"
                  placeholder="seu@email.com" 
                  className="rounded-xl border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Como podemos ajudar?" 
                  className="rounded-xl border-border/50 focus:border-primary min-h-[120px]"
                />
              </div>

              <Button className="btn-gradient w-full text-lg py-6 group">
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
