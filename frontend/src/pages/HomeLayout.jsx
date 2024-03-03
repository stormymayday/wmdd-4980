import { Outlet } from 'react-router-dom';
import FlightTable from '../components/flightTable/FlightTable'
import FlightTableWithCrew from '../components/flightTableWithCrew/FlightTableWithCrew'
import BarChart from '../components/BarChart/BarChart'
const HomeLayout = () => {
  return (
    <div>
      {/* <BarChart /> */}
      <FlightTable />
      {/* <FlightTableWithCrew /> */}
      {/* <Outlet /> */}
    </div>
  );
};
export default HomeLayout;
