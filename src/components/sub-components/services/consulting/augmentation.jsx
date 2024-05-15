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
            <h1 id="aug_title">Staff Augmentation Services</h1>
            <p>
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
