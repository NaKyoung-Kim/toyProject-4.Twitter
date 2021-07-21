import { dbService } from 'FBase';
import React, { useState } from 'react';

const Tweet = ({tweetObj, isOwner}) => {
  const [edit, setEdit] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
    }
  };

  const toggleEditing = () => setEdit(prev => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweets/${tweetObj.id}`).update({text: newTweet});
    setEdit(false);
  }
  const onChange = (event) => {
    const {target: {value},} = event;
    setNewTweet(value);
  };

  return (
    <div>
      {
        edit
         ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} type='text' placeholder='Edit your tweet!' value={newTweet} required />
            <input type='submit' value='Update Tweet' />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
        ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={toggleEditing}>Edit</button>
              <button onClick={onDeleteClick}>Delete</button>
            </>
          )}
        </>
        )
      }
    </div>
  );
};

export default Tweet;