import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCalculators from './pages/MyCalculators';
import CarSelector from './components/CarSelector';
import OAuthCallback from './components/OAuthCallback';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycalculators" element={<MyCalculators />} />
        <Route
          path="/carselector"
          element={
            <div className="p-8">
              <h1 className="text-2xl font-bold mb-4">카푸어 계산기</h1>
              <CarSelector />
            </div>
          }
        />
        <Route path="/oauth" element={<OAuthCallback />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;