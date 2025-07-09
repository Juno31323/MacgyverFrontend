import { useState } from 'react';
import { carpoor as calculateCarpoor } from '../utils/carpoor';
import { Helmet } from 'react-helmet';
import CarSlider from './CarSlider';
import CalcLotto from './CalcLotto';
import { saveHistory } from '../utils/history'; // DOM용

export default function CalCarpoor({ activeCal, setActiveCal }) {
  const [salary, setSalary] = useState('');
  const [model, setModel] = useState('');
  const [country, setCountry] = useState('');
  const [result, setResult] = useState(null);
  const [lottoTrigger, setLottoTrigger] = useState(false);


  // 계산 버튼 클릭 시 실행
  const calculate = async (e) => {
    const res = await calculateCarpoor(salary, model, country);
    
    if (!country) {
      alert("국가를 선택해주세요.");
      return;
    }
    if (!salary || Number(salary) <= 0) {
      alert("연봉을 올바르게 입력해주세요.");
      return;
    }

    setResult(res);
    saveHistory({ title: '카푸어 계산기', calValue: 'calCarpoor' });
  }

    // 상태 초기화 + 모달 닫기
  const handleClose = () => {
    setActiveCal('');
    setModel('');
    setCountry('');
    setResult(null);

  };

  // 카푸어에서 로또 열기기
    const handleOpenLotto = () => {
    setLottoTrigger(prev => !prev);
  };


  return (
    <>
      <Helmet>
        <title>카푸어 계산기 - 맥가이버 계산기</title>
        <meta name="description" content="내 연봉으로 어디까지 살 수 있을까?" />
        <meta name="keywords" content="카푸어, 연봉, 국산, 외제, 모델" />
        <meta property="og:title" content="카푸어계산기 - 맥가이버 계산기" />
        <meta property="og:description" content="내 연봉으로 어디까지 살 수 있을까?" />
      </Helmet>

      <div
        onClick={() => {
          
          setActiveCal('calCarpoor');

        }}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
        <h3 className="text-lg font-semibold mb-2" id="calCarpoor">카푸어 계산기</h3>
        <p className="text-gray-600">어디까지 가능할까?</p>
      </div>

      {activeCal === 'calCarpoor' && (
        <div id="calCarpoorModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button 
            onClick={handleClose} // 모달 닫기
            className="absolute top-3 right-3 text-gray-500">✕</button>
            <h2 className="text-lg font-semibold mb-2">카푸어 계산기</h2>

            <select onChange={e => setCountry(e.target.value)} className="w-full mb-2 p-2 border rounded">
              <option value="">--국가를 선택해주세요--</option>
              <option value="koreaCar">국산차</option>
              <option value="foreignCar">외제차</option>
            </select>

            <div className="slide-wrapper">
              <CarSlider country={country} onSelectModel={(modelName) => setModel(modelName)} />
            </div>   

            <input
              type="number"
              className="w-full mb-2 p-2 border rounded"
              onChange={e => setSalary(e.target.value)}
            />

            <button
              className="w-full bg-blue-600 text-white p-2 rounded"
              id="calCarpoor" // id는 history용
              onClick={calculate}
            >
              계산
            </button>

            {result && <p className="mt-4 text-center text-blue-700 font-bold">{result}</p>}

            {result === '아래를 확인하세요🔽' && (
              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  // 기존 모달 닫기
                  setActiveCal('');

                  //로또 모달 열기
                    handleOpenLotto();
              }}
              >
                로또 가즈아
              </button>
            )}
          </div>
        </div>
      )}

      <CalcLotto trigger={lottoTrigger} />
    </>
  );
}

