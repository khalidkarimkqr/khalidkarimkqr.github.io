import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="khalid13878@hotmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+12363398382" Image={FiPhone} />
      <SingleInfo text="Burnaby, BC" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
