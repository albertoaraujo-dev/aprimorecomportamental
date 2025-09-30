import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@aprimorecomportamental.com.br",
      action: "mailto:contato@aprimorecomportamental.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Centro\nSão Paulo - SP, 01234-567",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h\nSábados: 8h às 12h",
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco para agendar uma consulta 
            ou esclarecer suas dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-clinic-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-clinic-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                          <div className="text-gray-600 whitespace-pre-line">{info.content}</div>
                          {info.action && (
                            <a
                              href={info.action}
                              target={info.action.startsWith('http') ? '_blank' : undefined}
                              rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-block mt-2 text-clinic-primary hover:text-clinic-dark font-semibold transition-colors"
                            >
                              {info.action.startsWith('tel:') ? 'Ligar agora' : 
                               info.action.startsWith('mailto:') ? 'Enviar e-mail' : 
                               'Ver no mapa'}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Siga-nos nas Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-clinic-primary/10 rounded-xl flex items-center justify-center hover:bg-clinic-primary hover:text-white transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-clinic-primary group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-clinic-primary/10 rounded-xl flex items-center justify-center hover:bg-clinic-primary hover:text-white transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-clinic-primary group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-clinic-primary/10 rounded-xl flex items-center justify-center hover:bg-clinic-primary hover:text-white transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-clinic-primary group-hover:text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome *
                      </label>
                      <Input 
                        required
                        placeholder="Seu nome completo"
                        className="border-gray-300 focus:border-clinic-primary focus:ring-clinic-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <Input 
                        required
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="border-gray-300 focus:border-clinic-primary focus:ring-clinic-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input 
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="border-gray-300 focus:border-clinic-primary focus:ring-clinic-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Assunto
                    </label>
                    <Input 
                      placeholder="Assunto da sua mensagem"
                      className="border-gray-300 focus:border-clinic-primary focus:ring-clinic-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      required
                      placeholder="Conte-nos como podemos ajudar você..."
                      rows={5}
                      className="border-gray-300 focus:border-clinic-primary focus:ring-clinic-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-clinic-primary hover:bg-clinic-dark text-white py-3 text-lg font-semibold"
                  >
                    Enviar Mensagem
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Campos obrigatórios. Responderemos em até 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-clinic-primary to-clinic-dark text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda Urgente?</h3>
              <p className="text-lg mb-6 opacity-90">
                Se você está passando por uma crise emocional ou pensamentos de autolesão, 
                procure ajuda imediatamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-clinic-primary hover:bg-gray-100"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  CVV: 188 (24h)
                </Button>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-clinic-primary hover:bg-gray-100"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  SAMU: 192
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}