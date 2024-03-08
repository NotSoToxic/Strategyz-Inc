import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href = "#page-top">
          <img src="./img/logo-nav.png" alt="Logo" href = "#page-top"/>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            
            <li>
              <a href="#team" className="page-scroll">
                Insights
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Career
              </a>
            </li>
          {/* </ul>
        </div>
        <div className="social">
          <ul className="nav navbar-nav navbar-right">       */}
            <li className="social">
              <a href= "https://www.linkedin.com/company/strategyzinc/" target="blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            {/* <li className="social">
              <a href={props.data ? props.data.twitter : "/"} target = "blank" >
                <i className="fa fa-twitter"></i>
              </a>
            </li> */}
            <li className="social">
              <a href= "https://www.instagram.com/strategyzinc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
