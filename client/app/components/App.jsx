import React, { useState } from 'react';
import Search from './Search/Search.jsx';
import DraftList from './DraftList/DraftList.jsx';
import './App.css';


const App = () => {
  const [draftedCards, setDraftedCards] = useState([]);

  const addCardToDraft = (card) => {
    const prevState = draftedCards;
    const newKey = prevState.length;
      setDraftedCards([...prevState, { [newKey]: card }]);
  }

  return (
    <>
      <h1>Rotisserie MTG</h1>
      <Search addCardToDraft={addCardToDraft} />
      <DraftList draftedCards={draftedCards} />
    </>
  );
};

export default App;