import { useState } from 'react';
import { calculateBMI } from '../utils/BMI';

export default function CalcBMI() {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const bmi = calculateBMI(weight,height);
    setResult(bmi);
  };

  return (
    <>
      <div onClick={() => setOpen(true)} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
        <h3 className="text-lg font-semibold mb-2">BMI 계산기</h3>
        <p className="text-sm text-gray-500">클릭해서 계산기 열기</p>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
            <h2 className="text-xl font-semibold mb-4">BMI 계산기</h2>
            <input
              type="number"
              placeholder="키 (cm)"
              className="w-full mb-2 p-2 border rounded"
              onChange={e => setHeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="몸무게 (kg)"
              className="w-full mb-2 p-2 border rounded"
              onChange={e => setWeight(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
              계산
            </button>
            {result && <p className="mt-4 text-center text-blue-700 font-bold">BMI: {result}</p>}
          </div>
        </div>
      )}
    </>
  );
}