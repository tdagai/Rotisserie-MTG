import React from 'react';
import ManaCost from './ManaCost.jsx';
import './DisplayCardInfo.css';

const DisplayCardInfo = ({ card, symbols, gridWithStash }) => {
  const { normal: image, name, type_line, flavor_text, artist, power, toughness, loyalty } = card;
  let { mana_cost, oracle_text } = card;

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

  mana_cost = parseSymbols(mana_cost);


  oracle_text = parseOracleText(oracle_text);


  return (
    <div className={`app-grid-top-row-right-col${gridWithStash ? '' : ' right-col-no-stash'}`}>
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
          {mana_cost && <ManaCost manaCost={mana_cost} />}
        </div>
        <p id='display-card-type-line' >{type_line}</p>
        {
          oracle_text &&
          oracle_text.map((line, index) => (
            <p key={index} className='display-card-oracle-text-line' >{line}</p>
          ))
        }
        {flavor_text && <p id='display-card-flavor-text' ><i>{flavor_text}</i></p>}
        {power && <p id='display-card-p-t' ><b>{`${power}/${toughness}`}</b></p>}
        {loyalty && <p id='display-card-loyalty' ><b>{`Loyalty: ${loyalty}`}</b></p>}
        <p id='display-card-artist' >Illustrated by <i>{artist}</i></p>
      </div>
    </div>
  )
}

export default DisplayCardInfo;