import React, { Component } from 'react';
import '../css/App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


function lowerZIndex(event){
  event.preventDefault();
  let gameInfo = event.currentTarget.firstChild;
  let gameVid = gameInfo.nextElementSibling;
  gameVid.currentTime=0;
  gameVid.play();
  gameVid.style.zIndex='0';
  console.log('im entering');
}
function raiseZIndex(event){
  event.preventDefault();

  let gameInfo = event.currentTarget.firstChild;
  let gameVid =gameInfo.nextElementSibling;
  gameVid.currentTime=0;
  gameVid.style.zIndex='1';
  gameVid.pause();

  console.log('im leavin');
}



class CommunitiesPg extends Component {
  constructor(props) {
  super(props);

}



  componentDidMount(){
  let top = document.getElementById('one');
  top.scrollIntoView();

console.log("COMPONENT MOUNTED:Communities");

  }



  render() {


    return(
          <div className="contentWrapper" id='one'>
            <section className="one bg" id="about">
              <div className="wrapper">
                <div className='communitiesTxt'>
                  <ScrollAnimation animateIn='zoomInDown'>
                    <h1 className='headerTop'>COMMUNITIES</h1>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomInUp'>
                    <h4>GAMES WE PLAY</h4>
                  </ScrollAnimation>
                </div>
                <div className="content contentOne">
                </div>
              </div>
            </section>
            <section className="two bg" id="about">
              <div className="whyWrapper">
                <div className="communitiesContent">

                <ScrollAnimation animateIn='bounceInDown'>
                  <div className='communityInfoWrap'onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p><span>THS IS THE LARGEST DEDICATED KNIGHT FACTION IN FOR HONOR!</span><br />
                        Enter the chaos of war as a bold knight and master the Art
                        of Battle in brutal, fast-paced melee combat.
                      </p>
                    </div>
                    <video playsInline muted loop='true' id="r6Video" webkit-playsinline poster='public/../png/fhBg.jpg'>
                      <source src="public/../comVidFH.mp4" type="video/mp4"/>

                      Your browser does not support HTML5 video.
                    </video>
                  </div>

                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInDown' >
                  <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p>Choose from a variety of unique Counter-Terrorist Operators and master their abilities
                       as you lead your team through tense, thrilling, and destructive team-based combat.</p>
                    </div>
                    <video playsInline muted loop='true' id="r6Video" webkit-playsinline poster='public/../png/R6.jpg'>
                      <source src="public/../comVidR6s.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInDown' >
                    <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                      <div className='communityInfo'>
                        <p>Take on the role of a hunter venturing into a new continent where you track down and
                         slay ferocious beasts in heart-pounding battles.</p>
                      </div>
                      <video playsInline muted loop='true' id="r6Video" webkit-playsinline>
                        <source src="public/../comVidMHs.mp4" type="video/mp4" poster='public/../png/mHw.png'/>
                          Your browser does not support HTML5 video.
                      </video>
                    </div>
                  </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInDown'>
                  <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p>Set in the Kingdom of Lothric, a bell has rung to signal that the First Flame,
                      responsible for maintaining the Age of Fire, is dying out. As has happened many times
                      before, the coming of the Age of Dark produces the undead.</p>
                    </div>
                    <video playsInline muted loop='true' id="r6Video" webkit-playsinline poster='public/../png/ds3Logo.jpg'>
                      <source src="public/../comVidDS.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                      </video>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInDown'>
                  <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p>"The pirate life. Not everything that sails the Sea of Thieves can be invited for
                        a pint of grog in the local tavern. Wild animals and exotic creatures are waiting to
                         be discovered, but the greater threat comes from the remains of previous pirates who
                          haven't learned to take death lying down."</p>
                    </div>
                    <video playsInline muted loop='true' id="r6Video" webkit-playsinline poster='public/../png/seaOfTcom.jpg'>
                      <source src="public/../sOtComVid.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                      </video>
                  </div>
                </ScrollAnimation>
                </div>
              </div>
            </section>
          </div>
    );
  }
}

export default CommunitiesPg;
