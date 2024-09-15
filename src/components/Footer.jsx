import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo.svg";

const Footer = () => {
  const Products = [
    { name: "Pricing & Plans", path: "pricing-plans" },
    { name: "Integration", path: "integration" },
    { name: "Integration Details", path: "integration-details" },
    { name: "Product Features", path: "product-features" },
  ];

  const Support = [
    { name: "Blog", path: "blog" },
    { name: "Blog Details", path: "blog-details" },
    { name: "Event", path: "event" },
  ];

  const company = [
    { name: "About Us", path: "about-us" },
    { name: "Changelog", path: "changelog" },
    { name: "Customer Reviews", path: "customer-reviews" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <footer className="mt-32 max-w-custom mx-auto">
      <motion.div
        className="flex justify-between gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} // Ensures animation triggers only once
      >
        <motion.div
          className="w-2/5 flex flex-col gap-4 items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          <img src={logo} alt="Logo" />
          <p className="text-sm text-secondary">
            Streamline operations, boost productivity, and drive{" "}
            <br className="hidden lg:block" /> innovation with our all-in-one
            platform.
          </p>
        </motion.div>
        <motion.div
          className="w-1/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          <p className="font-medium leading-primary pb-8">Product</p>
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }} // Ensures animation triggers only once
          >
            {Products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }} // Ensures animation triggers only once
              >
                <Link
                  className="leading-primary text-secondary"
                  to={`/${product.path}`}
                >
                  {product.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          <p className="font-medium leading-primary pb-8">Support</p>
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }} // Ensures animation triggers only once
          >
            {Support.map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }} // Ensures animation triggers only once
              >
                <Link
                  className="leading-primary text-secondary"
                  to={`/${support.path}`}
                >
                  {support.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          <p className="font-medium leading-primary pb-8">Company</p>
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }} // Ensures animation triggers only once
          >
            {company.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }} // Ensures animation triggers only once
              >
                <Link
                  className="leading-primary text-secondary"
                  to={`/${comp.path}`}
                >
                  {comp.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.hr
        className="mt-12 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }} // Ensures animation triggers only once
      />
      <motion.div
        className="flex justify-between pb-20"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} // Ensures animation triggers only once
      >
        <p className="text-sm text-secondary leading-[23.8px]">
          © Copyright 2024. All Rights Reserved by FramerBite
        </p>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          <div className="flex gap-10">
            <Link
              className="text-sm text-secondary leading-[23.8px]"
              to="/license"
            >
              License
            </Link>
            <Link
              className="text-sm text-secondary leading-[23.8px]"
              to="/terms-conditions"
            >
              Terms & Conditions
            </Link>
            <Link
              className="text-sm text-secondary leading-[23.8px]"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
