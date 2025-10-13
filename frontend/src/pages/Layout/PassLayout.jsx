import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { KeyRound, Settings, WandSparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const PassLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#101922]">
      {/* Outlet scrolls if content is tall */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Fixed Bottom Nav */}
      <div className="flex h-16 items-center justify-around border-t border-[#323C4C]">
        <NavLink
          to="/passwords"
          className={({ isActive }) =>
            cn(
              'flex flex-col items-center text-white',
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
              'flex flex-col items-center text-white',
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
              'flex flex-col items-center text-white',
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
