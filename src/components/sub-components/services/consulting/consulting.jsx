import React from "react";
import Bgvedio from "../../../assets/banner_vedio/banner4.mp4";

export const Consulting = (props) => {
  const handleClick = () => {
    const infoSection = document.getElementById("con_footer");
    infoSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="consulting">
      <section id="con_header" className="video-banner">
        <video autoPlay loop muted className="video-background">
          <source src={Bgvedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Welcome to Strategyz Inc.</h1>
          <h4>Innovate. Elevate. Dominate.</h4>
          <h2>Empowering Growth Through Innovative Solutions</h2>
          {/* <h2>Where Vision Meets Execution: Crafting Your Path to Excellence</h2> */}
          <h3>Transforming Businesses with Strategic Consulting Expertise</h3>
          {/* Button with hover and click animation */}
          <button className="blue-button" onClick={handleClick}>
            Know Us More
          </button>
        </div>
      </section>
      <div>
        <section id="con_footer">
          <h1>Discover Our Story</h1>
          <h2>Innovation & Excellence: Our Guiding Principles</h2>
          <h3>Our Vision, Values, and Victories Define Our Success</h3>
          <div class="con_container">
            <div class="con_container_one">
              <h4>Transformative Solutions. Your Success.</h4>
              <ul>
                <li>
                  Tailored technology consulting for businesses and users.
                </li>
                <li>Deep expertise in cutting-edge advancements and trends.</li>
                <li>Innovative solutions that drive growth and efficiency.</li>
              </ul>
            </div>
            <div class="con_container_one">
              <h4>Comprehensive Services. Your Needs Met.</h4>
              <ul>
                <li>Suite of services addressing your unique challenges.</li>
                <li>
                  Project management, quality assurance, training, and support.
                </li>
                <li>
                  Focus on innovation, collaboration, and continuous
                  improvement.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
