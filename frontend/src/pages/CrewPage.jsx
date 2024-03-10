import { useParams } from 'react-router-dom';
import CrewMemberInfo from '../components/CrewMemberInfo/CrewMemberInfo'
import CrewMemberLatestFlight from '../components/CrewMemberInfo/CrewMemberLatestFlight'
const CrewPage = () => {
  const { id } = useParams();
  return (
    <>
    <CrewMemberInfo crewId={id}/>
    <CrewMemberLatestFlight expand={false}/>
      
    </>
  );
};
export default CrewPage;
