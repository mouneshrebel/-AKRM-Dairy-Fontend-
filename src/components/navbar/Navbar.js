import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { mounilogo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img
          width="70px"
          style={{ borderRadius: "5%" }}
          src={mounilogo}
          alt="logo"
        />
      </div>

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img
                  className="w-20"
                  style={{ borderRadius: "5%" }}
                  src={mounilogo}
                  alt="logo"
                />
                <p className="text-sm text-gray-400 mt-2"></p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      // className={activeClass === "active" ? "text-designColor" : "text-white"}
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <a
                      href=" https://github.com/mouneshrebel"
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a href=" mailto:mouneshofficial11@gmail.com" target="_blank">
                      <HiOutlineMail />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a
                      href=" https://www.linkedin.com/in/mouneshrebel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </span>
                </div>
                <div className="w-full bannerIcon flex flex-row">
                  <a
                    href=" https://drive.google.com/file/d/14CS0R6lErhIDAQfbVOC7aL1_aeIHZT3B/view?usp=sharing"
                    target="_blank"
                    className="hover:text-designColor flex flex-reverse gap-4 "
                  >
                    <span>RESUME</span>
                    <FaDownload />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
