/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Navigation = (props) => {
  

  
  
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container navbar-content">
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
          <a href = "/">
          <img src="./img/logo-nav.png" alt="Logo" href = "/"/>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="/strategyzinfo" className="page-scroll">
                About Us
              </a>
            </li>
            <li className="dropdown">
              <a
                
                className=" page-scroll"
                data-toggle="hover"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services <span className="caret"></span>
                
                
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className='services-offered'>
                  <h3>STRATEGYZ Consulting</h3>
                  <ul className='services1'>
                    <li><a href="/buisnesstransformation">↪ Business Transformation</a></li>
                    <li><a href="/consulting">↪ Technology Consulting</a></li>
                    <li><a href="/augmentation">↪ Staff Augmentation</a></li>
                  </ul>
                  </div>
                </li>
                <li>
                  <div className='services-offered'>
                  <h3>STRATEGYZ Software</h3>
                  <ul className='services1'>
                    <li><a href="/ats">↪ Application Tracking System (ATS)</a></li>
                    <li><a href="/hrms">↪ Human Resources Management System (HRMS)</a></li>
                    <li><a href="/vms">↪ Vendor Management System (VMS)</a></li>
                  </ul>
                  </div>
                </li>

              </ul>
            </li>
    
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            
            
            
            
            <li>
              <a href="/careers" className="page-scroll">
                Careers
              </a>
            </li>
            <li className="dropdown">
              <a
                className=" page-scroll"
                data-toggle="hover"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact Us <span className="caret"></span>
                
                
              </a>
              <ul className="dropdown-menu vertical-dropdown">
                <li className='contact-list'>
                  <div className='services-offered  contact-info'>
                  <ul className='services1'>
                    <li><a href="/locations">↪ Our Locations</a></li>
                    <li><a href="/info">↪ Download</a></li>
                  </ul>
                  </div>
                </li>
              </ul>
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
