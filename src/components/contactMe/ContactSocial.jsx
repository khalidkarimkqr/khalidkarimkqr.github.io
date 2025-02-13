import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/khalidkarim24/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/khalidkarimkqr"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/khalid_kqr/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
