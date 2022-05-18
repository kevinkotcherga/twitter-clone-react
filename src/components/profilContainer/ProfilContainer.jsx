import React from 'react';
import './profilContainer.scss';

const ProfilContainer = ({ user }) => {
  return (
    <div className='profilContainer'>
      <img src="https://thispersondoesnotexist.com/image" alt="" />
      <p>{user.displayName}</p>
    </div>
  );
};

export default ProfilContainer;
