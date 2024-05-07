import React from "react";
import Bgvedio from "D:/Stratrgyzinc/Strategyz-Inc/src/components/assets/banner_vedio/banner4.mp4";

export const Consulting = (props) => {
  const handleClick = () => {
    // Redirect to the info_section
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
          <h2>An Odyssey of Innovation and Excellence</h2>
          <h3>Embark on a Journey Through Our Vision, Values, and Victories</h3>
          <div className="con_container">
            <div className="con_container_one">
              <h4>Transformative Solutions Customized for Your Success</h4>
              <p>
                At Strategyz Inc., we specialize in providing tailored
                technology consulting services to businesses and users alike.
                With our deep expertise in the latest technological advancements
                and industry trends, we collaborate closely with our clients to
                develop innovative solutions that drive growth and maximize
                efficiency.
              </p>
              <p>
                From digital transformation strategies to software development
                and implementation, our team of seasoned consultants works
                tirelessly to unlock the full potential of technology for our
                customers. We believe in fostering long-term partnerships built
                on trust, integrity, and a shared commitment to success.
              </p>
              <p>
                Whether you're a startup looking to disrupt the market or an
                established enterprise seeking to stay ahead of the curve, we're
                here to guide you every step of the way. Partner with us and
                let's embark on a transformative journey towards a brighter,
                more prosperous future.
              </p>
            </div>
            <div className="con_container_one">
              <h4>Comprehensive Solutions Tailored to Your Needs</h4>
              <p>
                Our dedication to excellence extends beyond technology
                consulting. We offer a comprehensive suite of services designed
                to address your unique challenges and objectives. From project
                management and quality assurance to training and support, we're
                committed to delivering results that exceed your expectations.
              </p>
              <p>
                With a focus on innovation, collaboration, and continuous
                improvement, we strive to be your trusted partner in navigating
                the complexities of the digital landscape. Let us empower your
                business to thrive in an ever-evolving world.
              </p>
              <p>
                Our team of experts is dedicated to staying ahead of the curve,
                constantly researching and implementing the latest technologies
                and methodologies. By leveraging cutting-edge solutions, we
                ensure that your business remains competitive and future-proof
                in today's dynamic market.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
