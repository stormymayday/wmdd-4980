import { useState, useEffect } from 'react';
import SelectedCrew from './SelectedCrew';
import ReturnHeader from './ReturnHeader';
import ListOfCrew from './ListOfCrew';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SelectCrew({ flightComing }) {
  const navigateTo = useNavigate();

  const localStorageFlight = JSON.parse(localStorage.newFlight);
  const [newFlight, setNewFlight] = useState(checkIfFlight());
  const [capt, setCapt] = useState(newFlight.crewMembers.member1);
  const [cop, setCop] = useState(newFlight.crewMembers.member2);
  // const [ so, setSo ] = useState(newFlight.crewMembers.member3);
  const [availableCrew, setAvailableCrew] = useState([]);

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
    }
  }

  function handleSubmit() {
    localStorage.setItem('newFlight', JSON.stringify(newFlight));
    axios({
      method: 'post',
      url: '/api/v1/flights',
      data: newFlight,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // Add the summary page to navigate to >>>>>>>
    navigateTo('/dashboard');
  }

  return (
    <>
      <ReturnHeader destinationPage="/new-flight">Select Crew</ReturnHeader>
      <div className="addCrewContainer">
        {console.log(newFlight)}
        <SelectedCrew capt={capt} cop={cop} />
        <h2>Select Crew</h2>
        {availableCrew.length > 0 ? (
          availableCrew.map((crew, index) => {
            return (
              <ListOfCrew crew={crew} key={index} handleAdding={handleAdding} />
            );
          })
        ) : (
          <p>No available Crew.</p>
        )}
        <div className="crewAddButtonsSubmitCancel">
          <button className="cancelButton">Cancel</button>
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
};
