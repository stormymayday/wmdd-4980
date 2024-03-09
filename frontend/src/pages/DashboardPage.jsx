import BarChart from '../components/BarChart/BarChart';
import { CrewAvailability } from '../components/CrewPieChart/CrewAvailability';
import FlightTable from '../components/flightTable/FlightTable';
import UpcomingFlights from '../components/UpcomingFlights';

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <BarChart />
      <CrewAvailability />
      <UpcomingFlights crew={true} />
      <UpcomingFlights crew={false} />
      <FlightTable />
    </main>
  );
};
export default DashboardPage;
