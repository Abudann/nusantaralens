// Isi dari file: client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIAssistantPage from './pages/AIAssistantPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-assistant" element={<AIAssistantPage />} />
      </Routes>
    </Router>
  );
}

export default App;