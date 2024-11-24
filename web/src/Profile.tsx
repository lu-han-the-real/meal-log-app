import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './service/authContext'; // Adjust the path as necessary

const Profile: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {user.Username}</p>
      <p><strong>Email:</strong> {user.Email}</p>
    </div>
  );
};

export default Profile;
