import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Splash from "./components/splashPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Splash}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
