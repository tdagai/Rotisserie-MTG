import React, { useState } from 'react';
import Search from './Search/Search.jsx';
import DraftList from './DraftList/DraftList.jsx';
import './App.css';


const App = () => {
  const [draftedCards, setDraftedCards] = useState(new Set());

  const addCardToDraft = (card) => {
    const prevState = new Set(draftedCards);
    const newKey = prevState.size;
    if (newKey < 35 && !prevState.has(card)) {
      prevState.add(card);
      setDraftedCards(prevState);
    }
  }

  return (
    <>
      <h1>Rotisserie MTG</h1>
      <Search addCardToDraft={addCardToDraft} />
      <DraftList draftedCards={[...draftedCards]} />
    </>
  );
};

export default App;