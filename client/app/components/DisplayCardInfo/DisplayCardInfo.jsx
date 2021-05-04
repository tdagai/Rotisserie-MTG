import React, { useState } from 'react';
import ManaCost from './ManaCost.jsx';
import './DisplayCardInfo.css';

const DisplayCardInfo = ({ card, symbols, gridWithStash }) => {
  const [displayFrontFace, setDisplayFrontFace] = useState(true);
  const {
    normal: ff_image,
    name: ff_name,
    type_line: ff_type_line,
    flavor_text: ff_flavor_text,
    artist: ff_artist,
    power: ff_power,
    toughness: ff_toughness,
    loyalty: ff_loyalty
  } = card.ff;
  let {
    mana_cost: ff_mana_cost,
    oracle_text: ff_oracle_text
  } = card.ff;

  const parseSymbols = (str) => {
    if (str.length === 0) { return str; }
    const parsed = [];
    const replaced = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '{') {
        const symbStr = [];
        while (str[i] !== '}') {
          symbStr.push(str[i]);
          i++;
        }
        symbStr.push('}');
        parsed.push(symbStr.join(''));
      }
    }
    if (symbols !== null) {
      for (let i = 0; i < parsed.length; i++) {
        replaced.push(symbols[parsed[i]]);
      }
      return replaced;
    } else {
      return parsed;
    }
  };

  const parseOracleText = (str) => {
    const brokenString = str.split('\n');
    return brokenString;
  }

  ff_mana_cost = parseSymbols(ff_mana_cost);

  ff_oracle_text = parseOracleText(ff_oracle_text);

  return (
    <div className={`app-grid-top-row-right-col${gridWithStash ? '' : ' right-col-no-stash'}`}>
      <div id='display-card-info-image-container'>
        { ff_image && <img src={ff_image} alt='displayed card' ></img> }
      </div>
      <div id='display-card-info-text-container'>
        <div id='display-card-text-name-mana'>
          <b><p id='display-card-name' >{ff_name}</p></b>
          {ff_mana_cost && <ManaCost manaCost={ff_mana_cost} />}
        </div>
        <p id='display-card-type-line' >{ff_type_line}</p>
        {
          ff_oracle_text &&
          ff_oracle_text.map((line, index) => (
            <p key={index} className='display-card-oracle-text-line' >{line}</p>
          ))
        }
        {ff_flavor_text && <p id='display-card-flavor-text' ><i>{ff_flavor_text}</i></p>}
        {ff_power && <p id='display-card-p-t' ><b>{`${ff_power}/${ff_toughness}`}</b></p>}
        {ff_loyalty && <p id='display-card-loyalty' ><b>{`Loyalty: ${ff_loyalty}`}</b></p>}
        <p id='display-card-artist' >Illustrated by <i>{ff_artist}</i></p>
      </div>
    </div>
  )
}

export default DisplayCardInfo;