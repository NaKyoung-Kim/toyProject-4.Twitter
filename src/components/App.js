import React, {useState} from 'react';
import AppRouter from 'components/Router';
import {authService} from 'FBase';

function App() {
  // 유저가 로그인했는지 useState로 확인하고 값을 넘겨줌
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      <footer>&copy; {new Date().getFullYear()} twitter </footer>
    </>
  );
}

export default App;
