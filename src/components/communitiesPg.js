import React, { Component } from 'react';
import '../css/App.css';





class CommunitiesPg extends Component {

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
                <div className='bannerTxt'>
                  <h1>ENLIST</h1>
                  <h4>JOIN OUR RANKS</h4>
                </div>

                <div className="content contentOne">

                </div>

              </div>


            </section>
            <section className="two" id="about">

                <div className="whyWrapper">



                  <div className="content">
                  <h1 className="cover-heading">WHY JOIN?</h1>

                    <p>The Holy Sepluchre is a constantly growing community, we are both
                     welcoming and excited for new members. We want you to learn and grow
                     with our members and we also hope to learn something from you as well.
                    </p>
                  </div>

                  <div className="content">
                  <h1 className="cover-heading"> A LARGE COMMUNITY</h1>
                  <i className="fa fa-users"></i>

                    <p>We have over 1,600 members and span several games, constantly adding
                      new ones. Join one of our many chatrooms spanning from game game discussion
                      to memes.
                    </p>
                  </div>

                  <div className="content">
                  <h1 className="cover-heading"> EVENTS AND COMPETITION</h1>
                  <i className="fa fa-trophy"></i>


                    <p>We regularly hold community events going beyond just solo and team battles.
                      With a community as large as ours expect a variety of competition.
                    </p>
                  </div>

                  <div className="content">
                  <h1 className="cover-heading">MAKE FRIENDS, PARTY UP</h1>
                  <i className="fa fa-handshake-o" ></i>
                    <p> If you have problems finding regular groups, we got you covered!
                      based on your timezone you will be given a leigon. That leigon
                      will have more than plenty of people to meet and link up!
                    </p>
                  </div>


                </div>


              </section>
              <section className="three" id="about">

                  <div className="discWrapper">



                    <div className="content">
                    <h1 className="cover-heading">WHAT ARE YOU WAITING FOR?</h1>


                    <a href='#'><i className="fab fa-discord"></i></a>

                    </div>

                  </div>


                </section>


            </div>




    );



  }

}

export default CommunitiesPg;
