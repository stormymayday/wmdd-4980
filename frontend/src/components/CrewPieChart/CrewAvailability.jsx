import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

export const CrewAvailability = () => {
  const [crew, setCrew] = useState([]);
  const [crewAvailable, setCrewAvailable] = useState([]);
  const [crewUnavailable, setCrewUnavailable] = useState([]);
  const [crewPto, setCrewPto] = useState([]);
  // const [isLOaded, setIsLOaded] = useState(false);

  const [pieChartData, setPieChartData] = useState({
    datasets: [
      {
        data: [1, 4, 3],
        backgroundColor: ['#e7a238', '#359471', '#d93728'],
        display: true,
        borderColor: 'transparent',
      },
    ],
  });

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
    // setPieChartData({
    //   datasets: [
    //     {
    //       data: [crewAvailable.length, crewUnavailable.length, crewPto.length],
    //       backgroundColor: ['#e7a238', '#359471', '#d93728'],
    //       display: true,
    //       borderColor: 'transparent',
    //     },
    //   ],
    // });
  };

  useEffect(function () {
    const crewMembersFetch = async () => {
      try {
        const response = await fetch('api/v1/crew');
        const data = await response.json();

        setCrew(data.data.CrewMembers);
        splitCrew(data.data.CrewMembers);
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
      <div className="pie-chart__box">
        <Doughnut
          data={{
            datasets: [
              {
                data: [
                  crewAvailable.length,
                  crewUnavailable.length,
                  crewPto.length,
                ],
                backgroundColor: ['#e7a238', '#359471', '#d93728'],
                display: true,
                borderColor: 'transparent',
              },
            ],
          }}
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
            cutout: '85%',
            maintainAspectRatio: true,
            responsive: true,
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <div className="pie-chart__box-total">
            Total Crew{' '}
            <p className="pie-chart__box-total-number">{crew.length}</p>
          </div>
        </div>
        <div className="pie-chart__box__colors">
          <div className="pie-chart__box__colors-box">
            <div className="pie-chart__box__colors-green"></div>
            <p>Available</p>
          </div>
          <div className="pie-chart__box__colors-box">
            <div className="pie-chart__box__colors-orange"></div>
            <p>Unavailable</p>
          </div>
          <div className="pie-chart__box__colors-box">
            <div className="pie-chart__box__colors-red"></div>
            <p>PTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};