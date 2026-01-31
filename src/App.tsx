import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Situation from './pages/Situation';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId/:situationId" element={<Situation />} />
      </Routes>
    </div>
  );
}

export default App;
