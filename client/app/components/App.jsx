import React, { useState, useEffect } from 'react';
import Search from './Search/Search.jsx';
import DraftList from './DraftList/DraftList.jsx';
import io from 'socket.io-client';
import './App.css';

let socketID = '';
const socket = io('http://localhost:3000');
socket.on('connect', () => {
  socketID = socket.id;
})

const App = () => {
  const [allUsers, setAllUsers] = useState({});
  console.log('socketID:', socketID);


  socket.on('new connection', (users) => {
    setAllUsers(users);
  });

  socket.on('new card drafted', (users) => {
    setAllUsers(users);
  });

  const addCardToDraft = (card) => {
    // const prevState = new Set(allDraftedCards);
    // const newKey = prevState.size;
    // if (newKey < 35 && !prevState.has(card)) {
      // prevState.add(card);
    const prevState = allUsers;
    prevState[socketID].push(card);
    setAllUsers(prevState);
    socket.emit('new draft list', { socketID, card });
    // }
  }


  return (
    <>
      <h1>Rotisserie MTG</h1>
      <Search addCardToDraft={addCardToDraft} />
      <div id='draft-lists-container'>
        {Object.keys(allUsers).map((userID) => (
          <DraftList key={userID} draftedCards={allUsers[userID]} />
        ))}
      </div>
    </>
  );
};

export default App;