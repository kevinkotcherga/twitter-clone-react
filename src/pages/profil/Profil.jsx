import React from 'react';
import { useLocation } from 'react-router-dom';

const Profil = () => {
  // Récupération du props 'tweet' depuis Tweet.jsx
  const location = useLocation();
  const { tweet } = location.state;
  const { user } = location.state;
  // const { user } = location.state;
  console.log(tweet);
  console.log(user);
  return (
    <div>
      <h1>@{tweet.author}</h1>
    </div>
  );
};

export default Profil;
