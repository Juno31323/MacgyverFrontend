import { useState } from 'react';
import { CalculateDistance } from '../utils/distance';
import { Helmet } from 'react-helmet';

export default function CalcCoordDistance() {
    const [open, setOpen] = useState(false);
    const [start, setStart] = useState(['', '']);
    const [end, setEnd] = useState(['', '']); 
    const [result, setResult] = useState(null);

    const calculate = () => {
            const coordDistance= CalculateDistance( start, end ).toFixed(2);
            setResult( coordDistance );
    };

    return (
        <>
        <Helmet>
          <title>좌표 거리 계산기 - 맥가이버 계산기</title>
          <meta name="description" content= "두 지점의 좌표를 입력하면 좌표 간 거리를 계산합니다. 실시간 좌표 거리 계산기!" />
          <meta name="keywords" content= "좌표거리계산기,두점거리,x,y좌표계산,거리측정" />
          <meta property="og:title" content="좌표 거리 계산기 - 맥가이버 계산기" />
          <meta property="og:description" content="시작점과 끝점 좌표를 입력하면 두 좌표간의 거리를 계산해 드립니디." />
        </Helmet>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 좌표간 거리 계산기 </h3>
            <p className="text-gray-600"> 시작점, 끝점 입력 </p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 좌표간 거리 계산기 </h2>
              
              <label className="block text-sm font-medium text-gray-700 mb-1">시작점 좌표</label>
                <div className="flex gap-2 mb-4">
                <input
                    type="number"
                    placeholder="X값"
                    value={start[0]}
                    onChange={e => setStart([+e.target.value, start[1]])}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Y값"
                    value={start[1]}
                    onChange={e => setStart([start[0], e.target.value])}
                    className="w-full p-2 border rounded"
                />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">끝점 좌표</label>
                <div className="flex gap-2 mb-4">
                <input
                    type="number"
                    placeholder="X값"
                    value={end[0]}
                    onChange={e => setEnd([e.target.value, end[1]])}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Y값"
                    value={end[1]}
                    onChange={e => setEnd([end[0],e.target.value])}
                    className="w-full p-2 border rounded"
                />
                </div>
	
              
              <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
                계산
              </button>
  
              {result && (
                <p className="mt-4 text-center text-blue-700 font-bold">
                  두 좌표간의 거리는 {result} 입니다.
                </p>
              )}
            </div>
          </div>
        )}
        </>
    )
}