import { Logo } from '../components';
import { FaBell } from 'react-icons/fa';
import { BiSolidSearch } from 'react-icons/bi';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function SearchResult({ isLoading, flights, users, searchTerm }) {
  const filteredFlights = flights.filter((flight) =>
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if there are any matching flights or users
  const hasMatches = filteredFlights.length > 0 || filteredUsers.length > 0;

  return (
    <>
      {searchTerm && hasMatches && (
        <div>
          <h2>Flights</h2>
          {filteredFlights.map((flight) => (
            <div key={flight.id}>{flight.flightNumber}</div>
          ))}
          <h2>Users</h2>
          {filteredUsers.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
      {!hasMatches && searchTerm && <div>No matches found</div>}
    </>
  );
}

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [flights, setFlights] = useState([]);
  const [users, setUsers] = useState([]);

  const {
    data: flightsData,
    isLoading: flightsLoading,
    isError: flightsError,
  } = useQuery({
    queryKey: ['flights'],
    queryFn: () => axios.get('/api/v1/flights/'),
    onSuccess: (data) => setFlights(data.data.data.flights),
  });

  const {
    data: crewData,
    isLoading: crewLoading,
    isError: crewError,
  } = useQuery({
    queryKey: ['crew'],
    queryFn: () => axios.get('/api/v1/users/'),
    onSuccess: (data) => setUsers(data.data.data.users),
  });

  console.log(users);
  console.log(flights);

  return (
    <header className="header">
      <Logo />
      <div className="header-search">
        <BiSolidSearch className="search-icon" />
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Look for crew member, flight status or information"
        />

        <FaBell className="header-bell" />
      </div>
      <SearchResult
        isLoading={flightsLoading || crewLoading}
        flights={flights}
        users={users}
        searchTerm={searchTerm}
      />
    </header>
  );
};
export default Header;