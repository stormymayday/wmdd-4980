import ButtonAddCrew from '../flightTable/ButtonAddCrew';
function FlightItemWithCrew({ flight }) {
  const { flightNumber, from, to, status } = flight;
  return (
    <li className="flightTable__item">
      <div className="flightTable__flightAndAbbrev">
        {flightNumber}{' '}
        <div className="flightTable__fromTo">
          {from} - {to}
        </div>
      </div>
      <div className="flightTable__containerForStatus">
        <div className="flightTable__status">
          <p id="statusM">{status}</p>
        </div>
      </div>

      <div className="flightTable__btn-container">
        <ButtonAddCrew />
      </div>
    </li>
  );
}

export default FlightItemWithCrew;
