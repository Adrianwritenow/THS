import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import '../css/App.css';

function lowerZIndex(event){
  event.preventDefault();
  let gameInfo = event.currentTarget.firstChild;
  let gameVid =gameInfo.nextElementSibling;
  gameVid.style.zIndex='0';
  console.log('im entering');
}
function raiseZIndex(event){
  event.preventDefault();

  let gameInfo = event.currentTarget.firstChild;
  let gameVid =gameInfo.nextElementSibling;
  gameVid.style.zIndex='1';

  console.log('im leavin');
}



class SplashPage extends Component {
  componentWillMount(){

  }

  componentDidMount(){
    let top = document.getElementById('one');
    top.scrollIntoView();
    console.log("COMPONENT MOUNTED:Splash");

  }

  render() {


    return(
      <div className="contentWrapper" id='one'>


      <section className="one">


          <div className="wrapper">
            <div className='bannerTxt'>
              <ScrollAnimation animateIn='bounceInDown'>
                <h1 className='banner'>THS</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn='bounceInUp'>
                <h4>GAMING COMMUNITY</h4>
              </ScrollAnimation>

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
              <ScrollAnimation animateIn='fadeInUp'>
                <h1 className="cover-heading">WHAT IS <span>THS</span>?</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInY'>
                <img className='thsLogo' src='png/THS.png' alt='THS_LOGO'/>
              </ScrollAnimation>
                <p><span>The Holy Sepluchre</span> is a gaming community consisting of
                  over 1,600 members  with communities in Rainbow 6 Siege,
                  Darksouls, Monster Hunter and is <span>the LARGEST For Honor
                  Knights community</span>.
                </p>
              </div>

            </div>


          </section>
          <section className="three bg">
            <ScrollAnimation animateIn='fadeInDown'>
              <h1 className="cover-heading">COMMUNITY LEADERS</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
              <p>We have A very large community, here are the <span>THS</span> Moderators </p>
            </ScrollAnimation>
              <div className="modWrapper">



                <div className="modContent">

                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "BAMF has been a part of the community since it's conception.Spearheading a lot of initiatives throughout
                      the community and trying to be a model leader. "
                    </p>
                  </div>
                  <img src='png/bamf.png' className='modImg'/>
                </div>
                <p>GRANDMASTER BAMF</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "BAMF has been a part of the community since it's conception.Spearheading a lot of initiatives throughout
                      the community and trying to be a model leader. "
                    </p>
                  </div>
                  <img src='png/axios.png' className='modImg'/>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "BAMF has been a part of the community since it's conception.Spearheading a lot of initiatives throughout
                      the community and trying to be a model leader. "
                    </p>
                  </div>
                  <img src='png/luukiejj.png' className='modImg'/>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "BAMF has been a part of the community since it's conception.Spearheading a lot of initiatives throughout
                      the community and trying to be a model leader. "
                    </p>
                  </div>
                  <img src='png/virr.png' className='modImg'/>
                </div>

                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "BAMF has been a part of the community since it's conception.Spearheading a lot of initiatives throughout
                      the community and trying to be a model leader. "
                    </p>
                  </div>
                  <img src='png/westo.png' className='modImg'/>
                </div>

                </ScrollAnimation>

                </div>

              </div>


            </section>


        </div>


    );



  }

}


export default SplashPage;
