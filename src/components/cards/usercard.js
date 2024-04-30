import React from 'react';


const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Username:</span> {user.username}
      </p>
      <p>
        <span>Password:</span> {user.password} {/* Just for illustration, should not display actual passwords */}
      </p>
  
    </div>
  );
};

export default UserCard;
