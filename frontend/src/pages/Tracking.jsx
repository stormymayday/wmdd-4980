import CrewMemberInfo from '../components/CrewMemberInfo/CrewMemberInfo';
import CrewMemberLatestFlight from '../components/CrewMemberInfo/CrewMemberLatestFlight';
const Tracking = () => {
  return (
    <div className="dashboard-page">
      <CrewMemberInfo />
      <CrewMemberLatestFlight expand={false} />
    </div>
  );
};
export default Tracking;
