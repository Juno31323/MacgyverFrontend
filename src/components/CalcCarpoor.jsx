import { useEffect, useState } from 'react';
import { calculateCarpoor } from '../utils/carpoor';
import { Helmet } from 'react-helmet';

export default function CalCarpoor() {
	const [modelList, setModelList] = useState([]);
	const [typeList, setTypeList] = useState([]);
	
	const [open, setOpen] = useState(false);
	const [salary, setSalary ] = useState('');
	const [model, setModel ] = useState('');
	const [type, setType ] = useState('');
	const [result, setResult] = useState(null);
	
	const history = (title) => {
			const newItem = { t: title};
			const prev = JSON.parse(localStorage.getItem('history')) || [];
			const updated = [newItem, ...prev];
			localStorage.setItem('history', JSON.stringify(updated));
			console.log('히스토리에 추가됨', updated);
		};
	
	const calculate = async () => {
		const carpoor = await calculateCarpoor(salary, model, type, history);
		setResult(carpoor);
	};
	
	useEffect(() => {
	  // 컴포넌트 마운트 시 DB에서 데이터 가져옴
	  async function fetchOptions() {
	    const modelRes = await fetch('/calculate'); // 예시 URL
	    const typeRes = await fetch('/calculate');

	    const models = await modelRes.json();
	    const types = await typeRes.json();

	    setModelList(models); 
	    setTypeList(types);
	  }

	  fetchOptions();
	}, []);
	
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
			<p className="text-sm text-gray-500">클릭해서 계산기 열기</p>
		</div>
		
		{open && (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			  <div className="bg-white p-6 rounded-lg w-96 relative">
			    <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
			    <h2 className="text-xl font-semibold mb-4">카푸어 계산기</h2>
			    <input
			      type="number"
			      className="w-full mb-2 p-2 border rounded"
			      onChange={e => setSalary(e.target.value)}
			    />
				<select
				  value={model}
				  onChange={(e) => setModel(e.target.value)}
				  className="w-full mb-2 p-2 border rounded"
				>
				  <option value="">차종 선택</option>
				  {modelList.map((item, i) => (
				    <option key={i} value={item}>{item}</option>
				  ))}
				</select>

				<select
				  value={type}
				  onChange={(e) => setType(e.target.value)}
				  className="w-full mb-2 p-2 border rounded"
				>
				  <option value="">국산/외제 선택</option>
				  {typeList.map((item, i) => (
				    <option key={i} value={item.value}>{item.label}</option>
				  ))}
				</select>
			    <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
			      계산
			    </button>
			    {result && <p className="mt-4 text-center text-blue-700 font-bold">Carpoor: {result}</p>}
			  </div>
			</div>
		)}
	</>
	);
}