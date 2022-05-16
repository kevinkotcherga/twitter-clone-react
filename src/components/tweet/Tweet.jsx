import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import './tweet.scss';

const Tweet = ({ tweet, user}) => {
  const [comments, setComments] = useState(false);

  return (
    <div className='tweet'>
      {comments ? (
        <p>Hello</p>
      ) : (
        <div>
        <Link to={`/users/${tweet.authorId}`} state={{tweet: tweet}}>
                <h2>@{tweet.author}</h2>
              </Link>
              <p>{tweet.message}</p>
              <div className="icons">
                <div className="test" onClick={() => setComments(true)}>test</div>
                <Link to={`/tweets/${tweet.id}`} state={{tweet: tweet}}><FaRegComment />{tweet.comments ? (tweet.comments.length) : "0"}</Link>
                <AiOutlineRetweet />
                <AiOutlineHeart />
                <IoShareOutline />
              </div>
            </div>
      )}
    </div>
  );
};

export default Tweet;
