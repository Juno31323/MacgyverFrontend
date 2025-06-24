// components/LottoModal.jsx
import { useState } from 'react';
import { generateLotto as calculateLotto } from '../utils/lotto';

export default function LottoModal({ open, onClose }) {
  const [result, setResult] = useState(null);

  const calculate = () => {
    const lotto = calculateLotto();
    setResult(lotto);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500">✕</button>
        <h2 className="text-xl font-semibold mb-4">로또번호 추출</h2>
        <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
          계산
        </button>
        {result && (
          <p className="mt-4 text-center text-blue-700 font-bold">로또 번호: {result}</p>
        )}
      </div>
    </div>
  );
}
