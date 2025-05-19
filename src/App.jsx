import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCalculators from './pages/MyCalculators';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-calculators" element={<MyCalculators />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;