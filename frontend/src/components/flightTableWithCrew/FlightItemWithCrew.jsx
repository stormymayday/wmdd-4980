import { NavLink } from 'react-router-dom';
import ButtonAddCrew from '../flightTable/ButtonAddCrew';
import AssignMember from '../AssignMember/AssignMember';
//MISSING isMobileView id togglefunction
function FlightItemWithCrew({
  flight,
  flightId,
  isMobileView,
  toggleModalCrew,
  showModalAssignMember,
}) {
  const { flightNumber, from, to, status } = flight;
  // console.log(flightId);
  return (
    <>
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
          {isMobileView ? (
            <NavLink className="crew-link" to={`/crew/${flightId}`}>
              <ButtonAddCrew />
            </NavLink>
          ) : (
            <ButtonAddCrew
              flightId={flightId}
              toggleModalCrew={toggleModalCrew}
            />
          )}
          {/* <NavLink>
          <ButtonAddCrew flightId={flightId} />
        </NavLink> */}
        </div>
      </li>
      {showModalAssignMember && (
        <div
          className={
            showModalAssignMember
              ? 'sliding-modal modal-animation'
              : 'sliding-modal'
          }
        >
          <div className="modal-content">
            <AssignMember onClickClose={toggleModalCrew} flightId={flightId} />
          </div>
        </div>
      )}
    </>
  );
}

export default FlightItemWithCrew;
