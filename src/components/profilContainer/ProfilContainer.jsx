import React from 'react';
import './profilContainer.scss';
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ProfilContainer = ({ user }) => {
  return (
    <div className='profilContainer'>
      <div className='container'>
        <div className='pictureName'>
          <img src={user.photoURL} alt="" />
          <p>@{user.displayName}</p>
        </div>
        <BiDotsHorizontalRounded />
      </div>
    </div>
  );
};

export default ProfilContainer;
