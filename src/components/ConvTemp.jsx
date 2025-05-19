import { useState } from 'react';
import { tempConversion } from '../utils/tempConversion';

export default function ConvTemp() {
    const [open, setOpen] = useState(false);
    const [temp, setTemp ] = useState('');
    const [beforeUnit, setBeforeUnit] = useState('C');
    const [afterUnit, setAfterUnit ] = useState('');
    const [result, setResult] = useState(null);
    const selectList = [
        { value: "C", name: "섭씨℃" },
        { value: "F", name: "화씨℉" },
      ];

    const calculate = () => {
            const CTemp = tempConversion(temp, beforeUnit, afterUnit);
            console.log(temp,beforeUnit,afterUnit);
            setResult( CTemp );
    };

    return (
        <>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 온도 단위 변환기 </h3>
            <p className="text-gray-600"> 온도 입력 </p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 온도 단위 변환기 </h2>
              <div className="flex items-center gap-2 mb-4">
                {/* 기준 단위 셀렉트 */}
                <select
                    className="p-2 border rounded w-full"
                    onChange={e => setBeforeUnit(e.target.value)}
                    value={beforeUnit}
                >
                    {selectList.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.name}
                    </option>
                    ))}
                </select>

                {/* 중간 기호 */}
                <span className="text-xl text-gray-600">⇒</span>

                {/* 변환 단위 셀렉트 */}
                <select
                    className="p-2 border rounded w-full"
                    onChange={e => setAfterUnit(e.target.value)}
                    value={afterUnit}
                >
                    {selectList.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.name}
                    </option>
                    ))}
                </select>
                </div>
              

              <input
                type="number"
                placeholder="온도 입력"
                value={temp}
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setTemp(e.target.value)}
              />
              
              <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
                변환
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