import React from 'react';
import "../App.css"; // Assuming App.css contains your styles

const Contact = () => {
  return (
    <>
      <br /><br /><br />
      <div className="container">
      <div className="animated-background"></div>
        <div className="bg-dark text-white py-5 mt-4">
          <h1 className="text-center">Get in Touch</h1>
          <p className="text-justify text-center">
            We welcome any inquiries, feedback, or collaboration opportunities you might have. Our team is dedicated to providing assistance, answering your questions, and exploring potential partnerships. Feel free to reach out to us via the provided contact information or form below. We value your input and look forward to connecting with you.
          </p>
        </div>

        <div className="contact-container mt-4">
          <div className="contact-form">
            <div className="form-card1">
              <div className="form-card2">
                <form action='https://formspree.io/f/mqkvopnw' method="POST" className="form">
                  {/* <form action='https://formspree.io/f/mqkvopnw' method="POST"> */}
                  <p className="form-heading">Get In Touch</p>

                  <div className="form-field">
                    <input required placeholder="Name" className="input-field" type="text" />
                  </div>

                  <div className="form-field">
                    <input required placeholder="Email" className="input-field" type="email" />
                  </div>

                  <div className="form-field">
                    <input required placeholder="Subject" className="input-field" type="text" />
                  </div>

                  <div className="form-field">
                    <textarea required placeholder="Message" cols="30" rows="3" className="input-field"></textarea>
                  </div>

                  <button className="sendMessage-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.682706926853!2d74.07529320407136!3d32.60164612208114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f052823b7abb9%3A0x667167070447ac43!2sZamindar%20College%20and%20University%20of%20Sargodha%20Campus!5e0!3m2!1sen!2s!4v1724968140881!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: '0' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

      </div> <br />
    </>
  );
};

export default Contact;
