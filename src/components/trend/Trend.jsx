import React from 'react';
import './trend.scss';

const Trend = ({ categories, hashtag, tweets }) => {
  return (
    <div className='trend'>
      <div className="container">
        <p className='categorie'>Tendance dans la categorie {categories}</p>
        <p className='hashtag'>#{hashtag}</p>
        <p className='numberOfTweets'>{tweets} tweets</p>
      </div>
    </div>
  );
};

export default Trend;
