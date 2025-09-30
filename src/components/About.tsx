import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, MapPin, Star } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Anos de Experiência",
      description: "Década dedicada ao cuidado da saúde mental"
    },
    {
      icon: Star,
      number: "500+",
      label: "Pacientes Atendidos",
      description: "Vidas transformadas através da terapia"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Suporte Emergencial",
      description: "Disponibilidade para casos urgentes"
    },
    {
      icon: MapPin,
      number: "3",
      label: "Unidades",
      description: "Localizações estratégicas na cidade"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">
                Sobre a Aprimore Comportamental
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos uma clínica especializada em psicologia e terapia comportamental, 
                comprometida em oferecer cuidado de qualidade para sua saúde mental.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-clinic-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Abordagem Humanizada</h3>
                  <p className="text-gray-600">
                    Acreditamos que cada pessoa é única e merece um atendimento personalizado, 
                    respeitando sua individualidade e ritmo de desenvolvimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-clinic-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Métodos Baseados em Evidência</h3>
                  <p className="text-gray-600">
                    Utilizamos técnicas e abordagens terapêuticas comprovadas cientificamente, 
                    sempre atualizadas com as melhores práticas da psicologia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-clinic-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Ambiente Acolhedor</h3>
                  <p className="text-gray-600">
                    Nosso espaço foi pensado para proporcionar conforto e segurança, 
                    criando um ambiente propício para o processo terapêutico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-clinic-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-clinic-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-clinic-primary">{stat.number}</div>
                      <div className="font-semibold text-gray-800 text-sm">{stat.label}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.description}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white p-8 shadow-xl border-0">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-clinic-primary rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Nossa Missão</h3>
                    <p className="text-clinic-primary font-semibold">Transformar vidas através da psicologia</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Promover o bem-estar mental e emocional de nossos pacientes através de 
                  atendimento psicológico de qualidade, baseado em evidências científicas 
                  e realizado com ética, respeito e humanização.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}