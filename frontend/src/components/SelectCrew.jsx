import { useState, useEffect } from 'react';
import SelectedCrew from './SelectedCrew';
import ReturnHeader from './ReturnHeader';
import ListOfCrew from './ListOfCrew';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Tabs from './AssignMember/Tabs';

export default function SelectCrew({ flightComing, isModal, onClickClose }) {
  const navigateTo = useNavigate();

  const localStorageFlight = JSON.parse(localStorage.newFlight);
  const [activeTab, setActiveTab] = useState('all');
  const [newFlight, setNewFlight] = useState(checkIfFlight());
  const [capt, setCapt] = useState(newFlight.crewMembers[0].member1);
  const [cop, setCop] = useState(newFlight.crewMembers[0].member2);
  const [cabinCrew, setcabinCrew] = useState(
    newFlight.crewMembers[0].cabinCrew
  );
  // const [ so, setSo ] = useState(newFlight.crewMembers.member3);
  const [availableCrew, setAvailableCrew] = useState([]);
  // const [crew, setCrew] = useState({});

  function checkIfFlight() {
    if (flightComing) {
      axios({
        method: 'get',
        url: 'api/v1/flights',
      }).then((response) => {
        const allFlights = response.data.data.flights;
        const foundFlight = allFlights.find(
          (flight) => flight.flightNumber === flightComing.flightNumber
        );
        return foundFlight;
      });
    } else if (localStorageFlight) {
      return localStorageFlight;
    } else {
      return null;
    }
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/v1/crew',
    })
      .then((response) => {
        console.log(response);
        setAvailableCrew(response.data.data.CrewMembers);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleAdding(crew) {
    if (crew.role === 'pilot') {
      setCapt(crew.name);
      setNewFlight((prevFlight) => ({
        ...prevFlight,
        crewMembers: {
          ...prevFlight.crewMembers,
          member1: crew.name,
        },
      }));
    } else if (crew.role === 'second_pilot') {
      setCop(crew.name);
      setNewFlight((prevFlight) => ({
        ...prevFlight,
        crewMembers: {
          ...prevFlight.crewMembers,
          member2: crew.name,
        },
      }));
    } else if (crew.role === 'flight_attendant') {
      const firstAvailable = cabinCrew.findIndex((member) => member === '');
      if (firstAvailable === -1) {
        setcabinCrew([...cabinCrew, crew.name]);
      } else {
        setcabinCrew([
          ...cabinCrew.slice(0, firstAvailable),
          crew.name,
          ...cabinCrew.slice(firstAvailable + 1),
        ]);
      }
      setNewFlight((prevFlight) => ({
        ...prevFlight,
        crewMembers: {
          ...prevFlight.crewMembers,
          cabinCrew: cabinCrew,
        },
      }));
    }
    console.log(newFlight);

    axios
      .patch(`/api/v1/crew/${crew._id}`, {
        $push: { flightRecord: newFlight },
        FlightNumber: newFlight._id,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  function handleSubmit() {
    localStorage.setItem('newFlight', JSON.stringify(newFlight));

    // Add the summary page to navigate to >>>>>>>
    if (isModal) {
      onClickClose(false, false, false);
    } else {
      navigateTo('/dashboard');
    }
  }

  return (
    <>
      <ReturnHeader destinationPage="/new-flight" onClick={onClickClose}>
        Select Crew
      </ReturnHeader>
      <div className="addCrewContainer">
        {console.log(newFlight)}
        <SelectedCrew capt={capt} cop={cop} cabinCrew={cabinCrew} />
        <h2>Select Crew</h2>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="listOfCrew">
          {availableCrew.length > 0 ? (
            availableCrew
              .filter((crew) => activeTab === 'all' || crew.role === activeTab)
              .map((crew, index) => {
                return (
                  <ListOfCrew
                    crew={crew}
                    key={index}
                    handleAdding={handleAdding}
                  />
                );
              })
          ) : (
            <p>No available Crew.</p>
          )}
        </div>
        <div
          className={
            !isModal
              ? 'crewAddButtonsSubmitCancel'
              : 'crewAddButtonsSubmitCancel is-modal'
          }
        >
          {!isModal && <button className="cancelButton">Cancel</button>}
          <button
            onClick={handleSubmit}
            className={
              capt !== '' && cop !== '' ? 'continue' : 'continue disabledButton'
            }
            disabled={capt !== '' && cop !== '' ? false : true}
          >
            {capt !== '' && cop !== '' ? 'Confirm' : 'Continue to Crew'}
          </button>
        </div>
      </div>
    </>
  );
}

SelectCrew.propTypes = {
  flightComing: PropTypes.object,
  isModal: PropTypes.bool,
  onClickClose: PropTypes.func,
};
