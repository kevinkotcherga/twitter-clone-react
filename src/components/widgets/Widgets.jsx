import React from 'react';
import './widgets.scss';
import { BsSearch } from "react-icons/bs";
import Trend from '../trend/Trend';
import { trends } from '../../data';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='inputContainer'>
        <BsSearch style={{ marginRight:'15px'}}/>
        <input type="text" placeholder='Recherche Twitter'/>
      </div>
      <div className='trendContainer'>
        <p className='trendTitle'>Tendances pour vous</p>
        {trends.map((trend) => (
          <Trend key={trend.id} categories={trend.categories} hashtag={trend.hashtag} tweets={trend.tweets} />
        ))}
        <p className='buttonSeeMore'>Voir plus</p>
      </div>
    </div>
  );
};

export default Widgets;
