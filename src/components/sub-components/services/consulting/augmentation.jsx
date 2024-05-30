import React from "react";
import augvedio from "../../../assets/banner_vedio/aug_banner.mp4";

export const Augmentation = (props) => {
  const handleClick = () => {
    const infoSection = document.getElementById("aug_footer");
    infoSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
        <div id="augmentation" className="staff-class">
          <div className="aug_header">
            <video autoPlay loop muted className="aug_video-background">
              <source src={augvedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="aug_content">
              <h3>Welcome to Strategyz Inc.</h3>
              <h2>Staff Augmentation Services</h2>
              <p className="aug_p">
                At Startegyz Inc., we offer premier staff augmentation services to
                help your organization thrive in today's competitive landscape.
                Our expert team of recruiters and consultants is dedicated to
                finding the right talent to fill your temporary or long-term
                staffing needs.
              </p>
            </div>
            <div className="aug_button_div">
              <button id="aug_button" onClick={handleClick}>
                Explore More
              </button>
            </div>
          <div id="staffAugmentation">
          
          <section id="empowerStaff">

              <h2 className="display-1 " id="b2">Transform Your Buisness with our IT Consulting</h2>
              <h1 className="display-1" id="headding">Maximize Efficency and Innovation </h1>

              <div className="sec1buttons">
              <div className="getStartedB">
              <button type="button" class="btn btn-lg" id="staffButton" href="#features">
                <a href="#features">Learn More</a> 
              </button>
              </div>
              <div className="learnMoreB">
              <button type="button" class="btn btn-lg" id="buisnessButton" >
                  {/* redirected to info page for form filling */}
                  <a href="/info">Get Started</a>  
              </button>
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
                <li>Contract Staffing</li>
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

          {/* <div className="augmentation-features">
            <div className="feature">
              <i className="fas fa-users"></i>
              <h2>Flexible Staffing Solutions</h2>
              <p>
                Whether you need one specialist or an entire team, we provide
                flexible staffing solutions tailored to your requirements.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-cogs"></i>
              <h2>Technical Expertise</h2>
              <p>
                Our consultants possess a diverse range of technical skills and
                industry experience to meet your project's demands.
              </p>
            </div>
            <div className="feature">
              <i className="far fa-handshake"></i>
              <h2>Seamless Integration</h2>
              <p>
                We ensure seamless integration of our staff into your existing
                teams and workflows, minimizing disruptions and maximizing
                productivity.
              </p>
            </div>
          </div> */}
        </div>
        <section className="aug_footer" id="aug_footer">
          <div>
            <h1>More on us</h1>
          </div>
          <div className="letterbox-container">
            <div className="letterbox">
              <h3>Customized Solutions</h3>
              <p>Tailored services to meet your specific needs and objectives.</p>
            </div>
            <div className="letterbox">
              <h3>Expert Consultation</h3>
              <p>Access to experienced consultants for strategic guidance.</p>
            </div>
            <div className="letterbox">
              <h3>Continuous Support</h3>
              <p>
                Round-the-clock assistance and support for seamless operations.
              </p>
            </div>
            <div className="letterbox">
              <h3>Industry-Leading Solutions</h3>
              <p>Access to cutting-edge technologies and innovative solutions.</p>
            </div>
          </div>
        </section>
</>
  );
};
