import { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic here
      console.log("Form data submitted:", formData);
      // Clear form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="mt-20 mb-10">
      <div className="w-full flex gap-40">
        <motion.div
          className="w-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h1 className="font-semibold text-[62px] leading-heading tracking-heading">
              Get in touch
            </h1>
            <p className="text-secondary">
              Reach out to us for inquiries, support, or partnership
              opportunities. We’re here to assist you!
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-primary">
              Contact information
            </h2>
            <p className="text-secondary font-medium">
              <span className="font-bold text-primary">Email:</span>{" "}
              support@cloudo.com
            </p>
            <p className="text-secondary font-medium">
              <span className="font-bold text-primary">Phone:</span> (123)
              123-1546
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full mx-auto p-6 bg-[#F8F8F8] border rounded-default"
          >
            <motion.div
              className="w-full flex gap-5 mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-1/2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="firstName"
                  className="block font-medium text-secondary pb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 border rounded-lg outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </motion.div>
              <motion.div
                className="w-1/2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="lastName"
                  className="block font-medium text-secondary pb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 border rounded-lg outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="email"
                className="block font-medium text-secondary pb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-4 border rounded-lg outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="subject"
                className="block font-medium text-secondary pb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Add a subject line"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full p-4 border rounded-lg outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="block font-medium text-secondary pb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Write your message here"
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full p-4 border rounded-lg outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                className="relative rounded-default font-medium leading-primary px-[24px] py-[14px] text-white shadow-sm inline-block bg-orange overflow-hidden"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Form;
