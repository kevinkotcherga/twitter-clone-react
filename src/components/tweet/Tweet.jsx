import React from 'react';

const Tweet = ({ tweet, user}) => {
  return (
    <div>
      <h2>@{tweet.author}</h2>
      <p>{tweet.message}</p>
    </div>
  );
};

export default Tweet;
