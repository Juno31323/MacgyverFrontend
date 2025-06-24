import { useState } from 'react';
import { carpoor as calculateCarpoor } from '../utils/carpoor';
import { Helmet } from 'react-helmet';
import CarSlider from '../components/CarSlider';
import LottoModal from '../components/CalcLotto';

export default function CalCarpoor() {
  const [open, setOpen] = useState(false);
  const [salary, setSalary] = useState('');
  const [model, setModel] = useState('');
  const [country, setCountry] = useState('');
  const [result, setResult] = useState(null);
  const [showLottoModal, setShowLottoModal] = useState(false);

  const history = (title) => {
    const newItem = { t: title };
    const prev = JSON.parse(localStorage.getItem('history')) || [];
    const updated = [newItem, ...prev];
    localStorage.setItem('history', JSON.stringify(updated));
    console.log('히스토리에 추가됨', updated);
  };

  const calculate = async () => {
    const res = await calculateCarpoor(salary, model, country, history);
    setResult(res); // 백엔드로부터 받은 메시지를 저장
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

      <div onClick={() => setOpen(true)} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
        <h3 className="text-lg font-semibold mb-2">카푸어 계산기</h3>
        <p className="text-gray-600">어디까까지 가능할까?</p>
      </div>

        {/* // 모달 렌더링 */}
        {/* 이거 조건문 바꿈, 이렇게 안쓰면 UI에 로또가 2개 떠버림 */}
        {showLottoModal && (
        <LottoModal open={true} onClose={() => setShowLottoModal(false)} />
        )}

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
            <h2 className="text-lg font-semibold mb-2">카푸어 계산기</h2>

            <select onChange={e => setCountry(e.target.value)} className="w-full mb-2 p-2 border rounded">
              <option value="">--국가를 선택해주세요--</option>
              <option value="koreaCar">국산차</option>
              <option value="foreignCar">외제차</option>
            </select>

            {/* 슬라이더 컴포넌트 */}
            <div className="slide-wrapper">
              <CarSlider country={country} onSelectModel={(modelName) => setModel(modelName)} />
            </div>   
            <input
              type="number"
              className="w-full mb-2 p-2 border rounded"
              onChange={e => setSalary(e.target.value)}
            />

            <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
              계산
            </button>
            {result && <p className="mt-4 text-center text-blue-700 font-bold">{result}</p>}
            {result === '아래를 확인하세요🔽' && (
            <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => {setOpen(false);
                                setShowLottoModal(true);}}
            >
                로또 가즈아
            </button>
            )}
          </div>
        </div>
        
      )}
    </>
  );
}
