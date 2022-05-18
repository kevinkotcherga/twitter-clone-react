import React from 'react';
import './widgets.scss';
import { BsSearch } from "react-icons/bs";

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='inputContainer'>
        <BsSearch style={{ marginRight:'15px'}}/>
        <input type="text" placeholder='Recherche Twitter'/>
      </div>
      <div className='trendContainer'>
        <span className='trendTitle'>Tendances pour vous</span>
      </div>
    </div>
  );
};

export default Widgets;
