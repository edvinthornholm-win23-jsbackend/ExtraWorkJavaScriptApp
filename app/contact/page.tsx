import { useState } from 'react';

export default function Contact() {
//   const [contactForm, setContactForm] = useState({
//     fullName: '',
//     email: '',
//     selectedService: 'default',
//     message: ''
//   });

//   const [statusMessage, setStatusMessage] = useState('');
//   const [alertClass, setAlertClass] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setContactForm(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(contactForm)
//       });

//       if (response.ok) {
//         setStatusMessage('Contact added successfully!');
//         setAlertClass('alert-success');
//       } else if (response.status === 401) {
//         setStatusMessage(`(Status Code: ${response.status}). Please contact the administrator.`);
//         setAlertClass('alert-danger');
//       } else {
//         setStatusMessage(`Error: (Status Code: ${response.status}). Try again later.`);
//         setAlertClass('alert-danger');
//       }
//     } catch (error) {
//       setStatusMessage('Server problem. Please try again later.');
//       setAlertClass('alert-danger');
//     }
//   };

  return (
    <section className="contact">
      <div className="container">
        <div className="home-contact">
          <a className="home-and-contact">
            <i className="fa-light fa-house"></i>
            <p className="home">Home</p>
          </a>
          <i className="fa-light fa-angles-right"></i>
          <p className="contact">Contact</p>
        </div>

        <div className="contact-info">
          <h1>Contact Us</h1>

          <div className="email-us">
            <div className="email-icone">
              <div className="round">
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
            <div className="email-text">
              <h4>Email Us</h4>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#">Leave a message <i className="fa-regular fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="careers">
            <div className="careers-icone">
              <div className="round">
                <i className="far fa-comments"></i>
              </div>
            </div>
            <div className="careers-text">
              <h4>Chat</h4>
              <p>You can reach our administrative team. We are available every day between 8 am to 5 pm.</p>
              <a href="/chat">Start live chat <i className="fa-regular fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="get-in-contact">
            <h2>Get In Contact With Us</h2>

            {/* {statusMessage && (
              <span className={`alert ${alertClass}`}>
                {statusMessage}
              </span>
            )} */}

            <div className="contact-form">
              <form 
              noValidate>
                <div className="form-group">
                  <div id="contact-fullname" className="input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                    //   value={contactForm.fullName}
                    //   onChange={handleInputChange}
                      required
                    //   minLength="2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div id="contact-email" className="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                    //   value={contactForm.email}
                    //   onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="label">
                    <label htmlFor="service">Service (optional)</label>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>

                  <select
                    className="form-control"
                    id="service"
                    name="selectedService"
                    // value={contactForm.selectedService}
                    // onChange={handleInputChange}
                  >
                    <option value="default">Choose the service you are interested in</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="design">Design</option>
                    <option value="other">Other</option>
                  </select>

                  <div id="contact-message" className="input-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                    //   value={contactForm.message}
                    //   onChange={handleInputChange}
                      required
                    //   minLength="2"
                      className="form-control"
                    //   rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-theme">Send Contact Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.647577291772!2d-122.40395378427882!3d37.73271222976797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e035433c3cf%3A0x14687cb1c0e11947!2sSilver%20Terrace%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sua!4v1695733588761!5m2!1sen!2sua"
          width="100%"
          height="870"
          style={{ border: 0 }}
        //   allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </section>
  );
}
