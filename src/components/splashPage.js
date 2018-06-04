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
                <source src="public/../thsOpenVid.mp4" type="video/mp4"/>
                Your browser does not support HTML5 video.
              </video>
            </div>

          </div>


        </section>
        <section className="two bg" id="about">

            <div className="wrapper">



              <div className="content">
              <h1 className="cover-heading">WHAT IS <span>THS</span>?</h1>
              <img className='thsLogo' src='png/THS.png' alt='THS_LOGO'/>
                <p><span>The Holy Sepluchre</span> is a gaming community consisting of
                  over 1,600 members  with communities in Rainbow 6 Siege,
                  Darksouls, Monster Hunter and is <span>the LARGEST For Honor
                  Knights community</span>.
                </p>
              </div>

            </div>


          </section>
          <section className="three bg" id="about">

              <div className="wrapper">



                <div className="content">
                <h1 className="cover-heading">COMMUNITY LEADERS</h1>

                  <p>We have A very large community, here are the <span>THS</span> Moderators </p>
                </div>

              </div>


            </section>


        </div>


    );



  }

}


export default SplashPage;
