import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export const Locations = (props) => {
  const firstLocation =
  "Abiroo Strategyz Technologies Private Limited, WeWork Forum, DLF Cyber City, DLF Phase 3, Sector 24, Gurugram, Haryana 122002";
  const secondLocation =
  "Abiroo Strategyz Technologies Private Limited,WeWork Forum, Bannerghatta Rd, Arekere Village, Begur Hobli, Bengaluru, Karnataka 560076";
  const iframeSrcAddress1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.544486188889!2d77.0646029!3d28.4560152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6af56b5a1202865b%3A0xdf2a55d5213c97ff!2sStrategyz+Inc.!5e0!3m2!1sen!2sin!4v1645561134858!5m2!1sen!2sin";
  const iframeSrcAddress2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.318574076183!2d77.5971658!3d12.887225099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15480ec31b5b%3A0x2ee906dd2ca3768!2sWeWork%20Salarpuria%20Symbiosis!5e0!3m2!1sen!2sin!4v1718432787881!5m2!1sen!2sin";



  //for form
  const formRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    const fields = ["name", "email", "phone", "organisation", "message"];
    for (const field of fields) {
      if (!formRef.current[field].value) {
        setErrorMessage("Please fill out all fields");
        return;
      }
    }
    // If all fields are filled, send the email
    emailjs
      .sendForm(
        "service_ab57exb","template_bskri0w", e.target, "ZIOaFVaBQHwXz4G5N")
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Email sent successfully!");
          formRef.current.reset(); // Reset form fields
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Too many requests. Please try again later.");
          setSuccessMessage("");
        }
      );
  };
  //for form refer from contact.jsx

  return (
    <>
      <div id="location">
        <div id="location-main-container">
          <div id="address">
            <div id="addressOne">
              <h1>Head office | Gurgaon</h1>
              <p>{firstLocation}</p>
              <div id="map-section">
                <iframe
                className="map-iframe"
                  title="Location Map"
                  src={iframeSrcAddress1}
                  width="645"
                  height="475"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="eager"
                />
              </div>
            </div>
            <div id="addressTwo">
              <h1>Corporate office | Bengaluru</h1>
              <p>{secondLocation}</p>
              <div id="map-section">
                <iframe
                className="map-iframe"
                  title="Location Map"
                  src={iframeSrcAddress2} //to be changed to bengluru location
                  width="645"
                  height="475"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div id="location-form">
            <div>
              <h2>Contact Us</h2>
            </div>
            <form name="" validate onSubmit={handleSubmit} ref={formRef}>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control"
                      placeholder="Phone Number"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      class="form-control"
                      placeholder="Organization"
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  rows="6"
                  placeholder="Message"
                  required
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>

              <button type="submit" class="btn btn-lg">
                Send Message
              </button>
              {/* set css to error messages - remove this after css is set */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
      <div id="location-footer">
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Strategyz Inc.
              All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </>
  );
};
