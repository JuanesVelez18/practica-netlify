import React from 'react';

const UserCard = ({ user }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <img src={user.picture.large} alt="User profile" />
      </div>
      <div className="text-white text-center mt-5">
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
      </div>
    </div>
  );
};

export default UserCard;
