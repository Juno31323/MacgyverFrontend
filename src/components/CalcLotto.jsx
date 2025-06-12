import { useState } from 'react';
import { calculateLotto } from '../utils/lotto';

export default function CalcBMI() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const lotto = calculateLotto();
    setResult(lotto);
  };

  return (
    <>
      <Helmet>
        <title>BMI 계산기 - 맥가이버 계산기</title>
        <meta name="description" content="당첨번호가 나올지도?" />
        <meta name="keywords" content="로또, 로또번호, 추출" />
        <meta property="og:title" content="로또번호 추출 - 맥가이버 계산기" />
        <meta property="og:description" content="당첨번호가 나올지도?" />
      </Helmet>
      <div onClick={() => setOpen(true)} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
        <h3 className="text-lg font-semibold mb-2">로또번호 추출</h3>
        <p className="text-sm text-gray-500">클릭해서 계산기 열기</p>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
            <h2 className="text-xl font-semibold mb-4">로또번호 추출</h2>
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