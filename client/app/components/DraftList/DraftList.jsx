import React, { useState, useEffect } from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftList.css';

const DraftList = ({ allUsers, setDisplayedCard, me }) => {
  const [listIndex, setListIndex] = useState(0);
  // const [draftLists, setDraftLists] = useState([]);
  // const [currentList, setCurrentList] = useState([]);

  // useEffect(() => {
  //   const usersAndDrafts = Object.entries(allUsers);
  //   setDraftLists(usersAndDrafts);
  //   if (currentList.length === 0 && usersAndDrafts[0]) {
  //     setCurrentList(usersAndDrafts[0]);
  //   } else {
  //     for (let i = 0; i < draftLists.length; i++) {
  //       if (draftLists[i][0] === currentList[0]) {
  //         currentList[1] = draftLists[i][1];
  //         break;
  //       }
  //     }
  //   }
  // }, [allUsers]);

  // console.log(draftLists);
  // console.log(currentList);

  const styleObj = { left: `-${listIndex * 43}vw`, transition: 'left .5s' };

  return (
    <div id='app-grid-top-row-left-col'>
      <button
        id='draft-carrousel-back'
        onClick={() => {
          if (listIndex > 0) {
            setListIndex(listIndex - 1);
          }
        }} >{'<'}</button>
      {Object.keys(allUsers).map((userID) => (
        <ul key={userID} className='draft-list' style={styleObj} >
          {allUsers[userID].map((card, index) => {
            return (
              <DraftListItem
                key={card.ff.name}
                card={card}
                index={index}
                setDisplayedCard={setDisplayedCard}
              />
            );
          })}
        </ul>
      ))}
      <button
        id='draft-carrousel-next'
        onClick={() => {
          if (listIndex < Object.keys(allUsers).length - 1) {
            setListIndex(listIndex + 1)
          }
        }} >{'>'}</button>
    </div>
  );
}

export default DraftList;