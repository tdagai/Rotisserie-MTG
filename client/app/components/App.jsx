import React, { useState, useEffect } from 'react';
import TopBanner from './TopBanner/TopBanner.jsx';
import DraftList from './DraftList/DraftList.jsx';
import DisplayCardInfo from './DisplayCardInfo/DisplayCardInfo.jsx';
import TheStash from './TheStash/TheStash.jsx';
import { SearchContext, stashContext } from '../Contexts/Contexts.js';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3000', { autoConnect: false });

const App = () => {
  const [socketID, setSocketID] = useState('');
  const [allUsers, setAllUsers] = useState({});
  const [allCardsDrafted, setAllCardsDrafted] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(true);
  const [myStash, setMyStash] = useState([]);
  const [gridWithStash, setGridWithStash] = useState(true);
  const [latestCardAdded, setLatestCardAdded] = useState({});
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

  /* This useEffect takes care of all of the socket events */
  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      setSocketID(socket.id);
    });

    socket.on('new connection', ({ users, allDrafted }) => {
      setAllUsers(users);
      setAllCardsDrafted(allDrafted);
    });

    socket.on('user-disconnected', ({ allDrafted }) => {
      setAllCardsDrafted(allDrafted);
    });

    return () => socket.disconnect();
  }, []);

  /* This useEffect takes care of data being emitted from the server */
  useEffect(() => {
    socket.on('new card drafted', ({ users, allDrafted, newCard, senderID }) => {
      if (newCard.name !== latestCardAdded.name) {
        setAllUsers(users);
        setAllCardsDrafted(allDrafted);
        removeFromStash(newCard.name);
      }
    });

  }, [allCardsDrafted]);

  /* This useEffect takes care of emitting data to the server */
  /* through sockets when a user adds a new card to the draft */
  useEffect(() => {
    if (latestCardAdded?.name) {
      console.log('emitting new card')
      socket.emit('new draft list', { socketID, card: latestCardAdded });
    }
  }, [latestCardAdded]);

  const removeFromStash = (cardNameToRemove) => {
    if (myStash.length > 0) {
      const updatedStash = myStash.filter(({ name }) => {
        return name !== cardNameToRemove
      });
      if (updatedStash.length === 0) {
        setMyStash([]);
      } else {
        setMyStash([...updatedStash]);
      }
    }
  }

  const addCardToDraft = (card) => {
    const prevDrafted = allCardsDrafted;
    const updatedUserData = allUsers;
    if (!prevDrafted.includes(card.name) && prevDrafted.length < 35) {
      prevDrafted.push(card.name);
      setAllCardsDrafted(prevDrafted);
      if (socketID) {
        updatedUserData[socketID].push(card);
        setAllUsers(updatedUserData);
      }
      removeFromStash(card.name);
      setLatestCardAdded(card);
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
          {currentlyDisplayedCard.name && <DisplayCardInfo card={currentlyDisplayedCard} />}
        </div>
        <stashContext.Provider value={{ currentTurn, setDisplayedCard, addCardToDraft, removeFromStash }} >
          <TheStash
            myStash={myStash}
            gridWithStash={gridWithStash}
            setGridWithStash={setGridWithStash} />
        </stashContext.Provider>
      </div>
    </div>
  );
};

export default App;