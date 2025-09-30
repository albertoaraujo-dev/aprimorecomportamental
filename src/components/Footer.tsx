export default function Footer() {   
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-clinic-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h3 className="text-xl font-bold">Aprimore Comportamental</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Clínica especializada em psicologia e terapia comportamental, 
              comprometida com seu bem-estar mental.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-clinic-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-clinic-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-clinic-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-clinic-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>(11) 9999-9999</p>
              <p>contato@aprimorecomportamental.com.br</p>
              <p>Rua das Flores, 123 - Centro<br />São Paulo - SP</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Aprimore Comportamental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}