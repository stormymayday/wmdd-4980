import PropTypes from 'prop-types';
import CrewMemberInfo from '../components/CrewMemberInfo/CrewMemberInfo'
import CrewMemberLatestFlight from '../components/CrewMemberInfo/CrewMemberLatestFlight'
import { ReturnHeader } from '../components';

export default function ModalCrewInfo({ id, onClickClose}) {
  return (
    <>
      <ReturnHeader destinationPage={'/dashboard/availability'} onClick={onClickClose}>
        Crew Member Information
      </ReturnHeader>
      <CrewMemberInfo crewId={id} />
      <CrewMemberLatestFlight expand={false} />
    </>
  );
}

ModalCrewInfo.propTypes = {
  id: PropTypes.string,
  onClickClose: PropTypes.func,
};
