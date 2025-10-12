import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="">
      <div className="flex items-center rounded-lg bg-[#1E293B] px-3 py-2 text-gray-400">
        <Search className="mr-2 h-4 w-4" />
        <input
          type="text"
          placeholder="Search Passwords"
          className="w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
