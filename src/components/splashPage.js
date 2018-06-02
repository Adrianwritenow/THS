import React, { Component } from 'react';
import '../css/App.css';




class SplashPage extends Component {
  componentWillMount(){

  }

  componentDidMount(){
    // loaderKill();
    // compTrans();
    console.log("COMPONENT MOUNTED:Splash");

  }

  render() {


    return(
      <div className="contentWrapper">


      <section className="one" id="about">


          <div className="wrapper">
            <div className='bannerTxt'>
              <h1>THS</h1>
              <h4>GAMING COMMUNITY</h4>
            </div>

            <div className="content contentOne">
            <video autoPlay muted loop='true' id="myVideo">
                <source src="thsOpenVid.mp4" type="video/mp4"/>
                Your browser does not support HTML5 video.
              </video>
            </div>

          </div>


        </section>
        <section className="two" id="about">

            <div className="wrapper">



              <div className="content">
              <h1 className="cover-heading">WHAT IS THS?</h1>
              <img className='thsLogo' src='png/THS.png' alt='THS_LOGO'/>
                <p>The Holy Sepluchre is a gaming community consisting of
                  over 1,600 members  with communities in Rainbow 6 Siege,
                  Darksouls, Monster Hunter and is the LARGEST For Honor
                  Knights community.
                </p>
              </div>

            </div>


          </section>
          <section className="three" id="about">

              <div className="wrapper">



                <div className="content">
                <h1 className="cover-heading">COMMUNITY LEADERS</h1>

                  <p>We have A very large community, here are the THS Moderators </p>
                </div>

              </div>


            </section>


        </div>

        // <div className="site-wrapper">
        //
        //
        //           <div className="site-wrapper-inner">
        //
        //
        //             <div className="cover-container">
        // <div className="inner cover">
        //
        // </div>
        // </div>
        // </div>
        //
        //
        //
        //   <div className="site-wrapper-inner">
        //
        //
        //     <div className="cover-container">
        //     <section>
        //
        //
        //       <div className="inner cover">

        //         <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        //         <p className="lead">
        //           <a href="#" className="btn btn-lg btn-default">Learn more</a>
        //         </p>
        //       </div>
        //
        //
        //       <div className="mastfoot">
        //         <div className="inner">
        //         </div>
        //       </div>
        //       </section>
        //
        //     </div>
        //
        //   </div>
        // </div>


    );



  }

}


export default SplashPage;
