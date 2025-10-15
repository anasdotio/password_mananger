import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PasswordItem from '../../components/PasswordItem';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { getPasswords } from '../../features/passwords/passAPI';

const Passwords = () => {
  const { passwords } = useAppSelector((state) => state.passwords);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPasswords());
  }, [dispatch, navigate]);

  console.log(passwords);

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
          passwords?.map((item) => (
            <PasswordItem
              key={item._id}
              title={item.username}
              updated={item.updatedAt.split('T')[0]}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Passwords;
