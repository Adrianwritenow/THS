import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/App.css';
import SplashPage from "./components/splashPage";
import About from "./components/aboutPg";
import Enlist from "./components/enlistPg";
import Communities from "./components/communitiesPg";



class App extends Component {


  render() {
    return (
    <BrowserRouter>
      <Route render={({location})=> console.log(location)|| (
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames='fade' timeout={300}>
            <Switch location={location}>
              <Route exact path="/" component={SplashPage}/>
              <Route  path="/About" component={About}/>
              <Route  path="/Enlist" component={Enlist}/>
              <Route  path="/Communities" component={Communities}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    </BrowserRouter>
  );
}
}

export default App;
