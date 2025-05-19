import { useState } from 'react';
import { calculateLoan } from '../utils/loan';
import { useCurrencyInput } from '../hooks/useCurrencyInput';

export default function CalcLoan() {
    const [open, setOpen] = useState(false);
    const [interestRate, setInterestRate ] = useState('');
    const [period, setPeriod ] = useState('');
    const [result, setResult] = useState(null);

    const { value, onChange, rawValue, inputRef } = useCurrencyInput();

    const calculate = () => {
            const loan = calculateLoan( rawValue, interestRate, period );
            setResult( loan );
    };

    return (
        <>
        <div 
        onClick={() => setOpen(true)}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow modalOpenButton">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">💰</div>
            <h3 className="text-lg font-semibold mb-2"> 이자 계산기 </h3>
            <p className="text-gray-600"> 대출금, 기간, 이자율 입력 </p>
        </div>
        {open &&(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-semibold mb-4"> 이자 계산기 </h2>
              
            <input
                type="text"
                placeholder="대출 금액(원)"
                value={value}
                className="w-full mb-2 p-2 border rounded"
                onChange={onChange}
                ref={inputRef}
            />
            <input
                type="number"
                placeholder="대출 기간(월)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setPeriod(e.target.value)}
            />
            <input
                type="number"
                placeholder="이자율(%)"
                className="w-full mb-2 p-2 border rounded"
                onChange={e => setInterestRate(e.target.value)}
            />
              
              <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={calculate}>
                계산
              </button>
  
              {result && (
                <p className="mt-4 text-center text-blue-700 font-bold">
                  월납입금: {result.monthlyPayment.toLocaleString()}원, 총 납부금: {result.totalPayment.toLocaleString()}원,
                   총 이자: {result.totalInterest.toLocaleString()}원
                </p>
              )}
            </div>
          </div>
        )}
        </>
    )
}