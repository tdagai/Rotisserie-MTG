import React, { useState, useEffect, useContext } from 'react';
import { CardPreviewContext } from '../../../Contexts/Contexts';
import ManaCost from '../ManaCost.jsx';
import OracleText from '../OracleText.jsx';

const SplitCard = ({ parseSymbols, parseOracleText }) => {
  const [rotated, setRotated] = useState(false);
  const { card } = useContext(CardPreviewContext);

  const rotateCCW = card.sf.oracle_text.includes('Aftermath');
  const {
    normal: image,
    name: ff_name,
    type_line: ff_type_line,
    artist: ff_artist,
  } = card.ff;
  let {
    mana_cost: ff_mana_cost,
    oracle_text: ff_oracle_text
  } = card.ff;
  const {
    name: sf_name,
    type_line: sf_type_line,
    artist: sf_artist,
  } = card.sf;
  let {
    mana_cost: sf_mana_cost,
    oracle_text: sf_oracle_text
  } = card.sf;

  ff_mana_cost = parseSymbols(ff_mana_cost);
  sf_mana_cost = parseSymbols(sf_mana_cost);
  ff_oracle_text = parseOracleText(ff_oracle_text);
  sf_oracle_text = parseOracleText(sf_oracle_text);

  return (
    <>
      <div className='card-preview-grid-col-1'>
        <div
          className={`${rotated ? 'rotated-' : ''}card-preview-image-container
          split-card-${!rotated ? '' : rotateCCW ? 'rotate-ccw' : 'rotate-cw'}`} >
        {
          image &&
          <img src={image} alt='displayed card' ></img>
        }
        </div>
        <button
          className='card-image-action-button'
          onClick={() => setRotated(!rotated)} >
            Rotate
        </button>
      </div>
      <div className='card-preview-text-container'>
        <div className='card-preview-name-mana'>
          <b><p className='card-preview-name' >{ff_name}</p></b>
          {ff_mana_cost && <ManaCost manaCost={ff_mana_cost} />}
        </div>
        <p className='card-preview-type-line' >{ff_type_line}</p>
        {ff_oracle_text && <OracleText cardText={ff_oracle_text} />}
        <p className='card-preview-artist' >Illustrated by <i>{ff_artist}</i></p>
        <div className='card-preview-name-mana'>
          <b><p className='card-preview-name' >{sf_name}</p></b>
          {sf_mana_cost && <ManaCost manaCost={sf_mana_cost} />}
        </div>
        <p className='card-preview-type-line' >{sf_type_line}</p>
        {sf_oracle_text && <OracleText cardText={sf_oracle_text} />}
        <p className='card-preview-artist' >Illustrated by <i>{sf_artist}</i></p>
      </div>
    </>
  );

};

export default SplitCard;