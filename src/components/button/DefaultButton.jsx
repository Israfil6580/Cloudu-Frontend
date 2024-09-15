import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const DefaultButton = ({ text, to }) => {
  return (
    <Link to={to}>
      <motion.button
        className="relative rounded-default font-medium leading-primary px-[24px] py-[14px] border-[1.5px] border-[#4F4B481F] text-primary shadow-sm inline-block bg-transparent overflow-hidden"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <span>{text}</span>
      </motion.button>
    </Link>
  );
};

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default DefaultButton;
