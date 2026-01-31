import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, BookOpen } from 'lucide-react';
import { useSituation } from '../hooks/useSituations';

function Situation() {
  const { categoryId = '', situationId = '' } = useParams<{
    categoryId: string;
    situationId: string;
  }>();
  const navigate = useNavigate();
  const { category, situation } = useSituation(categoryId, situationId);

  if (!category || !situation) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-500">Situação não encontrada.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-blue-600 hover:text-blue-700 transition-colors duration-150"
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-150 mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Voltar</span>
      </button>

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        {category.name} &gt; {situation.title}
      </nav>

      <article>
        <h1 className="text-xl font-semibold text-gray-800 mb-6">{situation.title}</h1>

        <section className="mb-6">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            O que é normal
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">{situation.normal}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            O que fazer
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">{situation.what_to_do}</p>
        </section>

        <section className="mb-6">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-medium text-amber-800 uppercase tracking-wide mb-2">
                  Quando procurar pediatra
                </h2>
                <p className="text-base text-amber-900 leading-relaxed">
                  {situation.seek_doctor_if}
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex items-start gap-2 text-sm text-gray-500">
          <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>{situation.source}</p>
        </footer>
      </article>
    </div>
  );
}

export default Situation;
