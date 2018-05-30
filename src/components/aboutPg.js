import React, { Component } from 'react';
import '../css/App.css';




class AboutPg extends Component {

  componentDidMount(){
    // loaderKill();
    console.log("COMPONENT MOUNTED:About");

  }

  render() {


    return(

        <div className="site-wrapper">

          <div className="site-wrapper-inner">

            <div className="cover-container">


              <div className="inner cover">
                <h1 className="cover-heading">ABOUT</h1>
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

export default AboutPg;
