import { useState, useEffect } from 'react';
import ReturnHeader from './ReturnHeader';
import { Input } from './index';
import { useNavigate } from 'react-router-dom';

export default function NewFlight() {
  const navigateTo = useNavigate();
  /*************************************************/
  // Data of flight time that will be on the data base.
  const flightDuration = {
    location1Tolocation2: 1.6,
    location2Tolocation1: 2,
  };
  /*************************************************/

  const [flightInfo, setflightInfo] = useState({
    from: '',
    to: '',
    aircraftType: '',
    flightNumber: '',
    weather: 'CAVOK',
    departure: '',
    arriving: '',
    specialRequirements: {
      lvp: false,
      pbn: false,
    },
    crewMembers: {
      member1: '',
      member2: '',
      member3: '',
      cabinCrew: {
        cabin1: '',
        cabin2: '',
        cabin3: '',
        cabin4: '',
        cabin5: '',
        cabin6: '',
      }
    },
  });

  const [flightTimes, setflightTimes] = useState({
    dateOut: '',
    hourOut: '',
    dateIn: '',
    hourIn: '',
  });
  const [inputTypes, setInputTypes] = useState('text');
  const [hourTypes, setHourTypes] = useState('text');

  function handleFocus(isDate) {
    setInputTypes(isDate ? 'date' : 'text');
    setHourTypes(isDate ? 'text' : 'time');
  }

  function handleBlur() {
    setInputTypes('text');
    setHourTypes('text');
  }

  useEffect(() => {
    if (
      flightInfo.from &&
      flightInfo.to &&
      flightTimes.dateOut &&
      flightTimes.hourOut
    ) {
      const dateHour = combineDateAndHour(
        flightTimes.dateOut,
        flightTimes.hourOut
      );
      setflightInfo((prevFlightInfo) => ({
        ...prevFlightInfo,
        departure: dateHour,
      }));

      const destination = addHoursToDateString(
        dateHour,
        flightDuration[`${flightInfo.from}To${flightInfo.to}`]
      );

      setflightInfo((prevFlightInfo) => ({
        ...prevFlightInfo,
        arriving: destination,
      }));

      // Extract date and time from arriving
      const arrivingDate = destination.slice(0, 10); // Extract date (yyyy-mm-dd)
      const arrivingTime = destination.slice(11, 16); // Extract time (hh:mm)

      // Set dateIn and hourIn
      setflightTimes((prevFlightTimes) => ({
        ...prevFlightTimes,
        dateIn: arrivingDate,
        hourIn: arrivingTime,
      }));
    }
  }, [
    flightInfo.from,
    flightInfo.to,
    flightTimes.dateOut,
    flightTimes.hourOut,
  ]);

  function handleInput(event) {
    const { name, value } = event.target;
    setflightInfo((prevFlightInfo) => ({
      ...prevFlightInfo,
      [name]: value,
    }));
  }

  function handleCheckboxInput(event) {
    const { name, checked } = event.target;
    setflightInfo((prevFlightInfo) => ({
      ...prevFlightInfo,
      specialRequirements: {
        ...prevFlightInfo.specialRequirements,
        [name]: checked,
      },
    }));
  }

  function handleHoursInput(event) {
    const { name, value } = event.target;
    setflightTimes((prevFlightTimes) => ({
      ...prevFlightTimes,
      [name]: value,
    }));
  }
  function combineDateAndHour(date, hour) {
    const combinedDateTime = `${date}T${hour}`;
    return combinedDateTime;
  }
  function addHoursToDateString(dateString, hoursToAdd) {
    var date = new Date(dateString);
    var totalMillisecondsToAdd = hoursToAdd * 60 * 60 * 1000;
    date.setTime(date.getTime() + totalMillisecondsToAdd);
    var newDateString = date.toISOString().slice(0, 16);
    return newDateString;
  }

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem('newFlight', JSON.stringify(flightInfo));
    console.log(localStorage.getItem('newFlight'));
    navigateTo('/add-crew');
  }

  return (
    <>
      <ReturnHeader destinationPage="/dashboard/create-flight">
        Create Flight
      </ReturnHeader>
      <form onSubmit={handleSubmit} className="form__element">
        <div className="form_container">
          <div className="select__input">
            <p>Select Route:</p>
            <div className="route_selection">
              <div className="label_container">
                <label>
                  <p>From</p>
                  <select
                    name="from"
                    value={flightInfo.from}
                    onChange={handleInput}
                    required
                  >
                    <option value="" disabled aria-placeholder="Select Origin">
                      Select Origin
                    </option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                  </select>
                </label>
              </div>
              <div className="label_container">
                <label>
                  <p>To</p>
                  <select
                    name="to"
                    value={flightInfo.to}
                    onChange={handleInput}
                    required
                  >
                    <option
                      value=""
                      disabled
                      aria-placeholder="Select Destination"
                    >
                      Select Destination
                    </option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="departure_info">
            <div className="input__section">
              <label> Departure information </label>
              <div className="input__group">
                <div className="input__field">
                  <label htmlFor="dateOut">
                    {' '}
                    <p>Date</p>{' '}
                  </label>
                  <Input
                    placeholder="Select Date"
                    type={inputTypes}
                    name="dateOut"
                    onFocus={() => handleFocus(true)}
                    onBlur={handleBlur}
                    value={flightTimes.dateOut}
                    onChange={handleHoursInput}
                    id="dateOut"
                    required
                  ></Input>
                </div>
                <div className="input__field">
                  <label htmlFor="hourOut">
                    <p>Time</p>
                  </label>
                  <Input
                    placeholder="Select Time"
                    type={hourTypes}
                    name="hourOut"
                    onFocus={() => handleFocus(false)}
                    onBlur={handleBlur}
                    value={flightTimes.hourOut}
                    onChange={handleHoursInput}
                    id="hourOut"
                    required
                  ></Input>
                </div>
              </div>
            </div>
            <div className="input__section">
              <label> Arrival information </label>
              <div className="input__group">
                <div className="input__field">
                  <label htmlFor="dateIn">Date</label>
                  <Input
                    type="date"
                    name="dateIn"
                    value={flightTimes.dateIn}
                    onChange={handleHoursInput}
                    id="dateIn"
                    disabled
                  />
                </div>
                <div className="input__field">
                  <label htmlFor="hourIn">Time</label>
                  <Input
                    type="time"
                    name="hourIn"
                    value={flightTimes.hourIn}
                    onChange={handleHoursInput}
                    id="hourIn"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <label className="section-title">General Information</label>
            <div className="section-content">
              <Input
                type="text"
                name="flightNumber"
                value={flightInfo.flightNumber}
                onChange={handleInput}
                required
                placeholder="LA-2368"
                className="input__section_flight"
              >
                Flight Number:
              </Input>
              <label>
                Aircraft Type
                <div className="aircraft__select">
                  <select
                    className="aircraft-type"
                    name="aircraftType"
                    value={flightInfo.aircraftType}
                    onChange={handleInput}
                    required
                  >
                    <option value="" disabled aria-placeholder="true">
                      Select Aircraft Type
                    </option>
                    <option value="aircraft1">Aircraft 1</option>
                    <option value="aircraft2">Aircraft 2</option>
                  </select>
                </div>
              </label>
              <div className="section-subsection">
                <div>
                  <label className="subsection-title">Flight Restriction</label>
                  <div className="subsection-content">
                    <Input
                      type="checkbox"
                      name="lvp"
                      className="restriction-checkbox"
                      onChange={handleCheckboxInput}
                    >
                      LVP
                    </Input>
                    <Input
                      type="checkbox"
                      name="pbn"
                      className="restriction-checkbox"
                      onChange={handleCheckboxInput}
                    >
                      PBN
                    </Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonContainerForm">
          <button
            type="submit"
            disabled={
              (flightInfo.from === '' ||
              flightInfo.to === '' ||
              flightInfo.aircraftType === '' ||
              flightInfo.flightNumber === '' ||
              flightInfo.weather === '' ||
              flightInfo.departure === '' ||
              flightInfo.arriving === '') && true
            }
            className={(flightInfo.from === '' ||
            flightInfo.to === '' ||
            flightInfo.aircraftType === '' ||
            flightInfo.flightNumber === '' ||
            flightInfo.weather === '' ||
            flightInfo.departure === '' ||
            flightInfo.arriving === '') && 'disabledClass'}
          >
            Continue to Crew
          </button>
        </div>
      </form>
    </>
  );
}
