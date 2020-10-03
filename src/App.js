import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import CreateAccount from "./Pages/CreateAccount";
import SignIn from "./Pages/SignIn";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

import 'bootstrap/dist/css/bootstrap.css';

//Function to check if the user is logged in
//Returns true if username is found in session storage, false if not
function isSignedIn() {
  let username = sessionStorage.getItem('username');
  return (username !== '' && username !== null);
}

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='App'>
          <header className="App-header">

            <Switch>

              <Route path={'/home'} render={() => (
                isSignedIn()
                  ? <Home username={sessionStorage.getItem('username')}/>
                  : <SignIn/>
              )}/>

              <Route path={'/sign-in'} render={() => (
                isSignedIn()
                  ? <Home username={sessionStorage.getItem('username')}/>
                  : <SignIn/>
              )}/>

              <Route path={'/create-account'} render={() => (
                isSignedIn()
                  ? <Home username={sessionStorage.getItem('username')}/>
                  : <CreateAccount/>
              )}/>

            </Switch>

          </header>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
