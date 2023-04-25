import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user, onSeeMore }) => {
  const { image, designation, name, jobDescription } = user;

  const handleClick = () => {
    onSeeMore(name);
  };

  return (
    <div className="profile-card">
      <div className="card-image">
        <img src={image} alt="Profile" />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <h3>{designation}</h3>
        <p>{jobDescription}</p>
        <button onClick={handleClick}>See More</button>
      </div>
    </div>
  );
};

export default ProfileCard;