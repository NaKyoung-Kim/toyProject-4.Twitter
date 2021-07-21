// import { debuggerStatement } from '@babel/types';
import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from 'components/Navigation';
import Profile from '../routes/Profile';

const AppRouter = ({isLoggedIn}) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      { isLoggedIn && <Navigation />}
      <Switch>
        { isLoggedIn ? (
          <>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/Profile'>
              <Profile></Profile>
            </Route>
            {/* <Redirect from='*' to='/' /> */}
          </>
        ) : (
          <>
            <Route exact path='/'>
              <Auth>
              </Auth>
            </Route>
            {/* <Redirect from='*' to='/' /> */}
          </>
        )}
      </Switch>
    </Router>
  )
}

export default AppRouter;