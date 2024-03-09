import { NavLink } from 'react-router-dom';
import CrewMemberLatestFlight from '../components/CrewMemberInfo/CrewMemberLatestFlight';

const CreateFlight = () => {
  return (
    <div className="dashboard-page">
      <NavLink className="nav-link" to="/new-flight">
        <p>New Flight</p>
      </NavLink>
      <CrewMemberLatestFlight />
    </div>
  );
};
export default CreateFlight;
