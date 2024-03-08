import { Outlet } from 'react-router-dom';
import FlightTable from '../components/flightTable/FlightTable';
import FlightTableWithCrew from '../components/flightTableWithCrew/FlightTableWithCrew';
import BarChart from '../components/BarChart/BarChart';
import { CrewAvailability } from '../components/CrewPieChart/CrewAvailability';
import CrewMemberInfo from '../components/CrewMemberInfo/CrewMemberInfo';
import CrewMemberLatestFlight from '../components/CrewMemberInfo/CrewMemberLatestFlight';
const HomeLayout = () => {
  return (
    <div>
      {/* <BarChart /> */}
      {/* <FlightTable /> */}
      {/* <FlightTableWithCrew expand={true} /> */}
      {/* <CrewAvailability /> */}
      {/* <Outlet /> */}
      <CrewMemberInfo />
      <CrewMemberLatestFlight expand={true} />
    </div>
  );
};
export default HomeLayout;
