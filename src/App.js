import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/App.css';
import BaseLayout from './components/baseLayout';
import SplashPage from "./components/splashPage";
import About from "./components/aboutPg";
import Enlist from "./components/enlistPg";
import Communities from "./components/communitiesPg";



class App extends Component {


  render() {
    return (

    <BrowserRouter>
    <BaseLayout>
      <Route render={({location})=> console.log(location)|| (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade'timeout={400}>
            <Switch location={location}>
                <Route exact path="/" component={SplashPage}/>
                <Route  exact path="/About" component={About}/>
                <Route  exact path="/Enlist" component={Enlist}/>
                <Route  exact path="/Communities" component={Communities}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
      </BaseLayout>
    </BrowserRouter>

  );
}
}

export default App;
