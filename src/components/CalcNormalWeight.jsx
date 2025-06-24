import { useState } from 'react';
import {calculateNormalWeight } from '../utils/normalWeight';
import { Helmet } from 'react-helmet';
import { saveHistory } from '../utils/history';


export default function CalcNormalWeight({ activeCal, setActiveCal }) {
    const [open, setOpen] = useState(false);
    const [ weight, setWeight ] = useState('');
    const [result, setResult] = useState(null);


    const calculate = () => {
            const normalWeight = calculateNormalWeight(weight);
            setResult(normalWeight);
    };

    return (
        <>
        <Helmet>
          <title>정상 체중 계산기 - 맥가이버 계산기</title>
          <meta name="description" content= "키를 입력하면 정상 체중을 계산해 드립니다." />
          <meta name="keywords" content= "키, 몸무게, 정상체중, 다이어트" />
          <meta property="og:title" content="정상 체중 계산기 - 맥가이버 계산기" />
          <meta property="og:description" content="키를 입력하면 정상 체중을 계산해 드립니다." />
        </Helmet>
        <div 
        onClick={() => {
          saveHistory({ title: '정상 체중 계산기', calValue: 'calNormalWeight' });
          setActiveCal('calNormalWeight');

        }}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 정상 체중 계산기 </h3>
            <p className="text-gray-600"> 키(cm)입력</p>
        </div>
        {activeCal === 'calNormalWeight' &&(
            <div id='calNormalWeight' className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button 
              onClick={() => setActiveCal('')} // 모달 닫기
              className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 정상 체중 계산기 </h2>
            {/* 체중입력 */}
              <input
                type="number"
                placeholder="키(cm)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setWeight(e.target.value)}
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