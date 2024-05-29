import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = (props) => {
  const formRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const departments = [
    "Sales",
    "HR",
    "Customer Support",
    "Finance",
    "Marketing",
    "Product Development",
    "Other"

  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    const fields = ['name', 'email', 'phone', 'department', 'message'];
    for (const field of fields) {
      if (!formRef.current[field].value) {
        setErrorMessage('Please fill out all fields');
        return;
      }
    }

    // If all fields are filled, send the email
    emailjs
      .sendForm('service_girwh06', 'template_q1wh0lc', e.target, 'nk1ZZwdR1WkFqw1yn')
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Email sent successfully!');
          formRef.current.reset(); // Reset form fields
          setErrorMessage('');
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('Too many requests, Please try again later.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container contact-us-content">
          <div className="contact-form">
            <div className="contact-row">
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
                < div class="row">
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
                <div className="col-md-6">
            <div className="form-group">
              <select
                id="department"
                name="department"
                className="form-control"
                required
              >
                 <option value="">Select a department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
                </select>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          </div>
                {/* <div class="col-md-6"> */}
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                {/* </div> */}
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </form>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span></p>
                <div className='contact-address'>
                  <p className='address1'>
                {props.data ? props.data.address : "loading"}
              </p>
              <p className='address2'>
                
                {props.data ? props.data.address2 : "loading"}
              </p>
              </div>
            </div>
            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <div className='contact-address'>
              <p className='address1'>
                <span>
                   CIN Number
                </span>{" "}
                U62011HR2024PTC121414
              </p>
            
              <p className='address2'>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
              </div>
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
