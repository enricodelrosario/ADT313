import React from 'react';

const Profile = ({ name, email }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '25px', margin: '25px' }}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;