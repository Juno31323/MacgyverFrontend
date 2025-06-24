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
import CarSlider from '../components/CarSlider';
import CalcHistory from '../components/CalcHistory';
import CalcLotto from '../components/CalcLotto';
import CarSelector from '../components/CarSelector';
import CalCarpoor from './CalCarpoor';


export default function Home() {
    return (
        <Layout>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16">
            <CalcBMI />
            <CalcBMR />
            <CalcCalorie />
            <CalcChildbearing />
            <CalcNormalWeight />
            <CalcHeratRate />
            <CalcAge />
            <CalcCoordDistance />
            <CalcLoan />
            <CheckMyIp />
            <ConvTemp />
			      <CalCarpoor />
			      <CalcLotto />
          </div>
        </Layout>
      );
}