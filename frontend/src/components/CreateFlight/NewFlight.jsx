import { useState } from 'react';
// const mongoose = require('mongoose');

export default function NewFlight() {
  const [flightInfo, setflightInfo] = useState({
    from: '',
    to: '',
    date: '',
  });

  function handleInput(event) {
    console.log(flightInfo);
    const { name, value } = event.target;
    setflightInfo((prevFlightInfo) => ({
      ...prevFlightInfo,
      [name]: value,
    }));
  }

  return (
    <>
      <div>
        <label>Select Route:</label>
        <div>
          <label>From</label>
          <select name="from" value={flightInfo.from} onChange={handleInput}>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
        <div>
          <label>To</label>
          <select value={toValue} onChange={handleToValue}>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
      </div>
      <div>
        <label>Departure information</label>
        <div>
          <label>Date</label>
        </div>
      </div>
    </>
  );
}
