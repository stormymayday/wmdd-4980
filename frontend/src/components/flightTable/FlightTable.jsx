import { useEffect, useState } from 'react';
import FlightItem from './FlightItem';
import Tabbed from './Tabbed';
// import CrewMember from './CrewMember';

function FlightTable({ expand }) {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(
    function () {
      async function fetchFlights() {
        try {
          setIsLoading(true);
          const res = await fetch('/api/v1/flights');
          const data = await res.json();
          const currentTime = new Date();

          let refinedData = data.data.flights.map((flight) => {
            const departureTime = new Date(flight.departure);
            const arrivingTime = new Date(flight.arriving);
            let condition;

            // flight.actuallArrive doesn't exisit yet, so I use the optional chaining.
            if (currentTime >= departureTime && currentTime <= arrivingTime) {
              condition = 'in progress';
            } else if (currentTime > arrivingTime && flight.actuallArrive) {
              condition = 'done';
            } else if (currentTime > arrivingTime && !flight.actuallArrive) {
              condition = 'delay';
            } else if (flight.cancel) {
              condition = 'cancel';
            } else {
              condition = 'pending';
            }
            return {
              ...flight,
              condition,
            };
          });
          //   if an activeTab is selected use its value to filter
          if (activeTab !== 'all') {
            const filteredData = refinedData.filter(
              (flight) => flight.condition === activeTab
            );
            setFlights(filteredData);
          } else {
            setFlights(refinedData);
          }

          console.log(refinedData);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchFlights();
    },
    [activeTab]
  );
  //use expand props to decide whether to show the full flights list
  let flightlist = expand ? flights : flights.slice(0, 2);

  return (
    <>
      <Tabbed activeTab={activeTab} setActiveTab={setActiveTab} />
      <h3>Flight tables</h3> <span>{flights.length}</span>
      <ul>
        {flightlist.map((flight) => (
          <FlightItem flight={flight} key={flight.flightNumber} />
        ))}
      </ul>
    </>
  );
}

export default FlightTable;
