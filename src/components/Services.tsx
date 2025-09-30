import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, Baby, Heart, Briefcase, Smile } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Terapia Cognitivo-Comportamental",
      description: "Abordagem focada em identificar e modificar padrões de pensamento e comportamento que causam sofrimento.",
      features: ["Ansiedade", "Depressão", "Fobias", "TOC"]
    },
    {
      icon: Users,
      title: "Terapia de Grupo",
      description: "Sessões em grupo para trabalhar questões comuns e desenvolver habilidades sociais em ambiente seguro.",
      features: ["Habilidades sociais", "Autoestima", "Relacionamentos", "Comunicação"]
    },
    {
      icon: Baby,
      title: "Psicologia Infantil",
      description: "Atendimento especializado para crianças e adolescentes com abordagem lúdica e adequada à idade.",
      features: ["Desenvolvimento", "Comportamento", "Aprendizagem", "Família"]
    },
    {
      icon: Heart,
      title: "Terapia de Casal",
      description: "Trabalho focado em melhorar a comunicação e resolver conflitos no relacionamento.",
      features: ["Comunicação", "Conflitos", "Intimidade", "Planejamento"]
    },
    {
      icon: Briefcase,
      title: "Psicologia Organizacional",
      description: "Consultoria e atendimento para questões relacionadas ao ambiente de trabalho e carreira.",
      features: ["Estresse", "Burnout", "Liderança", "Equipes"]
    },
    {
      icon: Smile,
      title: "Desenvolvimento Pessoal",
      description: "Trabalho focado no autoconhecimento e desenvolvimento de habilidades para uma vida mais plena.",
      features: ["Autoestima", "Objetivos", "Mindfulness", "Bem-estar"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços especializados em psicologia e terapia comportamental, 
            adaptados às suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-clinic-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-clinic-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-clinic-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-clinic-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-clinic-primary/10 text-clinic-primary text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-clinic-primary/10 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para uma consulta personalizada. 
              Estamos aqui para ajudar você a encontrar o melhor caminho para seu bem-estar.
            </p>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-clinic-primary hover:bg-clinic-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}