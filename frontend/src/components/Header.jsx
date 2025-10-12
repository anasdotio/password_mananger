import { cn } from '../lib/utils';

const Header = ({ title, icon, className, onclick }) => {
  return (
    <div className={cn('flex items-center mb-4', className)}>
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <button
        onClick={onclick}
        className="rounded-full bg-blue-500 p-2 transition hover:bg-blue-600"
      >
        {icon}
      </button>
    </div>
  );
};

export default Header;
