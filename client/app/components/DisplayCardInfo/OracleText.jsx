import React from 'react';

const OracleText = ({ cardText }) => {
  if (cardText.length === 0) {
    return <></>;
  }

  return (
    cardText.map((line, index) => (
      <p key={index} className='display-card-oracle-text-line' >{line}</p>
    ))
  )
}

export default OracleText;