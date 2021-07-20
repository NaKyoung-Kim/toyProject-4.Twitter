import React, {useEffect, useState} from 'react';
import AppRouter from 'components/Router';
import {authService} from 'FBase';

function App() {
  // 유저가 로그인했는지 useState로 확인하고 값을 넘겨줌
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect( () => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      { init ? <><AppRouter isLoggedIn={isLoggedIn}></AppRouter><footer>&copy; {new Date().getFullYear()} twitter </footer></> : "Initializing..." }
    </>
  );
}

export default App;
