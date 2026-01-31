import { useNavigate } from 'react-router-dom';
import { Category } from '../../types';
import Card from '../ui/Card';

interface SearchResultsProps {
  categories: Category[];
}

function SearchResults({ categories }: SearchResultsProps) {
  const navigate = useNavigate();

  if (categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhuma situação encontrada.</p>
        <p className="text-sm text-gray-400 mt-2">Tente buscar por outras palavras.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.id}>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
            {category.name}
          </h2>
          <div className="space-y-2">
            {category.situations.map((situation) => (
              <Card
                key={situation.id}
                className="p-4 cursor-pointer transition-colors duration-150 hover:bg-gray-50 active:bg-gray-100"
                onClick={() => navigate(`/${category.id}/${situation.id}`)}
              >
                <h3 className="text-base font-medium text-gray-800">{situation.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{situation.normal}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
