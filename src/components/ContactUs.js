import React from 'react';
import { Formik, Field, Form } from 'formik';
import '../components/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1>Contact Us</h1>
        <h3>APULKI DIVYANG SEVA FOUNDATION</h3>
      </div>

      <div className="contact-us-section">
        <div className="contact-us-info">
          <h2>GET IN TOUCH</h2>
          <h4>
            Reach out to us today. We value your input and questions. Contact us for more information, partnerships, or to get involved in our mission for a better world.
          </h4>
        </div>

        <div className="contact-us-form">
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
              profession: '',
              dateOfBirth: '',
              time: '',
              message: '',
            }}
            onSubmit={(values) => {
              // Handle form submission logic here
              console.log('Form submitted with values:', values);
            }}
          >
            <Form>
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone:</label>
                <Field type="tel" id="phone" name="phone" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
              </div>

              <div className="form-field">
                <label htmlFor="profession">Purpos to meet:</label>
                <Field type="text" id="profession" name="profession" />
              </div>

              <div className="form-field">
    <label htmlFor="dateTime">Date and Time:</label>
    <Field type="datetime-local" id="dateTime" name="dateTime" />
</div>

             

              <div className="form-field">
                <label htmlFor="message">Message:</label>
                <Field as="textarea" id="message" name="message" placeholder="Your message..." />
              </div>

              <div className="form-field">
                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="contact-us-address">
    <div className="contact-card">
        <h2>Office Address</h2>
        <p>Vijay Pandit Pagade, Charholi Khurd, Khed, Pune (Pagadewasti), MH- 412105</p>
    </div>

    <div className="contact-card">
        <h2>Phone No</h2>
        <p>+91 8856831110 / +91 9881165227</p>
    </div>

    <div className="contact-card">
        <h2>Email Address</h2>
        <p>apulkidsf1110@gmail.com</p>
    </div>
</div>

      </div>
    </div>
  );
}

export default ContactUs;
