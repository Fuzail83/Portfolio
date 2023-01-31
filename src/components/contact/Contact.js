import React from "react";

const Contact = () => {
  const socialMedia = [
    {
      title: "LINKEDIN",
      para: "Connect with me",
    },
    {
      title: "TWITTER",
      para: "Check out project announcements",
    },
    {
      title: "INSTAGRAM",
      para: "Join my subreddits",
    },
  ];
  function sendEmail(e) {
    e.preventDefault();
  }

  return (
    <div id="contact">
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message, let’s connect, will reach out as soon as possible.
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
              />
            </div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <div className="grid3">
            {socialMedia?.map((social) => (
              <a href="https://www.linkedin.com/in/maverickcer/">
                <h3>{social.title}</h3>
                <p>{social.para}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
