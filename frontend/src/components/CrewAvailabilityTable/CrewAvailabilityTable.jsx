import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TbEyeFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { BsFilterSquare } from 'react-icons/bs';
import ModalCrewInfo from '../ModalCrewInfo';

const CrewAvailabilityTable = () => {
  // Modal code functionality
  let id = '';
  const [showModalCrewInfo, setShowModalCrewInfo] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 393);
  const [selectedCrewId, setSelectedCrewId] = useState(null);

  const toggleModalCrew = () => {
    setShowModalCrewInfo((prevShowModalCrewInfo) => !prevShowModalCrewInfo);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 393);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // End of modal functionality

  const [crew, setCrew] = useState([]);
  const [filteredCrew, setFilteredCrew] = useState([]);
  const [selectedTab, setSelectedTab] = useState('all_crew');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    // console.log(`Opening the Modal`);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    // console.log(`Closing the Modal`);
    setIsModalOpen(false);
  };

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  //   console.log(selectedFilters);

  const applyFilters = () => {
    let filteredData = crew;

    if (selectedTab !== 'all_crew') {
      filteredData = crew.filter(
        (crewMember) => crewMember.role === selectedTab
      );
    }

    if (selectedFilters.length > 0) {
      filteredData = filteredData.filter((crewMember) =>
        selectedFilters.includes(crewMember.flightHours.available.toLowerCase())
      );
    }

    setFilteredCrew(filteredData);
    closeModal();
  };

  const {
    data: crewData,
    isLoading: crewLoading,
    isError: crewError,
  } = useQuery({
    queryKey: ['crew'],
    queryFn: () => axios.get('/api/v1/crew/'),
    onSuccess: (data) => {
      setCrew(data.data.data.CrewMembers);
      setFilteredCrew(data.data.data.CrewMembers);
    },
  });

  const handleTabChange = (tab) => {
    setFilteredCrew(crew);
    setSelectedTab(tab);

    let filteredData = crew;

    if (tab !== 'all_crew') {
      filteredData = crew.filter((crewMember) => crewMember.role === tab);
    }

    if (selectedFilters.length > 0) {
      filteredData = filteredData.filter((crewMember) =>
        selectedFilters.includes(crewMember.flightHours.available.toLowerCase())
      );
    }

    setFilteredCrew(filteredData);
  };

  return (
    <>
      <div
        className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}
      >
        <div className="modal-container">
          <div className="modal-header">
            <h3>Filter By</h3>
            <button className="close-modal-btn" onClick={closeModal}>
              {/* <FaTimes /> */}X
            </button>
          </div>
          {/* modal-header - end */}

          <div className="modal-body">
            <h4>Status</h4>
            <div>
              <input
                type="checkbox"
                value="available"
                onChange={() => handleFilterChange('available')}
                checked={selectedFilters.includes('available')}
              />
              <label htmlFor="available">Available</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="unavailable"
                onChange={() => handleFilterChange('unavailable')}
                checked={selectedFilters.includes('unavailable')}
              />
              <label htmlFor="unavailable">Unavailable</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="pto"
                onChange={() => handleFilterChange('pto')}
                checked={selectedFilters.includes('pto')}
              />
              <label htmlFor="pto">PTO</label>
            </div>
          </div>
          {/* modal-body - end */}
          <button className="apply-filters-btn" onClick={applyFilters}>
            Show Results
          </button>
        </div>
        {/* modal-container - end */}
      </div>

      <div className="table-header">
        <h2>Select Crew</h2>
        {isMobileView && (
          <button className="crew-filter-icon" onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z"
                fill="#202020"
              />
              <path
                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                fill="#202020"
              />
              <path
                d="M6 16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16Z"
                fill="#202020"
              />
            </svg>
          </button>
        )}
        {/* <BsFilterSquare className="crew-filter-icon" onClick={openModal} /> */}
      </div>
      {/* Table Head - End */}
      <div className='desktopViewTabs'>
        <div className="tabs">
          <button
            className={`tab-btn ${selectedTab === 'all_crew' ? 'active' : ''}`}
            onClick={() => handleTabChange('all_crew')}
          >
            All Crew
          </button>
          <button
            className={`tab-btn ${selectedTab === 'pilot' ? 'active' : ''}`}
            onClick={() => handleTabChange('pilot')}
          >
            Pilots
          </button>
          <button
            className={`tab-btn ${
              selectedTab === 'second_pilot' ? 'active' : ''
            }`}
            onClick={() => handleTabChange('second_pilot')}
          >
            Co-Pilots
          </button>
          <button
            className={`tab-btn ${
              selectedTab === 'cabin_crew' ? 'active' : ''
            }`}
            onClick={() => handleTabChange('cabin_crew')}
          >
            Cabin Crew
          </button>
        </div>
        {!isMobileView && (
          <button className="crew-filter-icon" onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z"
                fill="#202020"
              />
              <path
                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                fill="#202020"
              />
              <path
                d="M6 16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16Z"
                fill="#202020"
              />
            </svg>
            <p className='desktopViewTabs__filterTab'>Filter</p>
          </button>
        )}
      </div>
      {/* Tabs - End */}
      <table className="crew-availability-table">
        <thead>
          {/* <tr>
            <th>Crew</th>
            <th>Status</th>
            <th>Flight Time</th>
            <th>Icon</th>
          </tr> */}
        </thead>
        <tbody>
          {filteredCrew.map(
            (member) => (
              (id = member._id),
              (
                <tr key={member._id}>
                  <td>
                    <p style={{ fontWeight: 'bold' }}>{member.name}</p>
                    <p className="gray-text">{member.role}</p>
                  </td>
                  <td>
                    <span
                      className={`status-cell ${member.flightHours.available.toLowerCase()}`}
                    >
                      {member.flightHours.available.toLowerCase() ===
                      'unavailable'
                        ? 'Crew Sick'
                        : member.flightHours.available.toLowerCase()}
                    </span>
                  </td>
                  <td>
                    {member.flightHours.thisMonth}
                    <span className="gray-text">/90hrs</span>
                  </td>
                  <td>
                    {isMobileView ? (
                      <NavLink className="crew-link" to={`/crew/${member._id}`}>
                        <TbEyeFilled className="view-crew-icon" />
                      </NavLink>
                    ) : (
                      <button
                        className="crew-link"
                        onClick={() => {
                          setSelectedCrewId(member._id);
                          toggleModalCrew();
                        }}
                        // onClick={() => toggleModalCrew()}
                      >
                        <p className="view-crew-icon">View</p>
                      </button>
                    )}
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
      {showModalCrewInfo && (
        <div
          className={
            showModalCrewInfo
              ? 'sliding-modal modal-animation'
              : 'sliding-modal'
          }
        >
          <div className="modal-content">
            <ModalCrewInfo onClickClose={toggleModalCrew} id={selectedCrewId} ticket={true} />
          </div>
        </div>
      )}
    </>
  );
};
export default CrewAvailabilityTable;
