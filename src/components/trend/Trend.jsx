import React from 'react';
import './trend.scss';

const Trend = () => {
  return (
    <div className='trend'>
      <div className="container">
        <p className='categorie'>Tendance dans la categorie France</p>
        <p className='hashtag'>#Carrefour</p>
        <p className='numberOfTweets'>4953 tweets</p>
      </div>
    </div>
  );
};

export default Trend;
