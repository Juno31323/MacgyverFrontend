import { useState } from 'react';
import { calculateChildbearingP } from '../utils/childbearingPeriod';

export default function CalcChildbearing() {
    const [open, setOpen] = useState(false);
    const [lastMenstrual, setLastMenstrual] = useState('');
    const [menstrualCycle, setMenstrualCycle] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
            const childbearingPeriod = calculateChildbearingP(menstrualCycle, lastMenstrual);
            setResult(childbearingPeriod);
    };

    return (
        <>
        <Helmet>
          <title>가임기 계산기 - 맥가이버 계산기</title>
          <meta name="description" content= "마지막 생리일과 생리주기를 입력하면 가임기를 알려드립니다. 정확하고 간단한 가임기 계산기!" />
          <meta name="keywords" content= "가임기,배란일,생리주기,가임기계산기,임신확률" />
          <meta property="og:title" content="가임기 계산기 - 맥가이버 계산기" />
          <meta property="og:description" content="마지막 생리일과 생리주기를 입력하면 가임기를 계산해 드립니다." />
        </Helmet>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2">가임기 계산기</h3>
            <p className="text-gray-600">마지막 생리, 생리주기 입력</p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4">가임기 계산기</h2>
              
              <label className="block text-sm font-medium text-gray-700 mb-1">
                마지막 생리일
              </label>
              <input
                type="date"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setLastMenstrual(e.target.value)}
              />
              <input
                type="number"
                placeholder="생리주기 (day)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setMenstrualCycle(e.target.value)}
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