import { NavLink, useNavigate } from "react-router-dom";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/Ghar_Naksha.png";

const Footer = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/";
    navigate(path);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
      className="border-t py-8 w-full min-w-[360px] min-h-[240px]"
    >
      <div className="grid grid-cols-12 gap-8">
        <div
          className="lg:col-span-4 sm:col-span-6 col-span-full mx-auto cursor-pointer"
          onClick={routeChange}
        >
          <img
            loading="lazy"
            src={Logo}
            alt="logo"
            height={"148px"}
            width={"148px"}
          />
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-full flex flex-col justify-start items-start">
          <div className="flex flex-col justify-center items-center sm:items-start gap-4">
            <h1 className="text-2xl capitalize">Let's Work Together</h1>
            <p className="text-xs sm:text-start text-center sm:w-full w-2/3">
              Let us know what you're looking for. We'll take a look and see if
              this could be the start of something beautiful.
            </p>
            <a
              aria-label="G-Mail"
              href="mailto:gharnakshawala@gmail.com"
              target="blank"
              className="uppercase px-3 py-2 border-2 transition-all duration-200 border-dark bg-white rounded text-sm hover:bg-dark hover:text-white"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-full flex flex-col justify-center items-center lg:justify-start lg:items-end gap-8 lg:mt-0 mt-4">
          <div className="flex w-full justify-center items-center lg:justify-end lg:items-end gap-4">
            <NavLink
              to={"/"}
              className="text-sm transition-all duration-200 cursor-pointer hover:scale-110"
            >
              Home
            </NavLink>
            <NavLink
              to={"/work"}
              className="text-sm transition-all duration-200 cursor-pointer hover:scale-110"
            >
              Work
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-sm transition-all duration-200 cursor-pointer hover:scale-110"
            >
              Contact
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-sm transition-all duration-200 cursor-pointer hover:scale-110"
            >
              About
            </NavLink>
          </div>
          <div className="rounded-full flex justify-center items-center gap-4">
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/share/4DdzrVhSuNkyWcXN/?mibextid=qi2Omg"
              target="blank"
              className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
            >
              <FaFacebookSquare size={"1.6rem"} fill="#1877F2" />
            </a>

            <a
              aria-label="WhatsApp"
              href="https://wa.me/+919798419132"
              target="blank"
              className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
            >
              <FaSquareWhatsapp size={"1.6rem"} fill="#25D366" />
            </a>

            <a
              aria-label="Instagram"
              href="#"
              target="blank"
              className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
            >
              <FaInstagramSquare size={"1.6rem"} fill="#E1306C" />
            </a>

            <a
              aria-label="LinkedIn"
              href="#"
              target="blank"
              className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
            >
              <FaLinkedin size={"1.6rem"} fill="#0077B5" />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-sm text-zinc-500">
          &copy;Copyright 2020. All rights reserved.
        </h1>
        <div className="flex justify-center items-center gap-4">
          <a
            aria-label="G-Mail"
            href="mailto:gharnakshawala@gmail.com"
            target="blank"
            className="text-sm cursor-pointer hover:underline text-zinc-500"
          >
            Email
          </a>
          <a
            aria-label="JustDial"
            href="https://jsdl.in/DT-515R1DGL4VK"
            target="blank"
            className="text-sm cursor-pointer hover:underline text-zinc-500"
          >
            JustDial
          </a>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/+917008344192"
            target="blank"
            className="text-sm cursor-pointer hover:underline text-zinc-500"
          >
            WhatsApp
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/share/4DdzrVhSuNkyWcXN/?mibextid=qi2Omg"
            target="blank"
            className="text-sm cursor-pointer hover:underline text-zinc-500"
          >
            Facebook
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
