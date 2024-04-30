import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import contact from '../../assets/images/contact/contactImg.png'
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mounesh</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide"></p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8610016443</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mouneshofficial11@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href=" https://github.com/mouneshrebel" target="_blank">
              <BsGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href=" mailto:mouneshofficial11@gmail.com" target="_blank">
              <HiOutlineMail />
            </a>
          </span>
          <span className="bannerIcon">
            <a href=" https://www.linkedin.com/in/mouneshrebel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank">
              {" "}
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
