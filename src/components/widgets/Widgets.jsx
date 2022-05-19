import React from 'react';
import './widgets.scss';
import { BsSearch } from "react-icons/bs";
import Trend from '../trend/Trend';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='inputContainer'>
        <BsSearch style={{ marginRight:'15px'}}/>
        <input type="text" placeholder='Recherche Twitter'/>
      </div>
      <div className='trendContainer'>
        <p className='trendTitle'>Tendances pour vous</p>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
};

export default Widgets;
