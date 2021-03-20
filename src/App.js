import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

function App(props) {

  return (
      <BrowserRouter>
          <div className="app_wrapper grid">
              <Header/>
              <NavBar/>
              <div className="content">
                  <Route path = '/dialogs'>
                      <Dialogs state = {props.state.messagesPage}/>
                  </Route>
                  <Route exact path = '/' render = { () => <Profile
                                profilePage = {props.state.profilePage}
                                addPost = {props.addPost}
                                updateNewPostText = {props.updateNewPostText}
                  /> } />
                  <Route path = '/news' component = {News} />
                  <Route path = '/music' component = {Music} />
                  <Route path = '/settings' component = {Settings} />
              </div>
          </div>
      </BrowserRouter>

  );
}

export default App;
