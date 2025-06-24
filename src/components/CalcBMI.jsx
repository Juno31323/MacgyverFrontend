import { useState } from 'react';
import { calculateBMI } from '../utils/BMI';
import { Helmet } from 'react-helmet';
import { saveHistory } from '../utils/history';

export default function CalcBMI({ activeCal, setActiveCal }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const bmi = calculateBMI(weight, height);
    setResult(bmi);
  };

  return (
    <>
      <Helmet>
        <title>BMI 계산기 - 맥가이버 계산기</title>
        <meta name="description" content="키와 몸무게로 본인의 BMI를 계산해보세요." />
        <meta name="keywords" content="BMI, 정상체중, 키, 몸무게" />
        <meta property="og:title" content="BMI 계산기 - 맥가이버 계산기" />
        <meta property="og:description" content="키와 몸무게로 BMI를 계산해보세요." />
      </Helmet>

      {/* 카드 클릭 → 모달 열기 */}
      <div
        onClick={() => {
          saveHistory({ title: 'BMI 계산기', calValue: 'calBMI' });
          setActiveCal('calBMI');
        }}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
        <h3 className="text-lg font-semibold mb-2">BMI 계산기</h3>
        <p className="text-gray-600">키, 몸무게 입력</p>
      </div>

      {/* 모달 */}
      {activeCal === 'calBMI' && (
        <div
          id="calBMIModal"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setActiveCal('')} // 모달 닫기
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">BMI 계산기</h2>
            <input
              type="number"
              placeholder="키 (cm)"
              className="w-full mb-2 p-2 border rounded"
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="몸무게 (kg)"
              className="w-full mb-2 p-2 border rounded"
              onChange={(e) => setWeight(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded"
              id="calBMI"
              onClick={calculate}
            >
              계산
            </button>
            {result && (
              <p className="mt-4 text-center text-blue-700 font-bold">BMI: {result}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
