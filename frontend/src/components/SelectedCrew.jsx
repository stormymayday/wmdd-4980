import PropTypes from 'prop-types';

export default function SelectedCrew({ capt, cop }) {
  return (
    <div className="firstCardContainer">
      <h3>Crew selected</h3>
      <div className='assignedCrewNumbers'>
        <div className='infoCrew'>
          <div className={capt !== '' ? "ready" : ""}>{capt === '' ? '0/1' : '1/1'}</div>
          <p className={capt !== '' ? "ready" : ""}>Pilots</p>
        </div>
        <div className='infoCrew'>
          <div className={cop !== '' ? "ready" : ""}>{cop === '' ? '0/1' : '1/1'}</div>
          <p className={cop !== '' ? "ready" : ""}>Co-Pilots</p>
        </div>
        <div className='infoCrew'>
          <div className={cop !== '' || capt !== '' ? "ready" : ""}>6/6</div>
          <p className={cop !== '' || capt !== '' ? "ready" : ""}>Cabin Crew</p>
        </div>
      </div>
    </div>
  );
}

SelectedCrew.propTypes = {
  capt: PropTypes.string,
  cop: PropTypes.string,
};
