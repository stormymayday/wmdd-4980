import { Outlet } from 'react-router-dom';
import FlightTable from '../components/flightTable/FlightTable';
import Tabbed from '../components/flightTable/Tabbed';

const HomeLayout = () => {
  return (
    <div>
      <FlightTable expand={false} />

      {/* <Outlet /> */}
    </div>
  );
};
export default HomeLayout;
