import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './styles.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () =>{
    localStorage.removeItem("token")
    console.log("Logged Out")
  }
  return (
    <Router>
      <div className="App">
          <nav>
            <h1>Friends List</h1>
            <div className="nav-links">
              <Link to="/login">Log In</Link>
              <Link onClick={logout}>Logout</Link>
              <Link to="/protected">Friends List</Link>
            </div>
          </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login}/>
          <Route component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
