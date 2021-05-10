import React, { useState, useEffect } from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftList.css';

const DraftList = ({ allUsers, setDisplayedCard, me }) => {
  const [listIndex, setListIndex] = useState(0);
  const [draftLists, setDraftLists] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [shiftLeft, setShiftLeft] = useState(false);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    setDraftLists(Object.entries(allUsers));
  }, [allUsers]);

  useEffect(() => {
    if (draftLists.length > 0) {
      if (currentList.length === 0 || !Object.keys(allUsers).includes(currentList[0][0])) {
        setCurrentList([[...draftLists[0]]]);
      } else {
        for (let i = 0; i < draftLists.length; i++) {
          if (currentList[0][0] === draftLists[i][0]) {
            currentList[0][1] = draftLists[i][1];
            break;
          }
        }
      }
    }
  }, [draftLists]);

  // useEffect(() => {
  //   if (direction === 'next') {
  //     setTimeout(() => {
  //       setShiftLeft(false);
  //       setCurrentList([[...draftLists[listIndex]]]);
  //     }, 500);
  //   }
  // }, [listIndex])

  // console.log('draftLists:', draftLists);
  // console.log('currentList:', currentList);

  const handleNext = () => {
    if (listIndex < Object.keys(allUsers).length - 1) {
      // setCurrentList([...currentList, [...draftLists[listIndex + 1]]]);
      // setDirection('next');
      setListIndex(listIndex + 1);
      // setShiftLeft(true);
    }
  }

  // 25vw + 250px:  offset the margin
  // 6px:           account for borders (3px on each side)
  // listIndex:     indicate which list to show
  // -1:            to rotate the list in the correct direction
  const styleObj = { left: `calc((25vw + 250px + 6px) * ${listIndex} * -1)`, transition: 'left .5s' };

  return (
    <div id='app-grid-top-row-left-col'>
      <button
        id='draft-carousel-back'
        onClick={() => {
          if (listIndex > 0) {
            setListIndex(listIndex - 1);
          }
        }} >{'<'}</button>
      {/* {
        currentList.length > 0 &&
        currentList.map((list) => (
          <ul
            key={list[0][0]}
            className={`draft-list ${shiftLeft ? 'left-shifted' : 'not-shifted'}`} >
            {
              list[1]
                ? list[1].map((card, index) => {
                  return (
                    <DraftListItem
                      key={card.ff.name}
                      card={card}
                      index={index}
                      setDisplayedCard={setDisplayedCard}
                    />
                  );
                })
              : <div className={`draft-list ${shiftLeft ? 'left-shifted' : 'not-shifted'}`}></div>
            }
          </ul>
        ))
      } */}
      {Object.keys(allUsers).map((userID) => (
        <ul
          key={userID}
          className='draft-list'
          style={styleObj} >
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
        id='draft-carousel-next'
        onClick={handleNext} >{'>'}</button>
    </div>
  );
}

export default DraftList;