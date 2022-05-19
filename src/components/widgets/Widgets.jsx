import React from 'react';
import './widgets.scss';
import { BsSearch } from "react-icons/bs";
import Trend from '../trend/Trend';
import { trends, suggestions } from '../../data';
import Suggestion from '../suggestion/Suggestion';

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
      <div className="suggestionsContainer">
        <p className='suggestionsTitle'>Suggestions</p>
        {suggestions.map((suggestion) => (
          <Suggestion key={suggestion.id} suggestion={suggestion}/>
        ))}
        <p className='buttonSeeMore'>Voir plus</p>
      </div>
      <div className="conditions">
        <p>
          Conditions d’utilisation
          Politique de Confidentialité
          Politique relative aux cookies
          Accessibilité
          Informations sur les publicités
          Plus
          © 2022 Twitter, Inc.
        </p>
      </div>
    </div>
  );
};

export default Widgets;
