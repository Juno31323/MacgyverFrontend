import Layout from '../components/Layout';
import CalcBMI from '../components/CalcBMI';
import CalcBMR from '../components/CalcBMR';
import CalcCalorie from '../components/CalcCalorie';
import CalcChildbearing from '../components/CalcChildbearingPeriod';
import CalcNormalWeight from '../components/CalcNormalWeight';
import CalcHeratRate from '../components/CalcHeartRate';
import CalcAge from '../components/CalcAge';
import CalcCoordDistance from '../components/CalcCoordDistance';
import CalcLoan from '../components/CalcLoan';
import CheckMyIp from '../components/CheckMyIp';
import ConvTemp from '../components/ConvTemp';
import CalcLotto from '../components/CalcLotto';
import CalcCarpoor from '../components/CalcCarpoor';
import { useState } from 'react';


export default function Home() {
  const [activeCal, setActiveCal] = useState('');

    return (
        <Layout activeCal={activeCal} setActiveCal={setActiveCal}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16">
            <CalcBMI activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcBMR activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcCalorie activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcChildbearing activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcNormalWeight activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcHeratRate activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcAge activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcCoordDistance activeCal={activeCal} setActiveCal={setActiveCal} />
            <CalcLoan activeCal={activeCal} setActiveCal={setActiveCal} />
            <CheckMyIp activeCal={activeCal} setActiveCal={setActiveCal} />
            <ConvTemp activeCal={activeCal} setActiveCal={setActiveCal} />
			      <CalcCarpoor activeCal={activeCal} setActiveCal={setActiveCal} />
			      <CalcLotto activeCal={activeCal} setActiveCal={setActiveCal} />
          </div>
        </Layout>
      );
}