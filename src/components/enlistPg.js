import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";





class EnlistPg extends Component {

  componentDidMount(){
    let top = document.getElementById('one');
    top.scrollIntoView();
    console.log("COMPONENT MOUNTED:Enlist");

  }

  render() {


    return(

      <div className="contentWrapper" id='one'>


      <section className="one bg">


          <div className="wrapper">
            <div className='bannerTxt'>
            <ScrollAnimation animateIn='zoomInDown'>
              <h1 className='banner'>ENLIST</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='zoomInUp'>
              <h4>LEARN HOW TO JOIN OUR RANKS</h4>
            </ScrollAnimation>

            </div>

            <div className="content contentOne">

            </div>

          </div>


        </section>
        <section className="two bg" id="about">

            <div className="whyWrapper">



              <div className="content">
              <ScrollAnimation animateIn='fadeInUp'>
                <h1 className="cover-heading">WHY JOIN?</h1>
              </ScrollAnimation>


                <p><span>The Holy Sepluchre</span> is a constantly growing community, we are both
                 welcoming and excited for new members. We want you to learn and grow
                 with our members and we also hope to learn something from you as well.
                </p>
              </div>

              <div className="content">
              <h1 className="cover-heading"> A LARGE COMMUNITY</h1>
              <ScrollAnimation animateIn='flipInY'>
                <i className="fa fa-users"></i>
              </ScrollAnimation>

                <p>We have over 1,600 members and span several games, constantly adding
                  new ones. Join one of our many chatrooms spanning from game game discussion
                  to memes.
                </p>
              </div>

              <div className="content">
              <h1 className="cover-heading"> EVENTS AND COMPETITION</h1>
              <ScrollAnimation animateIn='flipInY'>
                <i className="fa fa-trophy"></i>
              </ScrollAnimation>

                <p>We regularly hold community events going beyond just solo and team battles.
                  With a community as large as ours expect a variety of competition.
                </p>
              </div>

              <div className="content">
              <h1 className="cover-heading">MAKE FRIENDS, PARTY UP</h1>
              <ScrollAnimation animateIn='flipInY'>
                <i className="fa fa-handshake-o" ></i>
              </ScrollAnimation>
                <p> If you have problems finding regular groups, we got you covered!
                  based on your timezone you will be given a leigon. That leigon
                  will have more than plenty of people to meet and link up!
                </p>
              </div>


            </div>


          </section>
          <section className="three bg" id="about">

              <div className="discWrapper">



                <div className="content">
                <ScrollAnimation animateIn='pulse'>
                  <h1 className="cover-heading disc">JOIN US ON DISCORD</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInDown'>

                  <a href=' https://discord.gg/6yr9g7c'><i className="fab fa-discord"></i></a>
                </ScrollAnimation>

                </div>

              </div>


            </section>


        </div>




    );



  }

}

export default EnlistPg;
