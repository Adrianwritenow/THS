import React, { Component } from 'react';
import '../css/App.css';


function lowerZIndex(event){
  event.preventDefault();
  let gameInfo = event.currentTarget.firstChild;
  let gameVid =gameInfo.nextElementSibling;
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
    // loaderKill();
    // compTrans();

console.log("COMPONENT MOUNTED:Communities");

  }



  render() {


    return(
          <div className="contentWrapper">
            <section className="one" id="about">
              <div className="wrapper">
                <div className='communitiesTxt'>
                  <h1>COMMUNITIES</h1>
                  <h4>GAMES WE PLAY</h4>
                </div>
                <div className="content contentOne">
                </div>
              </div>
            </section>
            <section className="two" id="about">
              <div className="whyWrapper">
                <div className="communitiesContent">

                  <div className='communityInfoWrap'onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p><span>THS IS THE LARGEST DEDICATED KNIGHT FACTION IN FOR HONOR!</span><br />
                        Enter the chaos of war as a bold knight and master the Art
                        of Battle in brutal, fast-paced melee combat.

                      </p>
                    </div>
                    <video  muted loop='true' id="r6Video">
                      <source src="public/../comVidFH.mp4" type="video/mp4"/>
                      Your browser does not support HTML5 video.
                    </video>
                  </div>

                  <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p>Choose from a variety of unique Counter-Terrorist Operators and master their abilities
                       as you lead your team through tense, thrilling, and destructive team-based combat.</p>
                    </div>
                    <video  muted loop='true' id="r6Video">
                      <source src="public/../comVidR6.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                  </div>

                  <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p>Take on the role of a hunter venturing into a new continent where you track down and
                       slay ferocious beasts in heart-pounding battles.</p>
                    </div>
                    <video  muted loop='true' id="r6Video">
                      <source src="public/../comVidMH.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                  </div>

                  <div className='communityInfoWrap' onMouseEnter={lowerZIndex} onMouseLeave={raiseZIndex}>
                    <div className='communityInfo'>
                      <p>Set in the Kingdom of Lothric, a bell has rung to signal that the First Flame,
                      responsible for maintaining the Age of Fire, is dying out. As has happened many times
                      before, the coming of the Age of Dark produces the undead.</p>
                    </div>
                    <video  muted loop='true' id="r6Video">
                      <source src="public/../comVidDS.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                      </video>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
  }
}

export default CommunitiesPg;
