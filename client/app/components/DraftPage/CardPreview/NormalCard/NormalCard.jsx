import React, { useContext } from 'react';
import { CardPreviewContext } from '../../../../Contexts/Contexts';
import ManaCost from '../ManaCost.jsx';
import OracleText from '../OracleText.jsx';

const NormalCard = ({ parseSymbols, parseOracleText }) => {
  const { card } = useContext(CardPreviewContext);
  const {
    normal: image,
    name,
    type_line,
    flavor_text,
    artist,
    power,
    toughness,
    loyalty
  } = card.ff;
  let {
    mana_cost,
    oracle_text
  } = card.ff;

  mana_cost = parseSymbols(mana_cost);
  oracle_text = parseOracleText(oracle_text);

  return (
    <>
      <div className='card-preview-grid-col-1 card-preview-image-container'>
        { image && <img src={image} alt='displayed card' ></img> }
      </div>
      <div className='card-preview-text-container'>
        <div className='card-preview-name-mana'>
          <b><p className='card-preview-name' >{name}</p></b>
          { mana_cost && <ManaCost manaCost={mana_cost} /> }
        </div>
        <p className='card-preview-type-line' >{type_line}</p>
        { oracle_text && <OracleText cardText={oracle_text} /> }
        { flavor_text && <p className='card-preview-flavor-text' ><i>{flavor_text}</i></p> }
        { power && <p className='card-preview-p-t' ><b>{`${power}/${toughness}`}</b></p> }
        { loyalty && <p className='card-preview-loyalty' ><b>{`Loyalty: ${loyalty}`}</b></p> }
        <p className='card-preview-artist' >Illustrated by <i>{artist}</i></p>
      </div>
    </>
  );

};

export default NormalCard;