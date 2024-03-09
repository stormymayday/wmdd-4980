import { Outlet } from 'react-router-dom';
import { Navbar, Header, Sidebar } from '../components';
import { createContext, useContext, useState } from 'react';

import '../../SASS/main.scss';

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: 'Jack' };

  const [lol, setLol] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        user,
      }}
    >
      <main className="dashboard">
        <>
          <Header />
          <Sidebar />
          <Navbar />
          <Outlet />
        </>
      </main>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
