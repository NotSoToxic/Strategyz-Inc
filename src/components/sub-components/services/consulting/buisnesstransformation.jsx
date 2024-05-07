import React from "react";

export const Buisnesstransformation = (props) => {
    return (
        <div id="buisnesstransformation">
        
        <section id="empowerBuisness">

            <h2 className="display-1 " id="b2">Transform Your Buisness with our IT Consulting</h2>
            <h1 className="display-1" id="headding">Maximize Efficency and Innovation </h1>

            <div className="sec1buttons">
            <div className="getStartedB">
            <button type="button" class="btn btn-lg" id="buisnessButton" href="#features">
              <a href="#features">Get Started</a> 
            </button>
            </div>
            <div className="learnMoreB">
            <button type="button" class="btn btn-lg" id="buisnessButton">Learn More</button>
            </div>
            </div>

            

        </section>
        
        <section id="features">
      <h2 id="fH">Our Key Consulting Features</h2>
      <h3 id="fH">Empowering businesses through strategic transformation</h3>
      
      
      <div id="featuresSection" className="featureSection container">
      
      <div id="firstRow" className="row">
      <div class id="strategicPlanning" className=" col-md-6" >
        <h3>Strategic Planning</h3>
        <p className=""> Develop customized strategies to drive buisness growth </p>
      </div> 

      <div id="changeManagement" className="col-md-6">
        <h3>Change Management</h3>
        <p>Implement effective change management processes for smooth transitions</p>
      </div>
      </div>

      <div id="secondRow" className="row">
      <div id="offered" className="col-md-6" >
        <h3>Services Offered</h3>
        <ul>
          <li>Contact Staffing</li>
          <li>Permanent Staffing</li>
          <li>Contact-to-hire Services</li>
          <li> Executive search and placement</li>
        </ul>
      </div>

      <div id="whyChoose" className="col-md-6">
        <h3>Why choose us ?</h3>
        <ul>
          <li>Experienced Team of recruiters and HR</li>
          <li>Proven track record of sucessful placements</li>
          <li>Customized solutions tailored to client needs </li>
          <li>Extensive candidate database and network</li>
        </ul>
      </div>
      </div>
      
      </div>
      
      {/* <ul>
        <li>
          <h3>Strategic Planning</h3>
          <p>Develop customized strategies to drive business growth</p>
        </li>
        <li>
          <h3>Change Management</h3>
          <p>Implement effective change management processes for smooth transitions</p>
        </li>
      </ul> */}
    </section>
        </div>
    );
};