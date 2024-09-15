import { motion } from "framer-motion";
import Logo1 from "../../assets/Icon/logo-1.svg";
import Logo2 from "../../assets/Icon/logo-2.svg";
import Logo3 from "../../assets/Icon/logo-3.svg";
import Logo4 from "../../assets/Icon/logo-4.svg";
import Logo5 from "../../assets/Icon/logo-5.svg";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const Founders = () => {
  return (
    <div className=" max-w-custom mx-auto">
      {/* Heading with animation */}
      <div className="text-center">
        <motion.span
          className="text-center text-secondary leading-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Trusted by 10,000+ founders & business owners.
        </motion.span>
      </div>

      {/* Logos grid with animation */}
      <div className="grid grid-cols-5 grid-rows-2 gap-10 px-32 pt-12">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={logo} className="h-7 w-auto" alt={`Logo ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
