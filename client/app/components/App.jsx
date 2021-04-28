import React, { useState, useEffect } from 'react';
import TopBanner from './TopBanner/TopBanner.jsx';
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
  const [currentlyDisplayedCard, setCurrentlyDisplayedCard] = useState('');

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

  const displayCardInfo = (cardImageNormal) => {
    setCurrentlyDisplayedCard(cardImageNormal);
  }

  return (
    <div>
      <TopBanner addCardToDraft={addCardToDraft} />
      <div id='app-container'>
        <div id='app-grid-top-row'>
          <div id='app-grid-top-row-left-col'>
            {Object.keys(allUsers).map((userID) => (
              <DraftList
                key={userID}
                draftedCards={allUsers[userID]}
                displayCardInfo={displayCardInfo}
              />
            ))}
          </div>
          <div id='app-grid-top-row-right-col'>
            <div id='display-card-info-image-container'>
              {
                currentlyDisplayedCard
                ? <img src={currentlyDisplayedCard} alt='displayed card' ></img>
                : <div id='no-card-to-display'></div>
              }
            </div>
          </div>
        </div>
        <div id='app-grid-bottom-row'></div>
      </div>
    </div>
  );
};

export default App;