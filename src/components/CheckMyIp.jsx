import { useState } from 'react';
import { getIp } from '../utils/ipconfig';

export default function CheckMyIp() {
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState(null);

    const calculate = async () => {
        const ip = await getIp();
        setResult(ip);
      };
    return (
        <>
        <Helmet>
          <title>내 IP 주소 확인 - 맥가이버 계산기</title>
          <meta name="description" content= "지금 접속중인 내 IP주소를 확인해보세요. 클릭 한번으로 바로 확인 가능합니다." />
          <meta name="keywords" content= "IP확인,내IP주소,공인IP,IP주소확인,IP조회" />
          <meta property="og:title" content="내 IP 주소 확인 - 맥가이버 계산기" />
          <meta property="og:description" content="클릭 한번으로 내 IP주소를 확인해 보세요." />
        </Helmet>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 내 IP 주소 확인 </h3>
            <p className="text-gray-600">클릭해서 확인</p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 내 IP 주소 확인 </h2>
  
              <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
                IP 확인하기
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