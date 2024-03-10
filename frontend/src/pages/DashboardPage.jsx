import BarChart from '../components/BarChart/BarChart';
import { CrewAvailability } from '../components/CrewPieChart/CrewAvailability';
// import FlightTable from '../components/flightTable/FlightTable';
import UpcomingFlights from '../components/UpcomingFlights';
import FlightTableWithCrew from '../components/flightTableWithCrew/FlightTableWithCrew';

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <BarChart />
      <CrewAvailability />
      <UpcomingFlights crew={true} />
      {/* <UpcomingFlights crew={false} /> */}
      <FlightTableWithCrew expand={true} />
    </main>
  );
};
export default DashboardPage;
