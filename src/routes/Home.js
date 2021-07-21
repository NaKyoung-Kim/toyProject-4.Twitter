import { dbService } from 'FBase';
import React, {useEffect, useState} from 'react';
import Tweet from 'components/Tweet';

const Home = ({userObj}) => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    dbService.collection('tweets').onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet('');
  };
  const onChange = (event) => {
    const {target : {value},} = event;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={tweet} onChange={onChange} placeholder='Upload your comment!' maxLength={120} />
        <input type='submit' value="tweet" />
      </form>
      <div>
        {/* {tweets.map((tweet) => (
          <div key={tweet.id}>
            <h4>{tweet.text}</h4>
          </div>
        ))} */}
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.creatorId ===userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;