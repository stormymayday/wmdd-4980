import PropTypes from 'prop-types';
import TabsForFlightTableWithCrew from './TabsForFlightTableWithCrew';
import '../../../SASS/components/_flightTableWithCrew.scss';

//1fake data structure
import { useEffect, useState } from 'react';
import FlightItemWithCrew from './FlightItemWithCrew';

function FlightTableWithCrew({ expand }) {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(
    function () {
      async function fetchFlightsWithCrew() {
        try {
          setIsLoading(true);
          const res = await fetch('/api/v1/flights');
          let data = await res.json();
          console.log(data);
          //fake data for testing current data from database has no crew for
          // data = {
          //   status: 'success',
          //   data: {
          //     flights: [
          //       {
          //         _id: '1',
          //         flightNumber: 'BA123',
          //         aircraftType: 'Boeing 747',
          //         from: 'LHR',
          //         to: 'JFK',
          //         weather: 'Clear',
          //         dateCreated: '2024-02-29T21:33:21.518Z',
          //         departure: '2024-02-29T22:33:21.518Z',
          //         arriving: '2024-03-01T04:33:21.518Z',
          //         actuallArrive: '2024-03-01T04:33:21.518Z',
          //         crewMembers: [
          //           {
          //             copilot: 'Jane Johnson',
          //           },
          //           {
          //             flightAttendant: 'Robert Brown',
          //           },
          //         ],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '1',
          //           },
          //         ],
          //       },
          //       {
          //         _id: '2',
          //         flightNumber: 'DL456',
          //         aircraftType: 'Airbus A380',
          //         from: 'LAX',
          //         to: 'NRT',
          //         weather: 'Rainy',
          //         dateCreated: '2024-03-01T12:15:30.123Z',
          //         departure: '2024-03-01T13:15:30.123Z',
          //         arriving: '2024-03-02T01:15:30.123Z',
          //         actuallArrive: '2024-03-02T03:15:30.123Z',
          //         crewMembers: [
          //           {
          //             captain: 'Emily Miller',
          //           },

          //           {
          //             flightAttendant: 'Grace Anderson',
          //           },
          //         ],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '2',
          //           },
          //         ],
          //       },
          //       {
          //         _id: '3',
          //         flightNumber: 'AF789',
          //         aircraftType: 'Boeing 777',
          //         from: 'CDG',
          //         to: 'SFO',
          //         weather: 'Sunny',
          //         dateCreated: '2024-03-02T08:45:00.000Z',
          //         departure: '2024-03-02T09:45:00.000Z',
          //         arriving: '2024-03-02T21:45:00.000Z',
          //         crewMembers: [],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '3',
          //           },
          //         ],
          //       },
          //       {
          //         _id: '4',
          //         flightNumber: 'LH012',
          //         aircraftType: 'Airbus A350',
          //         from: 'FRA',
          //         to: 'PEK',
          //         weather: 'Cloudy',
          //         dateCreated: '2024-03-03T18:30:45.678Z',
          //         departure: '2024-03-03T19:30:45.678Z',
          //         arriving: '2024-03-04T07:30:45.678Z',
          //         actuallArrive: '2024-03-04T07:30:45.678Z',
          //         crewMembers: [
          //           {
          //             captain: 'Henry Martinez',
          //           },
          //           {
          //             copilot: 'Ivy Taylor',
          //           },
          //         ],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '4',
          //           },
          //         ],
          //       },
          //       {
          //         _id: '5',
          //         flightNumber: 'EK345',
          //         aircraftType: 'Boeing 787',
          //         from: 'DXB',
          //         to: 'SYD',
          //         weather: 'Windy',
          //         dateCreated: '2024-03-04T22:00:00.000Z',
          //         departure: '2024-03-04T23:00:00.000Z',
          //         arriving: '2024-03-05T11:00:00.000Z',
          //         crewMembers: [
          //           {
          //             captain: 'Alice Anderson',
          //           },
          //           {
          //             copilot: 'Bob Brown',
          //           },
          //           {
          //             flightAttendant: 'Charlie Clark',
          //           },
          //         ],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '5',
          //           },
          //         ],
          //       },
          //       {
          //         _id: '6',
          //         flightNumber: 'SQ678',
          //         aircraftType: 'Airbus A380',
          //         from: 'SIN',
          //         to: 'LHR',
          //         weather: 'Rainy',
          //         dateCreated: '2024-03-05T12:00:00.000Z',
          //         departure: '2024-03-05T14:00:00.000Z',
          //         arriving: '2024-03-06T02:00:00.000Z',
          //         actuallArrive: '2024-03-06T04:00:00.000Z',
          //         crewMembers: [
          //           {
          //             captain: 'David Edwards',
          //           },
          //           {
          //             copilot: 'Eva Fisher',
          //           },
          //           {
          //             flightAttendant: 'Frank Green',
          //           },
          //         ],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '6',
          //           },
          //         ],
          //       },
          //       {
          //         _id: '7',
          //         flightNumber: 'QF123',
          //         aircraftType: 'Boeing 787',
          //         from: 'SYD',
          //         to: 'LAX',
          //         weather: 'Sunny',
          //         dateCreated: '2024-03-06T08:00:00.000Z',
          //         departure: '2024-03-06T10:00:00.000Z',
          //         arriving: '2024-03-06T18:00:00.000Z',
          //         crewMembers: [
          //           {
          //             captain: 'Grace Harris',
          //           },
          //           {
          //             copilot: 'Ivy Johnson',
          //           },
          //           {
          //             flightAttendant: 'Jack King',
          //           },
          //         ],
          //         specialRequirements: [
          //           {
          //             LVP: false,
          //             PBN: true,
          //             _id: '7',
          //           },
          //         ],
          //       },
          //     ],
          //   },
          // };

          let refinedData = data.data.flights.map((flight) => {
            let status = '';

            let checkCaptain = flight.crewMembers.some(
              (role) => 'captain' in role
            );
            let checkCoPilot = flight.crewMembers.some(
              (role) => 'copilot' in role
            );
            let checkFlightAttendant = flight.crewMembers.some(
              (role) => 'flightAttendant' in role
            );
            let checkCrew =
              checkCaptain && checkCoPilot && checkFlightAttendant;

            if (checkCaptain && checkCoPilot && checkFlightAttendant) {
              status = 'crew complete';
            } else if (
              !checkCaptain &&
              !checkCoPilot &&
              !checkFlightAttendant
            ) {
              status = 'no crew';
            } else if (!checkCaptain) {
              status = 'no captain';
            } else if (!checkCoPilot) {
              status = 'no co-pilot';
            } else if (!checkFlightAttendant) {
              status = 'no cabin crew';
            }

            return {
              ...flight,
              status,
            };
          });
          console.log(refinedData);

          if (activeTab === 'all') {
          }
          {
            setFlights(refinedData);
          }
          if (activeTab === 'no crew') {
            const filteredData = refinedData.filter(
              (flight) => flight.status === activeTab
            );
            setFlights(filteredData);
          }
          if (activeTab === 'crew not complete') {
            const filteredData = refinedData.filter(
              (flight) =>
                flight.status === 'no captain' ||
                flight.status === 'no co-pilot' ||
                flight.status === 'no cabin crew'
            );
            setFlights(filteredData);
          }
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchFlightsWithCrew();
    },
    [activeTab]
  );

  let flightlist = expand ? flights : flights.slice(0, 2);
  return (
    <div className="flightTable">
      <div className="flightTable__container">
        <div className="flightTable__frame">
          <div className="flightTable__frame__title">
            <h3 className="flightTable__title">Flight tables</h3>{' '}
            <span className="flightTable__count">
              {'('}
              {flights.length}
              {')'}
            </span>
          </div>

          <TabsForFlightTableWithCrew
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="flightTable__table">
          <div className="flightTable__labels">
            <div className="flightTable__label1">
              <p>Flight</p>
            </div>
            <div className="flightTable__label2">
              <p>Status</p>
            </div>
            <div className="flightTable__label3">
              <p>Actions</p>
            </div>
          </div>
          <ul className="flightTable__list">
            {/* map method return an array of FlightItem */}
            {flightlist.map((flight) => (
              <FlightItemWithCrew flight={flight} key={flight.flightNumber} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
//2tabs to toggle flights with or without crew

//3

export default FlightTableWithCrew;
