import React, { useState, useEffect, useContext } from 'react';
import { CardPreviewContext } from '../../../Contexts/Contexts';
import ManaCost from '../ManaCost.jsx';
import OracleText from '../OracleText.jsx';

const DoubleFacedCard = ({ parseSymbols, parseOracleText }) => {
  const [showFront, setShowFront] = useState(true);
  const { card } = useContext(CardPreviewContext);

  useEffect(() => {
    if (!showFront) {
      setShowFront(true);
    }
  }, [card]);

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

  ff_mana_cost = parseSymbols(ff_mana_cost);
  if (sf_mana_cost) {
    sf_mana_cost = parseSymbols(sf_mana_cost);
  }
  ff_oracle_text = parseOracleText(ff_oracle_text);
  if (sf_oracle_text) {
    sf_oracle_text = parseOracleText(sf_oracle_text);
  }


  return (
    <>
      <div className='card-preview-grid-col-1'>
        <div className={`${showFront ? '' : 'transformed-'}card-preview-image-container dfc-image front-face`}>
          <img src={ff_image} alt='card preview first face' ></img>
        </div>
        <div className={`${showFront ? 'transformed-' : ''}card-preview-image-container dfc-image back-face`}>
          <img src={sf_image} alt='card preview second face' ></img>
        </div>
        <button
          aria-label='image action button'
          className='card-image-action-button button-style'
          onClick={() => setShowFront(!showFront)} >
            <i className="fas fa-sync"></i>
          {
            card.layout === 'transform'
              ? ' Transform'
              : ' Turn Over'
          }
        </button>
      </div>
      <div className='card-preview-text-container'>
        <div className='card-preview-name-mana'>
          <b><p className='card-preview-name' >{showFront ? ff_name : sf_name}</p></b>
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
            ? ff_flavor_text && <p className='card-preview-flavor-text' ><i>{ff_flavor_text}</i></p>
            : sf_flavor_text && <p className='card-preview-flavor-text' ><i>{sf_flavor_text}</i></p>
        }
        {
          showFront
            ? ff_power && <p className='card-preview-p-t' ><b>{`${ff_power}/${ff_toughness}`}</b></p>
            : sf_power && <p className='card-preview-p-t' ><b>{`${sf_power}/${sf_toughness}`}</b></p>
        }
        {
          showFront
            ? ff_loyalty && <p className='card-preview-loyalty' ><b>{`Loyalty: ${ff_loyalty}`}</b></p>
            : sf_loyalty && <p className='card-preview-loyalty' ><b>{`Loyalty: ${sf_loyalty}`}</b></p>
        }
        <p className='card-preview-artist' >Illustrated by <i>{showFront ? ff_artist : sf_artist}</i></p>
      </div>
    </>
  );
}

export default DoubleFacedCard;