import { LayoutDashboard } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const InstructorDashboard = () => {
  console.log("Rendering InstructorDashboard");

  const UserLinks = [
    {
      title: 'Dashboard',
      link: '/instructor/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Tutor Dashboard',
      link: '/tutor/dashboard',
      icon: LayoutDashboard,
    },
  ];

  return (
    <div className='h-screen w-1/6 flex flex-col justify-between shadow-sm shadow-primary pt-10'>
      <div className='text-primary font-bold text-2xl flex justify-center items-center'>
        NLEARN
      </div>
      <div className='flex flex-col justify-start items-center gap-2 w-full'>
        {UserLinks.map((data, index) => (
          <NavLink
            key={index}
            to={data.link}
            className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'
          >
            <span className='flex flex-row items-center justify-start gap-2'>
              {data.icon && React.createElement(data.icon, { size: 20 })}
              {data.title}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default InstructorDashboard;
