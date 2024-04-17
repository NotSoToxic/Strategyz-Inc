import React from "react";

const firstLocation =
  "STRATEGYZ Technologies PVT. LTD. We Work Institutional Area, Sector 44, Gurgaon, Haryana, India - 122002";
const secondLocation =
  "STRATEGYZ Technologies PVT. LTD. Bannerghatta Road, Bengaluru, Karnataka, India - 560076";
const iframeSrcAddress1 =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.544486188889!2d77.0646029!3d28.4560152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6af56b5a1202865b%3A0xdf2a55d5213c97ff!2sStrategyz+Inc.!5e0!3m2!1sen!2sin!4v1645561134858!5m2!1sen!2sin";
const iframeSrcAddress2 =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.544486188889!2d77.0646029!3d28.4560152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6af56b5a1202865b%3A0xdf2a55d5213c97ff!2sStrategyz+Inc.!5e0!3m2!1sen!2sin!4v1645561134858!5m2!1sen!2sin";
export const Locations = (props) => {
  return (
    <>
      <div id="location">
        <div id="location-main-container">
          <div id="address">
            <div id="addressOne">
              <h1>Address-1</h1>
              <p>{firstLocation}</p>
              <div id="map-section">
                <iframe
                  title="Location Map"
                  src={iframeSrcAddress1}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="eager"
                />
              </div>
            </div>
            <div id="addressTwo">
              <h1>Address-2</h1>
              <p>{secondLocation}</p>
              <div id="map-section">
                <iframe
                  title="Location Map"
                  src={iframeSrcAddress2} //to be changed to bengluru location
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div id="location-form">
          <div className="">
                <h2>Contact Us</h2>
          </div>
              <form name="" validate >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                
                <button type="submit" className="btn  btn-lg">
                  Send Message
                </button>

              </form>
          </div>
        </div>
      </div>
    </>
  );
};
