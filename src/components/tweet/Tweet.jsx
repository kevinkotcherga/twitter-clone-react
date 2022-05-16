import React from 'react';
import { Link } from 'react-router-dom';

const Tweet = ({ tweet, user}) => {
  console.log(user);
  return (
    <div>
      <h2>@{tweet.author}</h2>
      <p>{tweet.message}</p>
      <Link to={`/tweet/${tweet.id}`} state={{tweet: tweet}}>Voir les commentaires ({tweet.comments ? (tweet.comments.length) : "0"})</Link>
    </div>
  );
};

export default Tweet;
