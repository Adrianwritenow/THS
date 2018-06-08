import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/App.css';
import BaseLayout from './components/baseLayout';
import SplashPage from "./components/splashPage";
import Enlist from "./components/enlistPg";
import Communities from "./components/communitiesPg";



class App extends Component {
  componentWillMount(){
    var x = document.getElementById("loader");
    var y = document.getElementById("root");

    y.style.opacity='0';
    y.style.height='0vh';
    setTimeout(function(){x.style.display='none'},4000);

  }
  componentDidMount(){
    var y = document.getElementById("root");
    setTimeout(function(){y.style.opacity=1, y.style.transition='opacity 250ms ease-in'},4000);



  }


  render() {
    return (

    <BrowserRouter>
    <BaseLayout>
      <Route render={({location})=> console.log(location)|| (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade'timeout={400}>
            <Switch location={location}>
                <Route exact path="/" component={SplashPage}/>
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
