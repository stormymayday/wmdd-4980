import { Logo } from '../components';
import { FaBell } from 'react-icons/fa';
import { BiSolidSearch } from 'react-icons/bi';
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header-search">
        <BiSolidSearch className="search-icon" />
        <input
          type="text"
          placeholder="Look for crew member, flight status or information"
        />
        <FaBell className="header-bell" />
      </div>
    </header>
  );
};
export default Header;
