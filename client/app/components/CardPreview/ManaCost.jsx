import React from 'react';

const ManaCost = ({ manaCost }) => {
  if (manaCost.length === 0) {
    return <></>
  }
  if (manaCost[0][0] === '{') {
    return (
      <div className='display-mana-cost' >
        {
          manaCost.map((standin, index) => (
            <p key={index} >{standin}</p>
          ))
        }
      </div>
    );
  }
  return (
    <div className='display-mana-cost'  >
      {
        manaCost.map((symbol, index) => (
          <div key={index} className="mana-symbol-container" >
            <img src={symbol} alt='mana_symbol' ></img>
          </div>
        ))
      }
    </div>
  );
}

export default ManaCost;