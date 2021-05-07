import React, { useContext } from 'react';
import { CardPreviewContext } from '../../Contexts/Contexts';

const OracleText = ({ cardText }) => {
  // const { symbols } = useContext(CardPreviewContext);

  if (cardText.length === 0) {
    return <></>;
  }

  return (
    cardText.map((line, index) => (
      <p key={index} >{line}</p>
    ))
  )

  // return (
  //   <div className='card-preview-oracle-text-container' >
  //     {
  //       cardText.map((line) => (
  //         line.map((partOfLine, index) => {
  //           if (partOfLine[0] === '{') {
  //             return (
  //               <div className='oracle-text-image-container'>
  //                 <img key={index} src={symbols[partOfLine]} alt={'MTG Symbol'} ></img>
  //               </div>
  //             )
  //           }
  //           return <p key={index} >{partOfLine}</p>
  //         })
  //       ))
  //     }
  //   </div>
  // )
}

export default OracleText;