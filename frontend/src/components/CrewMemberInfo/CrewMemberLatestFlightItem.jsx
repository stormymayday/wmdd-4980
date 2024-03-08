// import ButtonAddCrew from '../flightTable/ButtonAddCrew';
import ButtonCrewMemberInfo from '../../components/CrewMemberInfo/ButtonCrewMemberInfo';

function CrewMemberLatestFlightItem({ flight }) {
  const { flightNumber, from, to } = flight;
  return (
    <li className="flightTableForCrew__item">
      <div className="flightTableForCrew__item_column1">
        {flightNumber}{' '}
        <div className="flightTableForCrew__item_column1_from">
          {from} - {to}
        </div>
      </div>

      <ButtonCrewMemberInfo />
    </li>
  );
}

export default CrewMemberLatestFlightItem;
