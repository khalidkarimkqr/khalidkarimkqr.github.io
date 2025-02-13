import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/khalidkarim24/"
        Icon={FaLinkedinIn}
        title="Connect with me on LinkedIn"
      />
      <SingleContactSocial
        link="https://github.com/khalidkarimkqr"
        Icon={FiGithub}
        title="View my GitHub profile"
      />
      <SingleContactSocial
        link="https://www.instagram.com/khalid_kqr/"
        Icon={FaInstagram}
        title="Follow me on Instagram"
      />
    </div>
  );
};

export default ContactSocial;
