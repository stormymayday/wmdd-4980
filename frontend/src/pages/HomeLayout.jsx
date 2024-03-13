import { Outlet } from 'react-router-dom';
import AssignMember from '../components/AssignMember/AssignMember';

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      {/* <AssignMember /> */}
    </div>
  );
};

export default HomeLayout;
