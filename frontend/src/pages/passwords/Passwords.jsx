import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PasswordItem from '../../components/PasswordItem';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Passwords = () => {
  const passwords = [
    { title: 'Instagram Password', updated: '2 days ago' },
    { title: 'Email Password', updated: '1 week ago' },
    { title: 'Bank Account Password', updated: '3 weeks ago' },
    { title: 'Social Media Password', updated: '1 month ago' },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      <Header
        onclick={() => navigate('/add-password')}
        className="justify-end space-x-40"
        title="Passwords"
        icon={<Plus className="h-5 w-5 text-white" />}
      />
      <SearchBar />
      <div className="mt-4 space-y-2">
        {passwords.map((item, idx) => (
          <PasswordItem key={idx} title={item.title} updated={item.updated} />
        ))}
      </div>
    </div>
  );
};

export default Passwords;
