import BarChart from '../components/BarChart/BarChart';
import { CrewAvailability } from '../components/CrewPieChart/CrewAvailability';
import UpcomingFlights from '../components/UpcomingFlights';
import FlightTableWithCrew from '../components/flightTableWithCrew/FlightTableWithCrew';

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <BarChart />
      <CrewAvailability />
      <UpcomingFlights crew={true} />
      <FlightTableWithCrew expand={true} />
    </main>
  );
};
export default DashboardPage;
