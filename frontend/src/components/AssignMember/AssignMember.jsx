import PropTypes from 'prop-types';
import TabsForFlightTableWithCrew from '../flightTableWithCrew/TabsForFlightTableWithCrew';
import '../../../SASS/components/_flightTableWithCrew.scss';
import CrewAssignList from './CrewAssignList';
//1fake data structure
import { useEffect, useState } from 'react';
import FlightItemWithCrew from '../flightTableWithCrew/FlightItemWithCrew';

function AssignMember() {
  const [flights, setFlights] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [pilots, setPilots] = useState([]);
  const [copilots, setCopilots] = useState([]);
  const [cabinCrew, setCabinCrew] = useState([]);
  //member1===pilot? member2~3===copilot?
  const handleClick = async (id) => {
    // // Fetch the crew member object using the id
    // const res = await fetch(`/api/v1/crew/${id}`);
    // let data = await res.json();

    // console.log(data);
    // Fetch the crew member object using the id
    const res = await fetch(`/api/v1/crew/${id}`);
    let data = await res.json();
    const selectedCrew = data.data.CrewMember;
    if (selectedCrew.role === 'pilot' && pilots.length < 1) {
      setPilots([...pilots, selectedCrew]);
    } else if (selectedCrew.role === 'second_pilot' && copilots.length < 2) {
      setCopilots([...copilots, selectedCrew]);
    } else if (selectedCrew.role === 'Cabin Crew' && cabinCrew.length < 6) {
      setCabinCrew([...cabinCrew, selectedCrew]);
    }

    console.log(data);
  };
  //now I'm able to fetch data when clicking the btn

  //to-do----------------------------------
  //Need an array to store the fetched crew object

  //if the object is updated the AssignMember component should be rerendered
  useEffect(function () {
    async function fetchFlightInfoForAssign() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/v1/flights/65e1519735fcf23c9fd95c2c');
        let data = await res.json();
        const fakeData = {
          flightNumber: 'LA-573',
          aircraftType: 'Boeing 737',
          from: 'New York',
          to: 'Los Angeles',
          weather: 'Clear skies',
          dateCreated: '2024-02-29T08:00:00.000Z',
          _id: '65e1519735fcf23c9fd95c2c',
          specialRequirements: [
            {
              PBN: true,
              LVP: false,
              _id: '65e1519735fcf23c9fd95c2d',
            },
          ],
          arriving: '2024-03-01T12:00:00.000Z',
          departure: '2024-02-29T10:00:00.000Z',
          crewMembers: [
            {
              cabinCrew: {
                cabin1: '',
                cabin2: '',
                cabin3: '',
                cabin4: '',
                cabin5: '',
                cabin6: '',
              },
              member1: {
                flightHours: {
                  total: 1200,
                  thisMonth: 80,
                  available: 'available',
                },
                name: 'John Doe',
                FlightNumber: '65ef72f74a24252a4c77df8d',
                email: 'john.doe@example.com',
                likesEmails: true,
                certifications: [
                  'Private Pilot License',
                  'Commercial Pilot License',
                ],
                _id: '65dec52a419ae732646a2adf',
                role: 'pilot',
                __v: 0,
              },
              member2: {
                flightHours: {
                  total: 300,
                  thisMonth: 40,
                  available: 'available',
                },
                name: 'Alice Smith',
                FlightNumber: '65ef9784c59362a2d493ae51',
                email: 'repiklleonid@gmail.com',
                likesEmails: true,
                certifications: ['PBN'],
                _id: '65e95aeb67faa5163e37f544',
                role: 'Co-Pilot',
                __v: 0,
              },
              member3: {
                flightHours: {
                  total: 400,
                  thisMonth: 30,
                  available: 'available',
                },
                name: 'David Brown',
                FlightNumber: '',
                email: 'repiklleonid@gmail.com',
                likesEmails: true,
                certifications: ['LVP'],
                _id: '65e95b0267faa5163e37f548',
                role: 'Co-Pilot',
                __v: 0,
              },
              _id: '65e1519735fcf23c9fd95c2e',
            },
          ],
          __v: 0,
        };
        data = fakeData;
        console.log(data);
        console.log(data.crewMembers[0]);
        const selectedflight = data.crewMembers[0];

        setFlights(selectedflight);
        console.log(selectedflight);

        // Iterate over the crewMembers array and assign crew members to the appropriate states
        //selectedflight.crewMembers is not an array
        //flights is actually an nested object
        flights.crewMembers.forEach((crewMember) => {
          console.log(crewMember, 'hi');
          if (crewMember.member1.role === 'pilot') {
            setPilots((prevPilots) => [...prevPilots, crewMember]);
          } else if (
            crewMember.member2.role === 'second_pilot' ||
            crewMember.member3.role === 'second_pilot'
          ) {
            setCopilots((prevCopilots) => [...prevCopilots, crewMember]);
          } else if (
            crewMember.cabinCrew.cabin1 != '' ||
            crewMember.cabinCrew.cabin2 != '' ||
            crewMember.cabinCrew.cabin3 != '' ||
            crewMember.cabinCrew.cabin4 != '' ||
            crewMember.cabinCrew.cabin5 != '' ||
            crewMember.cabinCrew.cabin6 != ''
          ) {
            setCabinCrew((prevCabinCrew) => [...prevCabinCrew, crewMember]);
          }
        });

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
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFlightInfoForAssign();
  }, []);

  return (
    <>
      <h1>
        {'Flight'} {flights.flightNumber}
      </h1>
      <div className="flightDetail">
        {/* missing roles for crew in flighs list */}
        <p>
          {pilots.length}/1
          <span> Pilots</span>
        </p>
        <p>
          {copilots.length}/2
          <span> Co-Pilots</span>
        </p>
        <p>
          {cabinCrew.length}/6
          <span> Cabin Crew</span>
        </p>
        <CrewAssignList handleClick={handleClick} />
      </div>
    </>
  );
}
//2tabs to toggle flights with or without crew

//3

export default AssignMember;
