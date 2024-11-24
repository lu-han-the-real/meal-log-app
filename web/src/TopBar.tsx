import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './service/authContext'; // Adjust the path as necessary
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSignOut = () => {
    setUser(undefined);
    localStorage.removeItem('user'); // Or use Cookies.remove('user') if using cookies
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className={styles.TopBar}>
      <div className={styles.avatar} onClick={() => setShowModal(!showModal)}>
        <div className={styles.avatarBadge}>
          <span>{user.Username.charAt(0)}</span>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default TopBar; 
