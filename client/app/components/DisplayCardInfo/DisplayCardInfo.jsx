import React from 'react';
import './DisplayCardInfo.css';

const DisplayCardInfo = ({ card }) => {
  const { normal: image, name, mana_cost, type_line, oracle_text, flavor_text, artist, power, toughness, loyalty } = card;

  const parseOracle = () => {

  }

  return (
    <div id='app-grid-top-row-right-col'>
      <div id='display-card-info-image-container'>
        {
          image
            ? <img src={image} alt='displayed card' ></img>
            : <div id='no-card-to-display'></div>
        }
      </div>
      <div id='display-card-info-text-container'>
        <div id='display-card-text-name-mana'>
          <b><p id='display-card-name' >{name}</p></b>
          <p id='display-card-mana' >{mana_cost}</p>
        </div>
        <p id='display-card-type-line' >{type_line}</p>
        { oracle_text && <p id='display-card-oracle-text' >{oracle_text}</p> }
        { flavor_text && <p id='display-card-flavor-text' ><i>{flavor_text}</i></p> }
        { power && <p id='display-card-p-t' ><b>{`${power}/${toughness}`}</b></p> }
        { loyalty && <p id='display-card-loyalty' ><b>{`Loyalty: ${loyalty}`}</b></p> }
        <p id='display-card-artist' >Illustrated by <i>{artist}</i></p>
      </div>
    </div>
  )
}

export default DisplayCardInfo;