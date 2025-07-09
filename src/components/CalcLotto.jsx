import { useState, useEffect } from "react";
import generateLotto from "../utils/lotto";
import { Helmet } from "react-helmet";
import { saveHistory } from '../utils/history'; // DOM용

export default function CalcLotto({trigger}) {
  const [result, setResult] = useState(null);
  // 10회 로또 돌고 있을 때, 다시 버튼 못 누르게 하려고 활성화 상태 저장
  const [isDrawing, setIsDrawing] = useState(false);

  const calculate = () => {
    const lotto = generateLotto(); // 5세트 번호 배열
    setResult(lotto);
  };

  const [open, setOpen] = useState(false);

  // 카푸어에서 모달 오픈
  useEffect(() => {
    if (trigger) {
      setOpen(true);
    }
  }, [trigger]);


  // 모달 닫히면 결과 초기화
  useEffect(() => {
    if (!open) setResult(null);
  }, [open]);

  // -----------------------------소리----------------------------- //
  // 임시로 소리
  const playBeep = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(1320, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);

    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  };

  // 목소리
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    utter.voice = voices[9]; // 목소리 고르기
    utter.lang = "ko-KR";
    utter.pitch = 0.7;
    utter.rate = 1.0;
    window.speechSynthesis.speak(utter);
  };
  // ------------------------------------------------------------- //

  // 연속 추출 핸들러
  const handleMultiDraw = async () => {
    if (isDrawing) return; // 중복 방지
    setIsDrawing(true);
    speak("화성갈꺼니까");
    for (let i = 0; i < 10; i++) {
      await new Promise((res) => setTimeout(res, 200));
      calculate();
    }
    setIsDrawing(false);
    saveHistory({ title: '로또번호 추출', calValue: 'calLotto' });
  };

  return (
    <>
      <Helmet>
        <title>로또 번호 추출기 - 맥가이버 계산기</title>
        <meta
          name="description"
          content="랜덤으로 5세트 로또 번호를 추출해드립니다."
        />
      </Helmet>

      {/* 메인 로또 카드 */}
      <div
        onClick={() => {
          
          setOpen(true);
        }}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
          🎲
        </div>
        <h3 className="text-lg font-semibold mb-2">로또 번호 추출기</h3>
        <p className="text-gray-600">눌러서 번호 생성</p>
      </div>

      {/* 모달창 */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setOpen(false)} 
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">로또번호 추출</h2>
            <button
              className="w-full bg-green-600 text-white p-2 rounded mt-2"
              onClick={handleMultiDraw}
              disabled={isDrawing}
              id="calLotto" // id는 history용
            >
              {" "}
              💥 10회 재물 추출
            </button>
            <button
              className="w-full bg-blue-600 text-white p-2 rounded mt-2"
              id="calLotto" // id는 history용
              onClick={() => {
                playBeep();
                calculate();
              }}
            >
              1회 추출
            </button>
            {result && (
              <div className="mt-4 text-center text-blue-700 font-bold space-y-2">
                {result.map((set, idx) => {
                  const firstFive = set.slice(0, 5).join(", ");
                  const lastOne = set[5];
                  return (
                    <p key={idx} className="text-left pl-2">
                      {idx + 1} 회차 : {firstFive} +{" "}
                      <span className="text-red-500">{lastOne}</span>
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
