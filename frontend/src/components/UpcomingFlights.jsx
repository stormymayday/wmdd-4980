import { useEffect, useState } from 'react';
import FlightCard from '../components/FlightCard';

export default function UpcomingFlights() {
  useEffect(() => {
    fetch('/api/v1/flights')
      .then((res) => res.json())
      .then((data) => {
        const filteredFlights = flightFilter(data.data.flights);
        setFlights(filteredFlights);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const flightFilter = (flights) => {
    const currentTime = new Date();
    const fourHoursLater = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);
    return flights.filter((flight) => {
      if (flight.departure && typeof flight.departure === 'string' && flight.departure.trim() !== '') {
        const departureParts = flight.departure.split(/[-T:]/);
        const departureDate = new Date(
          departureParts[0],
          departureParts[1] - 1,
          departureParts[2],
          departureParts[3],
          departureParts[4],
          departureParts[5].split('.')[0] 
        );
        return departureDate >= currentTime && departureDate < fourHoursLater;
      } else {
        return false;
      }
    });
  };

  const [flights, setFlights] = useState([]);

  return (
    <>
      <div className='upcoming__flights__title'>
        <h2>Upcoming Flights</h2>
        <p>(next 4hrs)</p>
      </div>
      <div className="upcoming__flights">
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} crew={true}/>
          ))
        ) : (
          <p>No upcoming flights</p>
        )}
      </div>
    </>
  );
}
