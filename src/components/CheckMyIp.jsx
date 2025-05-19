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