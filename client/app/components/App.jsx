import React, { useState, useEffect } from 'react';
import Search from './Search/Search.jsx';
import DraftList from './DraftList/DraftList.jsx';
import io from 'socket.io-client';
import './App.css';

let socketID = '';
const socket = io('http://localhost:3000');
socket.on('connect', () => {
  socketID = socket.id;
});

const App = () => {
  const [allUsers, setAllUsers] = useState({});
  const [allCardsDrafted, setAllCardsDrafted] = useState([]);

  socket.on('new connection', ({ users, allDrafted }) => {
    setAllUsers(users);
    setAllCardsDrafted(allDrafted);
  });

  socket.on('new card drafted', ({ users, allDrafted }) => {
    setAllUsers(users);
    setAllCardsDrafted(allDrafted);
  });

  const addCardToDraft = (card) => {
    const prevUsers = allUsers;
    const prevDrafted = allCardsDrafted;
    if (/*!prevDrafted.includes(card.name) && */prevDrafted.length < 35/* && allCardsDrafted.length < 35*/) {
      prevDrafted.push(card.name);
      prevUsers[socketID].push(card);
      setAllUsers(prevUsers);
      socket.emit('new draft list', { socketID, card });
    }
  }


  return (
    <>
      <h1 id='app-title'>Rotisserie MTG</h1>
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