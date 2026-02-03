import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Category } from '../../types';
import Card from '../ui/Card';

interface CategoryListProps {
  categories: Category[];
  highlight?: boolean;
}

function CategoryList({ categories, highlight = false }: CategoryListProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleSituationClick = (categoryId: string, situationId: string) => {
    navigate(`/${categoryId}/${situationId}`);
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const isExpanded = expandedCategories.has(category.id);
        const isEmergency = category.id === 'emergencia';

        return (
          <Card
            key={category.id}
            className={`p-4 ${
              isEmergency && highlight
                ? 'bg-red-50 border-red-200 border-2'
                : ''
            }`}
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className={`w-full flex items-center justify-between text-left transition-colors duration-150 ${
                isEmergency && highlight
                  ? 'hover:text-red-700'
                  : 'hover:text-blue-600'
              }`}
              aria-expanded={isExpanded}
            >
              <div>
                <h2
                  className={`text-lg font-medium ${
                    isEmergency && highlight ? 'text-red-800' : 'text-gray-800'
                  }`}
                >
                  {category.name}
                </h2>
                <p
                  className={`text-sm mt-1 ${
                    isEmergency && highlight ? 'text-red-600' : 'text-gray-500'
                  }`}
                >
                  {category.situations.length} situações
                </p>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isEmergency && highlight ? 'text-red-600' : 'text-gray-500'
                } ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {isExpanded && (
              <div className="mt-4 divide-y divide-gray-100">
                {category.situations.map((situation) => (
                  <button
                    key={situation.id}
                    onClick={() => handleSituationClick(category.id, situation.id)}
                    className={`w-full py-3 px-2 text-left text-base transition-colors duration-150 ${
                      isEmergency && highlight
                        ? 'text-red-800 hover:bg-red-100 active:bg-red-200'
                        : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    {situation.title}
                  </button>
                ))}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

export default CategoryList;
