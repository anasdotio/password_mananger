import { cn } from '../lib/utils';

const Header = ({ title, icon, className, onclick }) => {
  return (
    <header
      className={cn('flex items-center justify-between px-4 py-3', className)}
    >
      <h1 className="text-xl font-semibold text-white">{title}</h1>

      {icon && (
        <button
          onClick={onclick}
          className="rounded-full bg-[#0C141B] p-2 text-white transition-colors hover:bg-[#1173D4]"
        >
          {icon}
        </button>
      )}
    </header>
  );
};

export default Header;
