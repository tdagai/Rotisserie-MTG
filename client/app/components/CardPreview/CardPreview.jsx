import React, { useContext } from 'react';
import NormalCard from './NormalCard/NormalCard.jsx';
import DoubleFacedCard from './DoubleFacedCard/DoubleFacedCard.jsx';
import SplitCard from './SplitCard/SplitCard.jsx';
import './CardPreview.css';
import { CardPreviewContext } from '../../Contexts/Contexts.js';

const CardPreview = ({ gridWithStash }) => {
  const { card, symbols } = useContext(CardPreviewContext);
  const { layout } = card;

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

  // const parseOracleText = (str) => {
  //   const brokenString = str.split('\n');
  //   let lastParsed = 0;
  //   const parsedLines = [];
  //   const parsedLine = [];
  //   brokenString.forEach((line) => {
  //     for (let i = 0; i <= line.length; i++) {
  //       if (i === line.length) {
  //         parsedLine.push(line.substring(lastParsed, i));
  //         parsedLines.push(parsedLine);
  //         break;
  //       }
  //       if (line[i] === '{') {
  //         if (i !== 0) {
  //           parsedLine.push(line.substring(lastParsed, i));
  //           lastParsed = i;
  //         }
  //         while (line[i] !== '}') {
  //           i++;
  //         }
  //         parsedLine.push(line.substring(lastParsed, i + 1));
  //         lastParsed = i + 1;
  //       }
  //     }
  //   })
  //   return parsedLines;
  // }

  return (
    <div className={`app-grid-top-row-right-col${gridWithStash ? '' : ' right-col-no-stash'}`}>
      {
        layout === 'normal' || layout === 'saga' || layout === 'leveler'
          ? <NormalCard parseSymbols={parseSymbols} parseOracleText={parseOracleText} />
          : layout === 'split' || layout === 'flip' || layout === 'adventure'
            ? <SplitCard parseSymbols={parseSymbols} parseOracleText={parseOracleText} />
            : <DoubleFacedCard parseSymbols={parseSymbols} parseOracleText={parseOracleText} />
      }

    </div>
  )
}

export default CardPreview;