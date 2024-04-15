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
    <div id="location">
      <div className="main-container">
        <div id="address-container">
          <div id="address-map-container">
            <div id="address-section">
              <h1>Address-1</h1>
              <p>{firstLocation}</p>
            </div>
            <div id="map-section">
              <iframe
                title="Location Map"
                src={iframeSrcAddress1}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
          <div id="address-map-container">
            <div id="address-section">
              <h1>Address-2</h1>
              <p>{secondLocation}</p>
            </div>
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

 
      </div>
    </div>
  );
};
