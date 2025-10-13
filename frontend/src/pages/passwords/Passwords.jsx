import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PasswordItem from '../../components/PasswordItem';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const Passwords = () => {
  const navigate = useNavigate();

  const { passwords } = useAppSelector((state) => state.passwords);

  return (
    <div className="p-4">
      <Header
        onclick={() => navigate('/add-password')}
        className="justify-end space-x-40"
        title="Passwords"
        icon={<Plus className="h-5 w-5 text-white" />}
      />
      <SearchBar />
      <div className="mt-4 space-y-2">
        {passwords.length === 0 ? (
          <p className="mt-20 text-center text-gray-400">
            No passwords found. Click the + icon to add a new password.
          </p>
        ) : (
          passwords?.map((item, idx) => (
            <PasswordItem key={idx} title={item.title} updated={item.updated} />
          ))
        )}
      </div>
    </div>
  );
};

export default Passwords;
