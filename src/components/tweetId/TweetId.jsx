import React from 'react';
import { useLocation } from "react-router-dom";
import CommentTweet from '../commentTweet/CommentTweet';

const TweetId = () => {
  // Récupération du props 'tweet' depuis Tweet.jsx
  const location = useLocation();
  const { tweet } = location.state;
  const { user } = location.state;
  // const { user } = location.state;
  console.log(tweet);
  console.log(user);

  return (
    <div>
      <p>@{tweet.author}</p>
      <p>{tweet.message}</p>
      <CommentTweet tweet={tweet} />
    </div>
  );
};

export default TweetId;
