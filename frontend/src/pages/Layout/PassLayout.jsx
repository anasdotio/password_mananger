import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { KeyRound, Settings, WandSparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const PassLayout = () => {
  return (
    <div className="relative h-screen w-full bg-[#101922]">
      <Outlet />

      <div className="absolute inset-x-0 bottom-3 flex h-16 items-center justify-between border-t-1 border-[#323C4C]">
        <NavLink
          to="/passwords"
          className={({ isActive }) =>
            cn(
              'box flex flex-col items-center text-white',
              isActive && 'text-[#1173D4]',
            )
          }
        >
          <KeyRound size={20} />
          <span className="text-sm font-semibold">Passwords</span>
        </NavLink>
        <NavLink
          to="/generator"
          className={({ isActive }) =>
            cn(
              'box flex flex-col items-center text-white',
              isActive && 'text-[#1173D4]',
            )
          }
        >
          <WandSparkles size={20} />
          <span className="text-sm font-semibold">Generator</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              'box flex flex-col items-center text-white',
              isActive && 'text-[#1173D4]',
            )
          }
        >
          <Settings size={20} />
          <span className="text-sm font-semibold">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default PassLayout;
