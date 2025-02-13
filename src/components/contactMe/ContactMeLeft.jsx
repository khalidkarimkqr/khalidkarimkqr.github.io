import React from "react";
import ContactForm from "./ContactForm";
// import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
        <p className="text-white">
          Feel free to reach out if you’d like to collaborate
          <br />
          you are just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
