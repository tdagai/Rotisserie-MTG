import React, { useState } from 'react';
import TopBanner from './TopBanner/TopBanner.jsx';
import DraftList from './DraftList/DraftList.jsx';
import DisplayCardInfo from './DisplayCardInfo/DisplayCardInfo.jsx';
import TheStash from './TheStash/TheStash.jsx';
import { SearchContext, stashContext } from '../Contexts/Contexts.js';
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
  const [currentTurn, setCurrentTurn] = useState(true);
  const [myStash, setMyStash] = useState([]);
  const [gridWithStash, setGridWithStash] = useState(true);
  const [currentlyDisplayedCard, setCurrentlyDisplayedCard] = useState(
    {
      normal: '',
      name: '',
      mana_cost: '',
      oracle_text: '',
      type_line: '',
      artist: '',
      flavor_text: '',
    });

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

  const addCardToStash = (card) => {
    let found = false;
    myStash.forEach(({ name }) => {
      if (name === card.name) {
        found = true;
      }
    });

    if (!found && !allCardsDrafted.includes(card.name)) {
      if (myStash.length === 0) {
        setMyStash([card]);
      } else {
        setMyStash([card, ...myStash]);
      }
    }
  }

  const setDisplayedCard = (card) => {
    setCurrentlyDisplayedCard(card);
  }

  return (
    <div>
      <SearchContext.Provider value={{ addCardToDraft, addCardToStash, currentTurn }} >
        <TopBanner
          setCurrentTurn={setCurrentTurn} />
      </SearchContext.Provider>
      <div className={`app-container${gridWithStash ? '' : ' grid-without-stash'}`}>
        <div id='app-grid-top-row'>
          <div id='app-grid-top-row-left-col'>
            {Object.keys(allUsers).map((userID) => (
              <DraftList
                key={userID}
                draftedCards={allUsers[userID]}
                displayCardInfo={setDisplayedCard} />
            ))}
          </div>
          {
            currentlyDisplayedCard.name
              ? <DisplayCardInfo card={currentlyDisplayedCard} />
              : <></>
          }
        </div>
        <stashContext.Provider value={{ currentTurn, setDisplayedCard, addCardToDraft }} >
          <TheStash
            myStash={myStash}
            setMyStash={setMyStash}
            gridWithStash={gridWithStash}
            setGridWithStash={setGridWithStash} />
          </stashContext.Provider>
      </div>
    </div>
  );
};

export default App;