import React from 'react';
import CommentTweet from '../commentTweet/CommentTweet';

const Tweet = ({ tweet, user}) => {
  return (
    <div>
      <h2>@{tweet.author}</h2>
      <p>{tweet.message}</p>
      <CommentTweet tweet={tweet} user={user}/>
    </div>
  );
};

export default Tweet;
