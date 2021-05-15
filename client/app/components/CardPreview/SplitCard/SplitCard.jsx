import React, { useState, useEffect, useContext } from 'react';
import { CardPreviewContext } from '../../../Contexts/Contexts';
import ManaCost from '../ManaCost.jsx';
import OracleText from '../OracleText.jsx';

const SplitCard = ({ parseSymbols, parseOracleText }) => {
  const [rotated, setRotated] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { card } = useContext(CardPreviewContext);

  useEffect(() => {
    if (rotated) {
      setRotated(false);
    }
    if (flipped) {
      setFlipped(false);
    }
  }, [card]);

  const rotateCCW = card.keywords.includes('Aftermath');
  const { layout } = card;

  const {
    normal: image,
    name: ff_name,
    type_line: ff_type_line,
    power: ff_power,
    toughness: ff_toughness,
    artist: ff_artist,
  } = card.ff;
  let {
    mana_cost: ff_mana_cost,
    oracle_text: ff_oracle_text
  } = card.ff;
  const {
    name: sf_name,
    type_line: sf_type_line,
    power: sf_power,
    toughness: sf_toughness,
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
          className={
            `${layout === 'split'
              ? (rotated ? 'rotated-' : '')
              : (flipped ? 'flipped-' : '')}card-preview-image-container
            ${layout === 'split'
              ? `split-card-${!rotated ? '' : rotateCCW ? 'rotate-ccw' : 'rotate-cw'}`
              : ''
            }`}>
          {
            image &&
            <img src={image} alt='displayed card' ></img>
          }
        </div>
        {
          layout !== 'adventure' &&
          <button
            aria-label='image action button'
            className='button-style card-image-action-button'
            onClick={() => layout === 'split' ? setRotated(!rotated) : setFlipped(!flipped)} >
            <i className={`fas fa-${rotateCCW ? 'undo' : 'redo'}`}></i>
            {layout === 'split' ? ' Rotate' : ' Flip'}
          </button>
        }
      </div>
      <div className='card-preview-text-container'>
        <div className='card-preview-name-mana'>
          <b><p className='card-preview-name' >{ff_name}</p></b>
          {ff_mana_cost && <ManaCost manaCost={ff_mana_cost} />}
        </div>
        <p className='card-preview-type-line' >{ff_type_line}</p>
        {ff_oracle_text && <OracleText cardText={ff_oracle_text} />}
        {ff_power && <p className='card-preview-p-t' ><b>{`${ff_power}/${ff_toughness}`}</b></p>}
        <p className='card-preview-artist' >Illustrated by <i>{ff_artist}</i></p>
        <div className='card-preview-name-mana'>
          <b><p className='card-preview-name' >{sf_name}</p></b>
          {sf_mana_cost && <ManaCost manaCost={sf_mana_cost} />}
        </div>
        <p className='card-preview-type-line' >{sf_type_line}</p>
        {sf_oracle_text && <OracleText cardText={sf_oracle_text} />}
        {sf_power && <p className='card-preview-p-t' ><b>{`${sf_power}/${sf_toughness}`}</b></p>}
        <p className='card-preview-artist' >Illustrated by <i>{sf_artist}</i></p>
      </div>
    </>
  );

};

export default SplitCard;