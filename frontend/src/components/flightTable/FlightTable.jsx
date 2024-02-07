import { useEffect, useState } from 'react';
import FlightItem from './FlightItem';
import Tabbed from './Tabbed';
// import CrewMember from './CrewMember';

function FlightTable({ expand }) {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchFlights() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/v1/flights');
        const data = await res.json();
        setFlights(data.data.flights);
        console.log(flights);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFlights();
  }, []);
  //use expand props to decide whether to show the full flights list
  const flightlist = expand ? flights : flights.slice(0, 2);
  return (
    <>
      <Tabbed />
      <h3>Flight tables</h3> <span>{flights.length}</span>
      <ul>
        {flightlist.map((flight) => (
          <FlightItem flight={flight} key={flight.flightNumber} />
        ))}
      </ul>
    </>
    // <>
    //   <h3>Select Crew</h3>
    //   <ul>
    //     {flightlist.map((flight) => (
    //       <CrewMember flight={flight} key={flight.flightNumber} />
    //     ))}
    //   </ul>
    // </>
  );
}

export default FlightTable;
