import ButtonAddCrew from '../flightTable/ButtonAddCrew';
function FlightItemWithCrew({ flight }) {
    const { flightNumber, from, to, status } = flight;
    return (
      <li className="flightTable__item">
        {flightNumber}{' '}
        <div>
          {from} - {to}
        </div>
        <p>{status}</p>
        <ButtonAddCrew />
      </li>
    );
  }
  
  export default FlightItemWithCrew;