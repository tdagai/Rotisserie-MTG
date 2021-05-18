import React, { useState, useEffect } from 'react';
import TopBanner from './TopBanner/TopBanner.jsx';
import DraftList from './DraftList/DraftList.jsx';
import CardPreview from './CardPreview/CardPreview.jsx';
import TheStash from './TheStash/TheStash.jsx';
import { SearchContext, stashContext, CardPreviewContext } from '../Contexts/Contexts.js';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://ec2-54-193-123-166.us-west-1.compute.amazonaws.com', { autoConnect: false });

const App = () => {
  const [socketID, setSocketID] = useState('');
  const [allUsers, setAllUsers] = useState({});
  const [allCardsDrafted, setAllCardsDrafted] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(true);
  const [myStash, setMyStash] = useState([]);
  const [gridWithStash, setGridWithStash] = useState(true);
  const [latestCardAdded, setLatestCardAdded] = useState({});
  const [allSymbols, setAllSymbols] = useState(null);
  const [currentlyDisplayedCard, setCurrentlyDisplayedCard] = useState({});

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

    socket.on('symbols', (symbols) => {
      if (allSymbols === null) {
        setAllSymbols(symbols);
      }
    });

    socket.on('user-disconnected', ({ allDrafted, disconnectedID }) => {
      setAllCardsDrafted(allDrafted);
      delete allUsers[disconnectedID];
    });

    return () => socket.disconnect();
  }, []);

  /* This useEffect takes care of data being emitted from the server */
  useEffect(() => {
    socket.on('symbols', (symbols) => {
      if (allSymbols === null) {
        setAllSymbols(symbols);
      }
    });

    socket.on('new card drafted', ({ users, allDrafted, newCard, senderID }) => {
      if (newCard.searchName !== latestCardAdded.searchName) {
        setAllUsers(users);
        setAllCardsDrafted(allDrafted);
        removeFromStash(newCard.ff.name);
      }
    });

  }, [allCardsDrafted]);

  /* This useEffect takes care of emitting data to the server */
  /* through sockets when a user adds a new card to the draft */
  useEffect(() => {
    if (latestCardAdded?.ff?.name) {
      socket.emit('new draft list', { socketID, card: latestCardAdded });
    }
  }, [latestCardAdded]);

  const removeFromStash = (cardNameToRemove) => {
    if (myStash.length > 0) {
      const updatedStash = myStash.filter((stashCard) => {
        return stashCard.ff.name !== cardNameToRemove
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
    if (!prevDrafted.includes(card.ff.name) && prevDrafted.length < 35) {
      prevDrafted.push(card.ff.name);
      setAllCardsDrafted(prevDrafted);
      if (socketID) {
        updatedUserData[socketID].push(card);
        setAllUsers(updatedUserData);
      }
      removeFromStash(card.ff.name);
      setLatestCardAdded(card);
    }
  }

  const addCardToStash = (card) => {
    if (myStash.length < 30) {
      let found = false;
      myStash.forEach((stashCard) => {
        if (stashCard.ff.name === card.ff.name) {
          found = true;
        }
      });

      if (!found && !allCardsDrafted.includes(card.ff.name)) {
        if (myStash.length === 0) {
          setMyStash([card]);
        } else {
          setMyStash([card, ...myStash]);
        }
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
          <DraftList
            allUsers={allUsers}
            setDisplayedCard={setDisplayedCard}
            me={socketID} />
          {
            currentlyDisplayedCard?.ff?.name &&
            <CardPreviewContext.Provider value={{card: currentlyDisplayedCard, symbols: allSymbols}} >
              <CardPreview
                gridWithStash={gridWithStash} />
            </CardPreviewContext.Provider>
          }
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