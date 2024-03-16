import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = (props) => {
  const formRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    const fields = ['name', 'email', 'message'];
    for (const field of fields) {
      if (!formRef.current[field].value) {
        setErrorMessage('Please fill out all fields');
        return;
      }
    }

    // If all fields are filled, send the email
    emailjs
      .sendForm('service_ieb6kha', 'template_w2wnukt', e.target, 'ZIOaFVaBQHwXz4G5N')
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Email sent successfully!');
          formRef.current.reset(); // Reset form fields
          setErrorMessage('');
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('Failed to send email. Please try again later.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-7">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit} ref={formRef}>
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
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </form>
            </div>
          </div>
          <div className="col-md-5 col-md-offset-0 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
              <p>
                
                {props.data ? props.data.address2 : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Strategyz Inc.
              All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
