import ButtonAddCrew from './ButtonAddCrew';

function FlightItem({ flight }) {
  const { flightNumber, from, to } = flight;
  return (
    <li>
      {flightNumber}{' '}
      <div>
        {from} - {to}
      </div>
      <ButtonAddCrew />
    </li>
  );
}

export default FlightItem;
