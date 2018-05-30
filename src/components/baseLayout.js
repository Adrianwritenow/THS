import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import '../css/App.css';





class BaseLayout extends Component {

  componentDidMount(){
    // loaderKill();
    // compTrans();
    console.log("COMPONENT MOUNTED:BaseLayout");

  }

  render() {


    return(

              <div className="masthead clearfix">
                <div className="inner">
                  <h3 className="masthead-brand">Cover</h3>
                  <nav>
                    <ul className="nav masthead-nav">
                      <li className="active"><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink exact to="/About">About</NavLink></li>
                      <li><NavLink exact to="/Enlist">Enlist</NavLink></li>
                      <li><NavLink exact to="/Communities">Communities</NavLink></li>
                    </ul>
                  </nav>
                </div>
                {this.props.children}
              </div>





    );



  }

}

export default BaseLayout;
