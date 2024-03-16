import PropTypes from 'prop-types';
import TabsForFlightTableWithCrew from '../flightTableWithCrew/TabsForFlightTableWithCrew';
import '../../../SASS/components/_flightTableWithCrew.scss';
import CrewAssignList from './CrewAssignList';
//1fake data structure
import { useEffect, useState } from 'react';
import FlightItemWithCrew from '../flightTableWithCrew/FlightItemWithCrew';
import ConfirmPage from './ConfirmPage';

function AssignMember() {
  const [flights, setFlights] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [pilots, setPilots] = useState([]);
  const [copilots, setCopilots] = useState([]);
  const [cabinCrew, setCabinCrew] = useState([]);
  const [crewIdForUpdate, setCrewIdForUpdate] = useState([]);
  const [flightDataForPatch, setFlightDataForPatch] = useState({
    crewMembers: [
      {
        member1: null,
        member2: null,
        member3: null,
        cabinCrew: {
          cabin1: null,
          cabin2: null,
          cabin3: null,
          cabin4: null,
          cabin5: null,
          cabin6: null,
        },
      },
    ],
  });
  let id = '65e2cf76b21bd035fac6ed05';

  const handleClick = async (id) => {
    // ... fetch crew member ...
    const res = await fetch(`/api/v1/crew/${id}`);
    let data = await res.json();
    const selectedCrew = data.data.CrewMember;

    let updatedFlightData = { ...flightDataForPatch };

    console.log(crewIdForUpdate);

    if (selectedCrew.role === 'pilot' && pilots.length < 1) {
      setPilots([...pilots, selectedCrew]);
      setCrewIdForUpdate((prevIds) => [...prevIds, id]);
      updatedFlightData.crewMembers[0].member1 = selectedCrew.name;
    } else if (selectedCrew.role === 'second_pilot' && copilots.length < 2) {
      setCopilots([...copilots, selectedCrew]);
      setCrewIdForUpdate((prevIds) => [...prevIds, id]);
      if (!updatedFlightData.crewMembers[0].member2) {
        updatedFlightData.crewMembers[0].member2 = selectedCrew.name;
      } else {
        updatedFlightData.crewMembers[0].member3 = selectedCrew.name;
      }
    } else if (selectedCrew.role === 'Cabin Crew' && cabinCrew.length < 6) {
      setCabinCrew([...cabinCrew, selectedCrew]);
      setCrewIdForUpdate((prevIds) => [...prevIds, id]);
      for (let i = 1; i <= 6; i++) {
        if (!updatedFlightData.crewMembers[0].cabinCrew[`cabin${i}`]) {
          updatedFlightData.crewMembers[0].cabinCrew[`cabin${i}`] =
            selectedCrew.name;
          break;
        }
      }
    }

    setFlightDataForPatch(updatedFlightData);
    console.log(flightDataForPatch);
  };

  useEffect(() => {
    console.log(flights);
  });
  useEffect(function () {
    async function fetchFlightInfoForAssign() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/v1/flights/${id}`);
        // 65e2cf76b21bd035fac6ed05
        // /api/v1/flights/65e1519735fcf23c9fd95c2c
        let data = await res.json();

        // const selectedflight = data.crewMembers[0];
        const selectedflight = data.data.flight;

        setFlights(selectedflight);
        console.log(flights);

        selectedflight.crewMembers.forEach((crewMember) => {
          if (crewMember.member1) {
            setPilots((prevPilots) => [...prevPilots, crewMember.member1]);
          }
          if (crewMember.member2) {
            setCopilots((prevCopilots) => [
              ...prevCopilots,
              crewMember.member2,
            ]);
          }
          if (crewMember.member3) {
            setCopilots((prevCopilots) => [
              ...prevCopilots,
              crewMember.member3,
            ]);
          }
          Object.values(crewMember.cabinCrew).forEach((cabinMember) => {
            if (cabinMember) {
              setCabinCrew((prevCabinCrew) => [...prevCabinCrew, cabinMember]);
            }
          });
        });
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    console.log(pilots + ' and ' + copilots + ' and ' + cabinCrew);
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
      <button>Go to ConfirmPage</button>
      <ConfirmPage
        id={id}
        crewIdForUpdate={crewIdForUpdate}
        flightDataForPatch={flightDataForPatch}
        flights={flights}
      />
    </>
  );
}

export default AssignMember;
