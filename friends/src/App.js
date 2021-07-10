import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './styles.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
          <nav>
            <h1>Friends List</h1>
            <div className="nav-links">
              <Link to="/login">Log In</Link>
              <Link>Logout</Link>
              <Link to="/friendsList">Friends List</Link>
            </div>
          </nav>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/friendsList" component={FriendsList} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
