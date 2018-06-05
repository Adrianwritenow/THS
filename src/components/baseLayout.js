import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';


import '../css/App.css';





class BaseLayout extends Component {

  componentDidMount(){
    // loaderKill();
    // compTrans();
    console.log("COMPONENT MOUNTED:BaseLayout");

  }

  render() {


    return(

              <div className="masthead">
                  <nav>
                    <ul className="nav">
                      <li><NavLink exact path to="/#one">HOME</NavLink></li>
                      <li><HashLink exact  to="/#about">ABOUT</HashLink></li>
                      <li><NavLink exact  to="/Enlist">ENLIST</NavLink></li>
                      <li><NavLink exact  to="/Communities">COMMUNITIES</NavLink></li>
                    </ul>
                  </nav>
                {this.props.children}
                <div className='mastfoot'>ADRIANWRITENOW.COM</div>
              </div>





    );



  }

}

export default BaseLayout;
