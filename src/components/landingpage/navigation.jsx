/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Navigation = (props) => {
  window.addEventListener('resize', function() {
    const links = document.querySelectorAll('.service-link');

    if (window.innerWidth <= 768) {
        links.forEach(link => {
            if (link.href.includes('/ats')) {
                link.textContent = '↪ ATS';
            } else if (link.href.includes('/hrms')) {
                link.textContent = '↪ HRMS';
            } else if (link.href.includes('/vms')) {
                link.textContent = '↪ VMS';
            }
        });
    } else {
        links.forEach(link => {
            if (link.href.includes('/ats')) {
                link.textContent = '↪ Application Tracking System (ATS)';
            } else if (link.href.includes('/hrms')) {
                link.textContent = '↪ Human Resources Management System (HRMS)';
            } else if (link.href.includes('/vms')) {
                link.textContent = '↪ Vendor Management System (VMS)';
            }
        });
    }
});

// Trigger resize event to apply changes on page load
window.dispatchEvent(new Event('resize'));


  
  
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
                    <li><a href="/ats" className='service-link'>↪ Application Tracking System (ATS)</a></li>
                    <li><a href="/hrms" className='service-link'>↪ Human Resources Management System (HRMS)</a></li>
                    <li><a href="/vms" className='service-link'>↪ Vendor Management System (VMS)</a></li>
                  </ul>
                  </div>
                </li>
                <li>
                  <div className='services-offered'>
                  <h3>STRATEGYZ Learning</h3>
                  <ul className='services1'>
                    <li><a href='/careerplus'>↪ Career <span className='career+span'>+</span></a></li>
                    <li><a href="/hackathon">↪ Hackathon</a></li>
                    <li><a href="/internships">↪ Internship</a></li>
                    <li><a href="/courses">↪ Courses</a></li>

                  </ul>
                  </div>
                </li>

              </ul>
            </li>
    
            {/* <li className="dropdown">
              <a
                className=" page-scroll"
                data-toggle="hover"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Learning <span className="caret"></span>
                
                
              </a>
              <ul className="dropdown-menu vertical-dropdown">
                <li className='contact-list'>
                  <div className='services-offered  contact-info'>
                  <ul className='services1'>
                    <li><a href="/stratathon">↪ Stratathon</a></li>
                    
                  </ul>
                  </div>
                </li>
              </ul>
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
