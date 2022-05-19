import React from 'react';
import './suggestion.scss';

const Suggestion = ({ suggestion }) => {
  return (
    <div className='suggestion'>
      <div className="suggestionContainer">
        <div className="containerLeft">
          <img src={suggestion.img} alt="" />
          <div className="suggestionName">
            <p className='name'>{suggestion.name}</p>
            <p className='username'>@{suggestion.surname}</p>
          </div>
        </div>
        <div>
          <p className='buttonFollow'>Suivre</p>
        </div>

      </div>
    </div>
  );
};

export default Suggestion;
