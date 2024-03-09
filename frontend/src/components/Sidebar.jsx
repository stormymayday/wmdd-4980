import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    // <div className="sidebar-container">
    //   <div className="content">
    //     <header></header>
    //     <NavLinks isBigSidebar />
    //   </div>
    // </div>
    <nav className="sidebar">
      {links.map((link) => {
        const { text, path, icon } = link;

        return (
          <NavLink className="nav-link" to={path} key={text}>
            <span className="icon">{icon}</span>
            <p>{text}</p>
          </NavLink>
        );
      })}
    </nav>
  );
};
export default Sidebar;
