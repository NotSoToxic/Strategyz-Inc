import React from "react";

export const Buisnesstransformation = (props) => {
    return (
        <div id="buisnesstransformation">
        
        <section id="empowerBuisness">

            <h2 className="display-1 " id="b2">Empower Your Buisness with IT Consulting</h2>
            <h1 className="display-1" id="headding">Maximize Efficency and Innovation </h1>

            <div className="sec1buttons">
            <div className="getStartedB">
            <button type="button" class="btn btn-lg" id="buisnessButton">Get Started</button>
            </div>
            <div className="learnMoreB">
            <button type="button" class="btn btn-lg" id="buisnessButton">Learn More</button>
            </div>
            </div>

            

        </section>
        
        <section id="features">
      <h2>Our Key Consulting Features</h2>
      <p>Empowering businesses through strategic transformation</p>
      
      
      <div className="featureSection">
      
      <div class id="strategicPlanning">
        <h3>Strategic Planning</h3>
      </div>
      
      <div id="changeManagement">
        <h3>Change Management</h3>
      </div>
      <div id="offered">
        <h3>Services Offered</h3>
      </div>
      <div id="whyChoose">
        <h3>Why choose us ?</h3>
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