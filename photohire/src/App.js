import HorizontalNavbar from './common/navbar/HorizontalNavbar';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home/Home';
import Catalog from './catalog/Catalog';
import Profile from './profile/Profile'
import Chat from './chat/Chat';
import Chats from './chat/Chats';
import Reservation from './reservation/Reservation';

function App() {
  return (
    <div className="App">
      <Router>
        <HorizontalNavbar />
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/chat/:id">
            <Chat />
          </Route>
          <Route path="/chat">
            <Chats />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
