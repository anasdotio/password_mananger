import { Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PasswordItem = ({ title, updated, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/password-details/${id}`)}
      className="flex cursor-pointer items-center rounded-lg bg-[#1E293B] p-3"
    >
      <div className="mr-3 rounded-xl bg-[#0F172A] p-3">
        <Key className="h-5 w-5 text-blue-400" />
      </div>
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-400">Last updated {updated}</p>
      </div>
    </div>
  );
};

export default PasswordItem;
