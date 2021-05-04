import React, { useState } from 'react';
import ManaCost from './ManaCost.jsx';
import OracleText from './OracleText.jsx';
import './DisplayCardInfo.css';

const DisplayCardInfo = ({ card, symbols, gridWithStash }) => {
  const [showFront, setShowFront] = useState(true);
  const { layout } = card;
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
  const {
    normal: sf_image,
    name: sf_name,
    type_line: sf_type_line,
    flavor_text: sf_flavor_text,
    artist: sf_artist,
    power: sf_power,
    toughness: sf_toughness,
    loyalty: sf_loyalty
  } = card.sf;
  let {
    mana_cost: sf_mana_cost,
    oracle_text: sf_oracle_text
  } = card.sf;

  const parseSymbols = (str) => {
    if (str === undefined || str.length === 0) { return ''; }
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
  if (sf_mana_cost) {
    sf_mana_cost = parseSymbols(sf_mana_cost);
  }
  if (sf_oracle_text) {
    sf_oracle_text = parseOracleText(sf_oracle_text);
  }

  return (
    <div className={`app-grid-top-row-right-col${gridWithStash ? '' : ' right-col-no-stash'}`}>
      <div id='diplay-card-info-image-and-button'>
        <div id='display-card-info-image-container'>
          {
            showFront
            ? <img src={ff_image} alt='displayed card' ></img>
            : <img src={sf_image} alt='displayed card' ></img>
          }
        </div>
        {layout !=='normal' && <button onClick={() => setShowFront(!showFront)} >flip</button>}
      </div>
      <div id='display-card-info-text-container'>
        <div id='display-card-text-name-mana'>
          <b><p id='display-card-name' >{showFront ? ff_name : sf_name}</p></b>
          {
            showFront
            ? ff_mana_cost && <ManaCost manaCost={ff_mana_cost} />
            : sf_mana_cost && <ManaCost manaCost={sf_mana_cost} />
          }
        </div>
        <p id='display-card-type-line' >{showFront ? ff_type_line : sf_type_line}</p>
        {
          showFront
          ? ff_oracle_text && <OracleText cardText={ff_oracle_text} />
          : sf_oracle_text && <OracleText cardText={sf_oracle_text} />
        }
        {
          showFront
          ? ff_flavor_text && <p id='display-card-flavor-text' ><i>{ff_flavor_text}</i></p>
          : sf_flavor_text && <p id='display-card-flavor-text' ><i>{sf_flavor_text}</i></p>
        }
        {
          showFront
          ? ff_power && <p id='display-card-p-t' ><b>{`${ff_power}/${ff_toughness}`}</b></p>
          : sf_power && <p id='display-card-p-t' ><b>{`${sf_power}/${sf_toughness}`}</b></p>
        }
        {
          showFront
          ? ff_loyalty && <p id='display-card-loyalty' ><b>{`Loyalty: ${ff_loyalty}`}</b></p>
          : sf_loyalty && <p id='display-card-loyalty' ><b>{`Loyalty: ${sf_loyalty}`}</b></p>
        }
        <p id='display-card-artist' >Illustrated by <i>{ff_artist}</i></p>
      </div>
    </div>
  )
}

export default DisplayCardInfo;