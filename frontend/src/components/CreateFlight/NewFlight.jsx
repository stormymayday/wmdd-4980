import { useState, useEffect } from 'react';

export default function NewFlight() {
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
    arriving: '',
    departure: '',
    aircraftType: '',
    flightNumber: '',
    weather: '',
    specialRequirements: {
      lvp: false,
      pbn: false,
    },
  });
  const [flightTimes, setflightTimes] = useState({
    dateOut: '',
    hourOut: '',
    dateIn: '',
    hourIn: '',
  });

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
    localStorage.newFlight = JSON.stringify(flightInfo);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Select Route:
          <div>
            <label>
              Flight Number:
              <input
                type="text"
                name="flightNumber"
                value={flightInfo.flightNumber}
                onChange={handleInput}
                required
              />
            </label>
          </div>
          <div>
            <div>
              <label>
                From
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
            <div>
              <label>
                To
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
          <div>
            <label>
              Departure information
              <div>
                <label>
                  Date
                  <input
                    type="date"
                    name="dateOut"
                    value={flightTimes.dateOut}
                    onChange={handleHoursInput}
                    required
                  />
                </label>
                <label>
                  Time
                  <input
                    type="time"
                    name="hourOut"
                    value={flightTimes.hourOut}
                    onChange={handleHoursInput}
                    required
                  />
                </label>
              </div>
            </label>
          </div>
          <div>
            <label>
              Arrival information
              <div>
                <label>
                  Date
                  <input
                    type="date"
                    name="dateIn"
                    value={flightTimes.dateIn}
                    onChange={handleHoursInput}
                    disabled
                  />
                </label>
                <label>
                  Time
                  <input
                    type="time"
                    name="hourIn"
                    value={flightTimes.hourIn}
                    onChange={handleHoursInput}
                    disabled
                  />
                </label>
              </div>
            </label>
          </div>
          <div>
            <label>
              General Information
              <div>
                <label>
                  Aircraft Type
                  <select
                    name="aircraftType"
                    value={flightInfo.aircraftType}
                    onChange={handleInput}
                    required
                  >
                    <option
                      value=""
                      disabled
                      aria-placeholder="Select Aircraft Type"
                    >
                      Select Aircraft Type
                    </option>
                    <option value="aircraft1">Aircraft 1</option>
                    <option value="aircraft2">Aircraft 2</option>
                  </select>
                </label>
                <div>
                  <label>
                    Flight Restriction
                    <div>
                      <label>
                        LVP
                        <input
                          type="checkbox"
                          name="lvp"
                          checked={flightInfo.specialRequirements.lvp}
                          onChange={handleCheckboxInput}
                        />
                      </label>
                      <label>
                        PBN
                        <input
                          type="checkbox"
                          name="pbn"
                          checked={flightInfo.specialRequirements.pbn}
                          onChange={handleCheckboxInput}
                        />
                      </label>
                    </div>
                  </label>
                </div>
              </div>
            </label>
          </div>
          <button type="submit">Continue to Crew</button>
        </label>
      </form>
    </>
  );
}
