import React from 'react';
import { useAuth } from './service/authContext'; // Adjust the path as necessary

const Profile: React.FC = () => {
  const { user } = useAuth();

  console.log('profile:user', user);
  console.log('profile:userName', user?.Username);
  console.log('profile:userEmail', user?.Email);
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
