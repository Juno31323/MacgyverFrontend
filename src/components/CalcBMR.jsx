import { useState } from 'react';
import { calculateBMR } from '../utils/BMR';
import { Helmet } from 'react-helmet';
import { saveHistory } from '../utils/history'; // DOM용

export default function CalcBMR({ activeCal, setActiveCal }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const bmr = calculateBMR(gender, height, weight, age);
    setResult(bmr);
    saveHistory({ title: 'BMR 계산기', calValue: 'calBMR' });
  };

  return (
    <>
      <Helmet>
        <title>BMR 계산기 - 맥가이버 계산기</title>
        <meta name="description" content="키와 몸무게로 본인의 BMR, 예상 기초대사량을 계산해 보세요" />
        <meta name="keywords" content="기초대사량, BMR, 키, 몸무게" />
        <meta property="og:title" content="BMR 계산기 - 맥가이버 계산기" />
        <meta property="og:description" content="키와 몸무게로 기초대사량을 계산해 보세요." />
      </Helmet>
      <div
        onClick={() =>{
          
          setActiveCal('calBMR');
        }}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
        <h3 className="text-lg font-semibold mb-2">BMR 계산기</h3>
        <p className="text-gray-600">키, 몸무게, 나이 입력</p>
      </div>

      {activeCal === 'calBMR' && (
        <div id="calBMRModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button 
            onClick={() => setActiveCal('')} // 모달 닫기
             className="absolute top-3 right-3 text-gray-500">✕</button>
            <h2 className="text-xl font-semibold mb-4">BMR 계산기</h2>

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
            <input
              type="number"
              placeholder="나이 (만)"
              className="w-full mb-2 p-2 border rounded"
              onChange={e => setAge(e.target.value)}
            />
            <div className="flex items-center gap-4 mb-2">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                남성
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                여성
              </label>
            </div>

            <button 
            className="w-full bg-blue-600 text-white p-2 rounded" 
            id="calBMR" // id는 history용
            onClick={calculate}>
              계산
            </button>

            {result && (
              <p className="mt-4 text-center text-blue-700 font-bold">
                BMR: {result} kcal/day
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}