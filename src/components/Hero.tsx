import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Transforme sua
                <span className="block text-clinic-primary">vida mental</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Oferecemos cuidado especializado em psicologia 
                e terapia comportamental para ajudar você a alcançar o bem-estar mental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-clinic-primary hover:bg-clinic-dark text-white px-8 py-4 text-lg group cursor-pointer"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-clinic-primary text-clinic-primary hover:bg-clinic-primary hover:text-white px-8 py-4 text-lg cursor-pointer"
              >
                Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-clinic-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-clinic-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">Cuidado Personalizado</h3>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-clinic-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-clinic-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">Ambiente Seguro</h3>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-clinic-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-clinic-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">Equipe Especializada</h3>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-clinic-primary/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-clinic-primary rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">Sua jornada de bem-estar começa aqui</h3>
                    <p className="text-gray-600">
                      Oferecemos um espaço acolhedor e profissional para você trabalhar 
                      suas questões emocionais e comportamentais.
                    </p>
                    <div className="flex justify-center space-x-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-clinic-primary">500+</div>
                        <div className="text-sm text-gray-600">Pacientes atendidos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-clinic-primary">10+</div>
                        <div className="text-sm text-gray-600">Anos de experiência</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}