import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <img src={Logo} alt="Logotipo do Site" className='h-16'/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-600 hover:text-clinic-primary transition-colors cursor-pointer"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-600 hover:text-clinic-primary transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 hover:text-clinic-primary transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-600 hover:text-clinic-primary transition-colors cursor-pointer"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className='bg-clinic-primary hover:bg-clinic-dark text-white cursor-pointer'
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-600 hover:text-clinic-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-600 hover:text-clinic-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 hover:text-clinic-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-600 hover:text-clinic-primary transition-colors"
              >
                Contato
              </button>
              <Button>
                {/* <Phone className="w-4 h-4 mr-2" /> */}
                Agendar Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}