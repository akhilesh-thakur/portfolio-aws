import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
