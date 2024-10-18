import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: React.FormEventHandler<HTMLFormElement> | any
  ) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const obj = Object.fromEntries(formData);
    const json = JSON.stringify(obj);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    try {
      if (res.success) {
        Swal.fire({
          title: "Success",
          text: "Message send successfully.",
          icon: "success",
        });
        event.target.reset();
      }
    } catch {
      Swal.fire({
        title: "Failed",
        text: "Message not sent! Try again later.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col justify-start items-center my-10 gap-14">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-4 w-full"
      >
        <div className="h-1 w-10 bg-dark rounded-full"></div>
        <h1 className="text-5xl font-Kaushan">Get in touch</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="rounded-lg drop-shadow-sm border border-zinc-200 w-full min-w-[360px] flex flex-col xmd:flex-row justify-start md:justify-center items-start gap-16 p-6 sm:p-14 backdrop-blur-md bg-white/80"
      >
        <div className="flex flex-col justify-center items-start gap-4 xmd:w-1/2 w-full">
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex justify-start items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="bg-dark p-3 rounded-full"
              >
                <FaLocationDot size={"2.1rem"} fill="#fff" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-start gap-2"
              >
                <div className="text-lg sm:text-xl font-semibold">
                  Head Office
                </div>
                <div>
                  <p className="capitalize text-sm sm:text-md">
                    Near Jharkhand new High Court
                  </p>
                  <p className="capitalize text-sm sm:text-md">
                    Dhurwa, Ranchi, Jharkhand - 834004
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-start items-center gap-8 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="bg-dark p-3 rounded-full"
              >
                <IoMail size={"2.1rem"} fill="#fff" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-start gap-2"
              >
                <div className="text-lg sm:text-xl font-semibold">Email Us</div>
                <a
                  aria-label="G-Mail"
                  href="mailto:gharnakshawala@gmail.com"
                  target="blank"
                  className="hover:underline text-sm sm:text-md"
                >
                  gharnakshawala@gmail.com
                </a>
              </motion.div>
            </div>
            <div className="flex justify-start items-center gap-8 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="bg-dark p-3 rounded-full"
              >
                <IoCall size={"2.1rem"} fill="#fff" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-start gap-2"
              >
                <div className="text-lg sm:text-xl font-semibold">Call Us</div>
                <div>
                  <p className="text-sm sm:text-md">
                    Phone:{" "}
                    <a
                      aria-label="Phone"
                      className="hover:underline text-sm sm:text-md"
                      href="tel:+918734958539"
                      target="blank"
                    >
                      +91 8734958539
                    </a>
                  </p>
                  <p className="text-sm sm:text-md">
                    WhatsApp:{" "}
                    <a
                      aria-label="WhatsApp"
                      className="hover:underline text-sm sm:text-md"
                      href="https://wa.me/+917008344192"
                      target="blank"
                    >
                      +91 7008344192
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <hr className="w-full my-6" />
          <div className="flex flex-col justify-start items-start gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Follow our social media
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-4"
            >
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/share/4DdzrVhSuNkyWcXN/?mibextid=qi2Omg"
                target="blank"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaFacebookSquare size={"3rem"} fill="#1877F2" />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/+919798419132"
                target="blank"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaSquareWhatsapp size={"3rem"} fill="#25D366" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                target="blank"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaInstagramSquare size={"3rem"} fill="#E1306C" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                target="blank"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaLinkedin size={"3rem"} fill="#0077B5" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 xmd:w-1/2 w-full overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            viewport={{ once: true }}
            className="text-3xl overflow-hidden"
          >
            Send us a message
          </motion.h1>
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            viewport={{ once: true }}
            method="POST"
            className="w-full mt-6"
          >
            <div className="flex flex-col justify-center items-start gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="border rounded px-4 py-2 w-full"
                  placeholder="Name"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="border rounded px-4 py-2 w-full"
                  placeholder="Email"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <label>Message</label>
                <textarea
                  name="message"
                  className="border rounded px-4 py-2 w-full min-h-[200px]"
                  placeholder="Enter your message..."
                  required
                />
              </motion.div>
            </div>
            {loading ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="text-zinc-400 text-sm mt-8"
              >
                Please wait...
              </motion.p>
            ) : (
              <button
                type="submit"
                className="mt-8 px-6 py-2 border-dark border-2 hover:bg-[#fff] hover:text-dark rounded bg-dark text-white font-semibold text-md tracking-widest uppercase"
              >
                Send
              </button>
            )}
          </motion.form>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-4 w-full"
      >
        <h1 className="text-2xl">Find us on Google Maps</h1>
      </motion.div>
      <div className="w-full flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5181.608742831711!2d85.27069564879642!3d23.31754818624482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjharkhand%20new%20high%20court%20Dhurwa!5e0!3m2!1sen!2sin!4v1727968084965!5m2!1sen!2sin"
          height="450"
          className="aspect-[16/9] w-full border rounded-xl"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
