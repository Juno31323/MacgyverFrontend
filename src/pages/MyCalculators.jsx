import { useState } from 'react';
import Layout from '../components/Layout';
import CalcBMI from '../components/CalcBMI';
import CalcBMR from '../components/CalcBMR';
import CalcCalorie from '../components/CalcCalorie';
import CalcChildbearing from '../components/CalcChildbearingPeriod';
import CalcNormalWeight from '../components/CalcNormalWeight';
import CalcHeratRate from '../components/CalcHeartRate';
import CalcAge from '../components/CalcAge';
import CalcCoordDistance from '../components/CalcCoordDistance';

export default function MyCalculators() {

    const calculators = [
        { id: 'bmi', label: 'BMI 계산기', component: <CalcBMI /> },
        { id: 'bmr', label: 'BMR 계산기', component: <CalcBMR /> },
        { id: 'calorie' , label: '칼로리 계산기' , component: <CalcCalorie /> },
        { id: 'childbearing' , label: '가임기 계산기' , component: <CalcChildbearing />},
        { id: 'normalWeight', label: '정상체중 계산기' , component: <CalcNormalWeight />},
        { id: 'heartRate', label: '목표심박수 계산기' , component: <CalcHeratRate />},
        { id: 'age', label: '만 나이 계산기' , component: <CalcAge />},
        { id: 'Distance', label: '좌표거리 계산기' , component: <CalcCoordDistance />}
      ];
    
    const [selected, setSelected] = useState(['']);

    return (
    <Layout>
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">내 계산기</h1>
            <div className="mb-6">
                <h2 className="font-semibold mb-2">계산기 선택</h2>
                <div className="flex gap-4 flex-wrap">
                {calculators.map(({ id, label }) => (
                    <label key={id} className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={selected.includes(id)}
                        onChange={() =>
                        setSelected(prev =>
                            prev.includes(id)
                            ? prev.filter(item => item !== id) //id
                            : [...prev, id]
                        )
                        }
                    />
                    {label}
                    </label>
                ))}
                </div>
            </div>
            {/* 선택 된 계산기 불어오는 코드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {calculators
                .filter(calc => selected.includes(calc.id))
                .map(calc => (
                    <div key={calc.id}>{calc.component}</div>
                ))}
            </div>
        </div>
    </Layout>
    );
  }