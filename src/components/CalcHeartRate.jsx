import { useState } from 'react';
import { calcultaeTargetHeartRate } from '../utils/targetHeartRate';
import { Helmet } from 'react-helmet';
import { saveHistory } from '../utils/history';

export default function CalcHeratRate({ activeCal, setActiveCal }) {
    const [age, setAge ] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
            const targetHeartRate = calcultaeTargetHeartRate(age);
            setResult(targetHeartRate);
    };

    return (
        <>
        <Helmet>
          <title>목표 심박수 계산기 - 맥가이버 계산기</title>
          <meta name="description" content= "나이를 입력하고 나이 맞는 목표 심박수를 계산해 보세요" />
          <meta name="keywords" content= "심박수, 나이, 건강, 정상심박수수" />
          <meta property="og:title" content="목표 심박수 계산기 - 맥가이버 계산기" />
          <meta property="og:description" content="나이를 입력하면 목표 심박수를 계산해 드립니다." />
        </Helmet>
        <div 
        onClick={() => {
          saveHistory({ title: '목표 심박수 계산기', calValue: 'calHeartRate' });
          setActiveCal('calHeartRate');
        }}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 목표 심박수 계산기 </h3>
            <p className="text-gray-600"> 나이만 입력 </p>
        </div>
        {activeCal === 'calHeartRate' &&(
            <div id='calHeartRate' className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button 
              onClick={() => setActiveCal('')} // 모달 닫기
              className="absolute top-3 right-3 text-gray-500">✕</button>
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