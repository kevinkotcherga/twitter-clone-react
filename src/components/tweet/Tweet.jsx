import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import './tweet.scss';

const Tweet = ({ tweet, user}) => {
  return (
    <div className='tweet'>
      <div className='pictureContainer'>
        <img src={tweet.picture} alt="" />
      </div>
      <div className='tweetContainer'>
      <Link to={`/users/${tweet.authorId}`} state={{tweet: tweet}}>
        <div className='tweetHeader'>
          <h2>@{tweet.author}</h2>
        </div>
        </Link>
        <p>{tweet.message}</p>
        <div className="icons">
          <Link to={`/tweets/${tweet.id}`} state={{tweet: tweet}}><FaRegComment style={{ marginRight:'5px'}}/>
            {/* {tweet.comments ? (tweet.comments.length) : "0"} */}
            {tweet.comments}
          </Link>
          <Link to={`/tweets/${tweet.id}`}><AiOutlineRetweet style={{ cursor:'pointer', marginRight:'5px'}} />{tweet.retweet}</Link>
          <Link to={`/tweets/${tweet.id}`}><AiOutlineHeart style={{ cursor:'pointer', marginRight:'5px'}}/>{tweet.like}</Link>
          <Link to={`/tweets/${tweet.id}`}><IoShareOutline style={{ cursor:'pointer', marginRight:'5px'}}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
