import { useState } from 'react';
import { calculateCalorie } from '../utils/calorieConsumptionMeters';

export default function CalcCalorie() {
    const [open, setOpen] = useState(false);
    const [excersise, setExcersise] = useState('');
    const [weight, setWeight] = useState('');
    const [exerciseTime, setExerciseTime] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const calorie = calculateCalorie(weight, exerciseTime, excersise);
        setResult(calorie);
    };

    return(
        <>
        <Helmet>
          <title>소모 칼로리리 계산기 - 맥가이버 계산기</title>
          <meta name="description" content="운동 별 칼로리 소모량을 계산해 보세요" />
          <meta name="keywords" content="운동, 칼로리, 다이어트, 키, 몸무게" />
          <meta property="og:title" content="소모 칼로리 계산기 - 맥가이버 계산기" />
          <meta property="og:description" content="운동 별 칼로리 소모량을 계산해 보세요." />
        </Helmet>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2">칼로리 계산기</h3>
            <p className="text-gray-600">체중(kg), 시간(분) 입력</p>
        </div>
        {open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4">칼로리 계산기</h2>
  
              <input
                type="number"
                placeholder="몸무게 (kg)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setWeight(e.target.value)}
              />
              
              <input
                type="number"
                placeholder="운동 시간 (분)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setExerciseTime(e.target.value)}
              />

              <div className="grid grid-cols-3 gap-3 text-sm text-gray-700 mb-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="excersise"
                    value="running"
                    checked={excersise === 'running'}
                    onChange={() => setExcersise('running')}
                  />
                  달리기
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="excersise"
                    value="step"
                    checked={excersise === 'step'}
                    onChange={() => setExcersise('step')}
                  />
                  계단오르기
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="excersise"
                    value="swimming"
                    checked={excersise === 'swimming'}
                    onChange={() => setExcersise('swimming')}
                  />
                  수영
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="excersise"
                    value="cycle"
                    checked={excersise === 'cycle'}
                    onChange={() => setExcersise('cycle')}
                  />
                  자전거
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="excersise"
                    value="jumping"
                    checked={excersise === 'jumping'}
                    onChange={() => setExcersise('jumping')}
                  />
                  줄넘기
                </label>
              </div>
  
              <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
                계산
              </button>
  
              {result && (
                <p className="mt-4 text-center text-blue-700 font-bold">
                  Calorie: {result} kcal
                </p>
              )}
            </div>
          </div>
        )}
        </>
    );
}