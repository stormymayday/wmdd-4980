import { Outlet } from 'react-router-dom';
import { Navbar, Header } from '../components';
import { createContext, useContext, useState } from 'react';

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
      <main>
        <>
          <Header />
          <div className="dashboard-page">
            Dashboard Layout
            <Outlet />
          </div>
          <Navbar />
        </>
      </main>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
