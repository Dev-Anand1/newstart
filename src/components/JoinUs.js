import React from 'react';
import { Formik, Field, Form } from 'formik';
import '../components/JoinUs.css'; // Assuming you've created a new CSS file

function UpdatedJoinUs() {
  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '', email: '', message: '' }}
      onSubmit={(values) => {
        console.log('Submitted values:', values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <>
          <div className="updated-join-us-container">
            <h1 className="updated-join-us-heading">Get Involved</h1>
            <p className="updated-join-us-description">
              Join us in our mission to empower disabled individuals and create a
              more inclusive society. Your support can make a meaningful
              difference in their lives, helping them thrive independently and lead
              fulfilling lives. Together, we can foster compassion and
              understanding.
            </p>
          </div>

          <Form className="updated-join-us-form">
            <label htmlFor="name" className="updated-join-us-label">
              Your Name:
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="updated-join-us-input"
              value={values.name}
              onChange={handleChange}
            />

            <label htmlFor="phoneNumber" className="updated-join-us-label">
              Your Phone Number:
            </label>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className="updated-join-us-input"
              value={values.phoneNumber}
              onChange={handleChange}
            />

            <label htmlFor="email" className="updated-join-us-label">
              Your Email:
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="updated-join-us-input"
              value={values.email}
              onChange={handleChange}
            />

            <label htmlFor="message" className="updated-join-us-label">
              Your Message:
            </label>
            <Field
              id="message"
              name="message"
              type="textarea"
              className="updated-join-us-input"
              rows="5"
              value={values.message}
              onChange={handleChange}
            />

            <button type="submit" className="updated-join-us-submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default UpdatedJoinUs;
