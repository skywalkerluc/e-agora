import { useState } from 'react';
import { Search } from 'lucide-react';
import { useSituations } from '../hooks/useSituations';
import Input from '../components/ui/Input';
import CategoryList from '../components/domain/CategoryList';
import SearchResults from '../components/domain/SearchResults';
import { useDebounce } from '../hooks/useDebounce';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 200);
  const { categories, allCategories } = useSituations(debouncedSearch);

  const hasSearch = debouncedSearch.trim().length > 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
      <header className="mb-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-1">E agora?</h1>
        <p className="text-sm text-gray-500 mb-4">Consulte situações comuns do bebê e saiba quando agir</p>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            id="search"
            type="text"
            placeholder="Buscar situações..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
            aria-label="Buscar situações"
          />
        </div>
      </header>

      <main>
        {hasSearch ? (
          <SearchResults categories={categories} />
        ) : (
          <CategoryList categories={allCategories} />
        )}
      </main>
    </div>
  );
}

export default Home;
