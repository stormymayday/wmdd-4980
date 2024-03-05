import React from 'react';

import { BiSolidDashboard } from 'react-icons/bi';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaPlaneUp } from 'react-icons/fa6';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';

const links = [
  {
    text: 'dashboard',
    path: 'select-crew',
    icon: <BiSolidDashboard />,
  },
  {
    text: 'tracking',
    path: 'tracking',
    icon: <MdAccessTimeFilled />,
  },
  {
    text: 'create',
    path: 'create-flight',
    icon: <FaPlaneUp />,
  },
  {
    text: 'assign',
    path: 'assign-crew',
    icon: <FaCalendarCheck />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <FaCircleUser />,
  },
];

export default links;
