import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

export const CrewAvailability = () => {
  const [crew, setCrew] = useState([]);
  const [crewAvailable, setCrewAvailable] = useState([]);
  const [crewUnavailable, setCrewUnavailable] = useState([]);
  const [crewPto, setCrewPto] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [activeTab, setActiveTab] = useState(true);

  const splitCrew = (crewArr) => {
    const uCrew = [];
    const aCrew = [];
    const pCrew = [];

    crewArr.forEach((item) => {
      item.flightHours.available === 'Unavailable' && uCrew.push(item);
      // setCrewUnavailable([...crewUnavailable, { item }]);
      item.flightHours.available === 'PTO' && pCrew.push(item);
      // setCrewPto([...crewPto, { item }]);
      item.flightHours.available === 'available' && aCrew.push(item);
      // setCrewAvailable([...crewAvailable, { item }]);
    });

    setCrewUnavailable(uCrew);
    setCrewPto(pCrew);
    setCrewAvailable(aCrew);
  };

  useEffect(function () {
    const crewMembersFetch = async () => {
      try {
        const response = await fetch('api/v1/crew');
        const data = await response.json();
        setCrew(data.data.CrewMembers);
        splitCrew(data.data.CrewMembers);
        console.log(data.data.CrewMembers);
        console.log(crewUnavailable);
      } catch (error) {
        console.log(error);
      }
    };
    crewMembersFetch();
  }, []);

  return (
    <div>
      <h1>Crew Unavailable {crewUnavailable.length}</h1>
      <h1>Crew Available {crewAvailable.length}</h1>
      <h1>Crew PTO {crewPto.length}</h1>
      <h1>Crew TOTAL {crew.length}</h1>
      <Chartes>
        <div>
          <h1>Hello</h1>
        </div>
      </Chartes>
    </div>
  );
};

const data = {
  datasets: [
    {
      data: [10, 10, 10],
      backgroundColor: ['orange', 'green', 'red'],
      display: true,
      borderColor: '#D1D6DC',
    },
  ],
};

const Chartes = ({
  children,
  crewAvailable,
  crewUnavailable,
  crewPto,
  crew,
}) => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: -90,
          circumference: 180,
          cutout: '60%',
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <div>Text Here</div>
      </div>
      {children}
    </div>
  );
};
