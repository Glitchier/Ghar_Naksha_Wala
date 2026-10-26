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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    setLoading(true);
    try {
      if (!accessKey) throw new Error("Missing access key");
      const formData = new FormData(form);
      formData.append("access_key", accessKey);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      Swal.fire({
        title: "Success",
        text: "Message sent successfully.",
        icon: "success",
        confirmButtonColor: "#0D9488",
      });
      form.reset();
    } catch {
      Swal.fire({
        title: "Failed",
        text: "Message not sent! Please try again later or call us.",
        icon: "error",
        confirmButtonColor: "#0D9488",
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
        <div className="h-1 w-10 bg-primary rounded-full"></div>
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
                className="bg-primary p-3 rounded-full"
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
                    123 Sample Street
                  </p>
                  <p className="capitalize text-sm sm:text-md">
                    Sample City, Sample State - 000000
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
                className="bg-primary p-3 rounded-full"
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
                  href="mailto:hello@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm sm:text-md"
                >
                  hello@example.com
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
                className="bg-primary p-3 rounded-full"
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
                      href="tel:+919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-sm sm:text-md">
                    WhatsApp:{" "}
                    <a
                      aria-label="WhatsApp"
                      className="hover:underline text-sm sm:text-md"
                      href="https://wa.me/919876543212"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 98765 43212
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
                href="https://www.facebook.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaFacebookSquare size={"3rem"} fill="#1877F2" />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/919876543211"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaSquareWhatsapp size={"3rem"} fill="#25D366" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
              >
                <FaInstagramSquare size={"3rem"} fill="#E1306C" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
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

            className="w-full mt-6"
          >
            <div className="flex flex-col justify-center items-start gap-4">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
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
                  maxLength={100}
                  autoComplete="name"
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
                  maxLength={150}
                  autoComplete="email"
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
                  maxLength={2000}
                  className="border rounded px-4 py-2 w-full min-h-[200px]"
                  placeholder="Enter your message..."
                  required
                />
              </motion.div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-8 px-6 py-2 border-primary border-2 hover:bg-primary-dark hover:border-primary-dark rounded bg-primary text-white font-semibold text-md tracking-widest uppercase disabled:opacity-60 disabled:cursor-wait"
            >
              {loading ? "Sending..." : "Send"}
            </button>
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
          title="Ghar Naksha Wala office location"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=New+Delhi&output=embed"
          height="450"
          className="aspect-[16/9] w-full border rounded-xl"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
