import React from 'react';


const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Username:</span> {user.username}
      </p>
    
    </div>
  );
};

export default UserCard;
