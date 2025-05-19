import { useState } from 'react';
import { calcultaeTargetHeartRate } from '../utils/targetHeartRate';

export default function CalcHeratRate() {
    const [open, setOpen] = useState(false);
    const [age, setAge ] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
            const targetHeartRate = calcultaeTargetHeartRate(age);
            setResult(targetHeartRate);
    };

    return (
        <>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 목표 심박수 계산기 </h3>
            <p className="text-gray-600"> 나이만 입력 </p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 목표 심박수 계산기 </h2>
        
              <input
                type="number"
                placeholder="나이(만)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setAge(e.target.value)}
              />
              
              <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
                계산
              </button>
  
              {result && (
                <p className="mt-4 text-center text-blue-700 font-bold">
                  {result}
                </p>
              )}
            </div>
          </div>
        )}
        </>
    )
}