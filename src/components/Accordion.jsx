import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-start">{title}</span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </svg>
      </button>

      {/* Accordion Answer with Animation */}
      <motion.div
        className="overflow-hidden text-slate-600 text-sm"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: accordionOpen ? "auto" : 0,
          opacity: accordionOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="py-2">{answer}</div>
      </motion.div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};

export default Accordion;
