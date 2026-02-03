import { AlertCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-4 py-8 mt-12 border-t border-gray-200">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-medium text-blue-800 mb-1">
              Aviso importante
            </h2>
            <p className="text-sm text-blue-900 leading-relaxed">
              Este aplicativo é apenas informativo e educacional. As informações aqui
              apresentadas <strong>não substituem consulta, diagnóstico ou orientação médica</strong>.
              Sempre consulte um pediatra para avaliação adequada da saúde do seu bebê.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>
          Feito com ❤️ para pais de primeira viagem •{' '}
          <a
            href="https://github.com/lucasferreira/e-agora"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Source
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
