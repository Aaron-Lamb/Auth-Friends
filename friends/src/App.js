import React from 'react';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Link to='/login' className='App-Link'>Login</Link>
          <Link to='/friends' className='App-Link'>Friends</Link>
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendsList}/>
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
