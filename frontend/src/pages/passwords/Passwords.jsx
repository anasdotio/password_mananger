import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { lazy, Suspense, useEffect } from 'react';
import { getPasswords } from '../../features/passwords/passAPI';
import { Loader } from 'lucide-react';
const PasswordItem = lazy(() => import('../../components/PasswordItem'));

const Passwords = () => {
  const { passwords } = useAppSelector((state) => state.passwords);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPasswords());
  }, [dispatch]);

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

      <Suspense
        fallback={
          <div>
            <Loader className="absolute top-1/2 left-1/2 animate-spin" />
          </div>
        }
      >
        <div className="mt-4 space-y-2">
          {passwords.length === 0 ? (
            <p className="mt-20 text-center text-gray-400">
              No passwords found. Click the + icon to add a new password.
            </p>
          ) : (
            passwords?.map((item) => (
              <PasswordItem
                key={item._id}
                id={item._id}
                title={item.username}
                updated={item.updatedAt.split('T')[0]}
              />
            ))
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Passwords;
