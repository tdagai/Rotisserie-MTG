import React, { useContext } from 'react';
import NormalCard from './NormalCard/NormalCard.jsx';
import DoubleFacedCard from './DoubleFacedCard/DoubleFacedCard.jsx';
import SplitCard from './SplitCard/SplitCard.jsx';
import './CardPreview.css';
import { CardPreviewContext } from '../../Contexts/Contexts.js';

const CardPreview = ({ symbols, gridWithStash }) => {
  const { card } = useContext(CardPreviewContext);
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

  return (
    <div className={`app-grid-top-row-right-col${gridWithStash ? '' : ' right-col-no-stash'}`}>
      {
        layout === 'normal' || layout === 'saga'
          ? <NormalCard parseSymbols={parseSymbols} parseOracleText={parseOracleText} />
          : layout === 'split' || layout === 'flip'
            ? <SplitCard parseSymbols={parseSymbols} parseOracleText={parseOracleText} />
            : <DoubleFacedCard parseSymbols={parseSymbols} parseOracleText={parseOracleText} />
      }

    </div>
  )
}

export default CardPreview;