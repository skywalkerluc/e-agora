import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Situation from './pages/Situation';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryId/:situationId" element={<Situation />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
