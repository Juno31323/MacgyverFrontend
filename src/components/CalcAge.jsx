import { useState } from 'react';
import { calculateAge } from '../utils/age';
import { Helmet } from 'react-helmet';

export default function CalcAge() {
    const [open, setOpen] = useState(false);
    const [birth, setBirth ] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
            const CalcAge= calculateAge(birth);
            setResult(CalcAge);
    };

    return (
        <>
        <Helmet>
          <title>나이 계산기 - 맥가이버 계산기</title>
          <meta name="description" content="생년월일로 만 나이, 세는 나이, 연 나이를 계산해보세요. 정확한 나이 계산기입니다." />
          <meta name="keywords" content="나이계산기,만나이계산,세는나이,연나이,생년월일" />
          <meta property="og:title" content="나이 계산기 - 맥가이버 계산기" />
          <meta property="og:description" content="생년월일로 다양한 나이를 계산해보세요." />
        </Helmet>
        
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 만 나이 계산기 </h3>
            <p className="text-gray-600"> 생년월일 입력 </p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 만 나이 계산기 </h2>
              
              <label className="block text-sm font-medium text-gray-700 mb-1">
                생년월일
              </label>
              <input
                type="date"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setBirth(e.target.value)}
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