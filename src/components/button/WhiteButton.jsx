import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhiteButton = ({ pathName, text }) => {
  return (
    <Link to={pathName}>
      <motion.button
        className="relative rounded-default font-medium leading-primary px-[24px] py-[14px] text-primary shadow-sm inline-block bg-white overflow-hidden"
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
WhiteButton.propTypes = {
  text: PropTypes.string,
  pathName: PropTypes.string,
};

export default WhiteButton;
