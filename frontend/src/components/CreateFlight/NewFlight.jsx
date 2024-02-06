import { useState } from 'react';

export default function NewFlight() {

/*************************************************/
// Data of flight time that will be on the data base.
const flightDuration = {
  location1Tolocation2: 1.6,
  location2Tolocation1: 2,
}

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
    setflightTimes({ ...flightTimes, [name]: value });
    const { dateOut, hourOut } = flightTimes;
    let dateHour = combineDateAndHour(dateOut, hourOut);
    setflightInfo((prevFlightInfo) => ({
      ...prevFlightInfo,
      departure: dateHour,
    }));
  }
  
  function combineDateAndHour(date, hour){
    const combinedDateTime = `${date}T${hour}`;
    return combinedDateTime;
  }

  function addHours(initialHour, additionalHours) {
    const [initialHours, initialMinutes] = initialHour.split(':').map(Number);
    const initialTotalMinutes = initialHours * 60 + initialMinutes;
    const additionalMinutes = additionalHours * 60;
    const totalMinutes = initialTotalMinutes + additionalMinutes;
    const finalHours = Math.floor(totalMinutes / 60) % 24; 
    const finalMinutes = totalMinutes % 60;
    const formattedResult = `${finalHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`;
    return formattedResult;
  }

  function handleSubmit(event) {
    const destination = addHours(flightTimes.hourOut, flightDuration[`${flightInfo.from}To${flightInfo.to}`])
    console.log(destination)

    event.preventDefault();
    console.log(flightInfo);
    console.log(flightTimes);
    // localStorage.newFlight = JSON.stringify(flightInfo);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let flightInfoJSON = JSON.stringify({
  //     flightNumber: "VictorTest",
  //     aircraftType: "Boeing 747",
  //     from: "JFK",
  //     to: "LAX",
  //     weather: "Clear",
  //     specialRequirements: [
  //       {
  //         PBN: true,
  //         LVP: false
  //       }
  //     ],
  //     arriving: "2024-02-06T13:20:00",
  //     departure: "2024-02-06T15:30:00",
  //     crewMembers: [
  //       {
  //         member1: "John Doe",
  //         member2: "Jane Smith",
  //         member3: "Bob Johnson"
  //       }
  //     ]
  //   });
  
  //   console.log(flightInfoJSON);
  
  //   fetch('/api/v1/flights', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: flightInfoJSON,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }
  

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
                <select name="to" value={flightInfo.to} onChange={handleInput}>
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
                    value={flightInfo.dateOut}
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
                    name="date"
                    value={flightInfo.date}
                    onChange={handleInput}
                    disabled
                  />
                </label>
                <label>
                  Time
                  <input
                    type="time"
                    name="hour"
                    value={flightInfo.hour}
                    onChange={handleInput}
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
