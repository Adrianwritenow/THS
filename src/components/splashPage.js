import React, { Component } from 'react';
import '../css/App.css';




class SplashPage extends Component {

  componentDidMount(){
    // loaderKill();
    // compTrans();
    console.log("COMPONENT MOUNTED:Splash");

  }

  render() {


    return(
        <div className="site-wrapper">

          <div className="site-wrapper-inner">

            <div className="cover-container"> 

              <div className="inner cover">
                <h1 className="cover-heading">Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                  <a href="#" className="btn btn-lg btn-default">Learn more</a>
                </p>
              </div>

              <div className="mastfoot">
                <div className="inner">
                </div>
              </div>
            </div>
          </div>
        </div>

    );



  }

}


export default SplashPage;
