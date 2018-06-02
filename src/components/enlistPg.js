import React, { Component } from 'react';
import '../css/App.css';





class EnlistPg extends Component {

  componentDidMount(){
    // loaderKill();
    // compTrans();
    console.log("COMPONENT MOUNTED:Enlist");

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




    );



  }

}

export default EnlistPg;
