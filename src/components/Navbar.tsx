import { NavLink, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../assets/Ghar_Naksha-t.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/";
    navigate(path);
  };

  return (
    <nav className="flex justify-between items-center gap-4 w-full fixed left-0 top-0 px-6 sm:px-[6vw] md:px-[8vw] lg:px-[10vw] bg-white/50 backdrop-blur-lg z-[990] min-w-[360px]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-28 pt-4 cursor-pointer"
        onClick={routeChange}
      >
        <img
          src={Logo}
          alt="logo"
          loading="lazy"
          className="pb-2"
          width={"128px"}
          height={"128px"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
        className="md:flex hidden gap-8 justify-between items-center"
      >
        <NavLink className="transition-all duration-300 hover:scale-110" to="/">
          Home
        </NavLink>
        <NavLink
          className="transition-all duration-300 hover:scale-110"
          to="/work"
        >
          Work
        </NavLink>
        <NavLink
          className="transition-all duration-300 hover:scale-110"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="transition-all duration-300 hover:scale-110"
          to="/about"
        >
          About
        </NavLink>
        <a
          aria-label="Phone"
          className="text-sm font-semibold flex justify-center items-center px-4 py-2 border-dark border-2 cursor-pointer hover:bg-dark hover:text-white rounded-md"
          href="tel:+918734958539"
          target="blank"
        >
          Call Us
        </a>
      </motion.div>
      <div
        className="md:hidden flex gap-4 justify-center items-center cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <a
          aria-label="Phone"
          className="text-xs font-semibold flex justify-center items-center px-4 py-2 border-dark border-2 cursor-pointer hover:bg-dark hover:text-white rounded-md"
          href="tel:+918734958539"
          target="blank"
        >
          Call Us
        </a>
        <HiOutlineMenu stroke="#111" size={"2rem"} />
      </div>

      {/* sidebar */}

      <div
        className={`fixed md:hidden bottom-0 right-0 top-0 bg-white drop-shadow-lg z-[999] ${
          visible
            ? "w-2/3 h-screen fixed transition-all duration-200"
            : "w-0 hidden h-0"
        }`}
      >
        <div
          className="fixed right-[10%] top-[5%] transition-all duration-200 cursor-pointer hover:scale-110"
          onClick={() => setVisible(false)}
        >
          <IoIosCloseCircleOutline size={"3rem"} />
        </div>
        <div className="flex flex-col w-fit gap-8 mt-32 mx-auto">
          <NavLink
            to={"/"}
            onClick={() => setVisible(false)}
            className="w-fit text-2xl transition-colors duration-200 cursor-pointer hover:scale-110"
          >
            Home
          </NavLink>
          <NavLink
            to={"/work"}
            onClick={() => setVisible(false)}
            className="w-fit text-2xl transition-colors duration-200 cursor-pointer hover:scale-110"
          >
            Work
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setVisible(false)}
            className="w-fit text-2xl transition-colors duration-200 cursor-pointer hover:scale-110"
          >
            Contact
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setVisible(false)}
            className="w-fit text-2xl transition-colors duration-200 cursor-pointer hover:scale-110"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
