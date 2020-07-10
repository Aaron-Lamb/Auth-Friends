import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Link to='/login' />
          <Route path='/login' component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;
