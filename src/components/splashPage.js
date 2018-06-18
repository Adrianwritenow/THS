import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import '../css/App.css';

function lowerZIndex(event){
  event.preventDefault();
  let gameInfo = event.currentTarget.firstChild;
  let gameVid =gameInfo.nextElementSibling
  gameVid.style.zIndex='0';
  console.log('im entering');
}
function raiseZIndex(event){
  event.preventDefault();

  let gameInfo = event.currentTarget.firstChild;
  let gameVid =gameInfo.nextElementSibling;
  gameVid.style.zIndex='1';

  // gameVid.style.zIndex='1';

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
            <video playsInline autoPlay muted loop='true' id="myVideo"  poster='public/../png/fhStill.jpg' webkit-playsInline>
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
                <p><span>The Holy Sepulchre</span> is a gaming community consisting of
                  over 1,600 members supporting games such as Rainbow 6 Siege,
                  Darksouls, Monster Hunter, Sea of Thieves and more! It is also <span>the LARGEST For Honor
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
              <p>We have A very large community, and great leadership, introducing the <span>THS</span> Grand Masters:</p>
            </ScrollAnimation>
              <div className="modWrapper">



                <div className="modContent">

                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "BAMF has been a part of the community since it's conception. Spearheading a lot of initiatives throughout
                      the community, frequently hosting meetings for members and moderators alike, encouraging positive behavior
                      and trying to be a model leader. "
                    </p>
                  </div>
                  <img src='png/bamf.png' className='modImg'/>
                </div>
                <p><span>GRANDMASTER</span><br/>BAMF</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "A stalwart optimist and diplomat. With love of jolly cooperation, alongside his
                      penchant for cosplay and immersive character monologues. Saint Axios continues to
                       stand by his vows to serve every single one of The Sepulchre's members, from recruit
                      to commander, all the while with a smile on his face."
                    </p>
                  </div>
                  <img src='png/axios.png' className='modImg'/>
                </div>
                <p><span>GRANDMASTER</span><br/>AXIOS</p>

                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "Joined the community a few weeks after its creation and slowly worked his way
                      up the ranks. Besides doing the work behind the scenes, he's also actively
                      communicating with all the members. Is known for being to the point, honest and direct."
                    </p>
                  </div>
                  <img src='png/luukiejj.png' className='modImg'/>
                </div>
                <p><span>GRANDMASTER</span><br/>LUUKIEJJ</p>

                </ScrollAnimation>

                <ScrollAnimation animateIn='flipInY'>
                <div className='modInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                  <div className='modInfo'>
                    <p className='modText'>
                      "Has been a part of the community since its creation, and currently does most
                      of the work behind the scenes. Most of what he does is record data, works closely
                      with the justice department of the community, and solves technical problems with any
                       bots, channels, or roles."
                    </p>
                  </div>
                  <img src='png/virr.png' className='modImg'/>
                </div>
                <p><span>GRANDMASTER</span><br/>VIRR</p>

                </ScrollAnimation>


                </div>

              </div>


            </section>


        </div>


    );



  }

}


export default SplashPage;
