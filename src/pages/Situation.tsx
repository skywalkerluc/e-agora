import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';
import { useSituation } from '../hooks/useSituations';
import { UrgencyLevel } from '../types';
import situationsData from '../assets/data/situations.json';

const getUrgencyStyles = (urgencyLevel?: UrgencyLevel) => {
  switch (urgencyLevel) {
    case 'emergency':
      return {
        bg: 'bg-red-50',
        border: 'border-red-500',
        iconColor: 'text-red-600',
        headingColor: 'text-red-800',
        textColor: 'text-red-900',
      };
    case 'watch':
      return {
        bg: 'bg-amber-50',
        border: 'border-amber-500',
        iconColor: 'text-amber-600',
        headingColor: 'text-amber-800',
        textColor: 'text-amber-900',
      };
    default:
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-500',
        iconColor: 'text-blue-600',
        headingColor: 'text-blue-800',
        textColor: 'text-blue-900',
      };
  }
};

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
          <div className={`${getUrgencyStyles(situation.urgency_level).bg} border-l-4 ${getUrgencyStyles(situation.urgency_level).border} p-4 rounded-r-lg`}>
            <div className="flex gap-3">
              <AlertTriangle className={`w-5 h-5 ${getUrgencyStyles(situation.urgency_level).iconColor} flex-shrink-0 mt-0.5`} />
              <div>
                <h2 className={`text-sm font-medium ${getUrgencyStyles(situation.urgency_level).headingColor} uppercase tracking-wide mb-2`}>
                  Quando procurar pediatra
                </h2>
                <p className={`text-base ${getUrgencyStyles(situation.urgency_level).textColor} leading-relaxed`}>
                  {situation.seek_doctor_if}
                </p>
              </div>
            </div>
          </div>
        </section>

        {situation.related_ids && situation.related_ids.length > 0 && (
          <section className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Ver também:</h2>
            <div className="space-y-2">
              {situation.related_ids.map((relatedId) => {
                const relatedSituation = situationsData.categories
                  .flatMap((cat) => cat.situations)
                  .find((sit) => sit.id === relatedId);

                if (!relatedSituation) return null;

                const relatedCategory = situationsData.categories.find((cat) =>
                  cat.situations.some((sit) => sit.id === relatedId)
                );

                return (
                  <button
                    key={relatedId}
                    onClick={() => navigate(`/${relatedCategory?.id}/${relatedId}`)}
                    className="block w-full text-left text-sm text-blue-600 hover:text-blue-700 transition-colors duration-150"
                  >
                    → {relatedSituation.title}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        <footer className="flex items-start gap-2 text-sm text-gray-500">
          <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" />
          {situation.source_url ? (
            <a
              href={situation.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-150 flex items-center gap-1"
            >
              {situation.source}
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <p>{situation.source}</p>
          )}
        </footer>
      </article>
    </div>
  );
}

export default Situation;
