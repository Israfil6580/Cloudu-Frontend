import { motion } from "framer-motion";
import marketAutomation from "../assets/Hero-Images/marketingAutomation.png";
import advanceReporting from "../assets/Hero-Images/AdvanceReporting.png";
import performanceAnalysis from "../assets/Hero-Images/performanceAnalysis.png";

const NeededTools = () => {
  return (
    <motion.div
      className="mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-[42px] leading-subHeading text-primary font-bold tracking-subHeading text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        The tool you really need for growing fast
      </motion.h1>

      <div className="w-full flex gap-5 pt-14">
        {/* First Tool */}
        <motion.div
          className="w-1/3 flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={marketAutomation}
            alt="Marketing Automation"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xl leading-[34px] font-medium text-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Marketing Automation
            </motion.p>
            <motion.p
              className="text-secondary leading-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              The system allows for precise campaign starting enabling marketers
              to plan.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Second Tool */}
        <motion.div
          className="w-1/3 flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={advanceReporting}
            alt="Advanced Reporting"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xl leading-[34px] font-medium text-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Advanced Reporting
            </motion.p>
            <motion.p
              className="text-secondary leading-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              The system allows for precise campaign starting enabling marketers
              to plan.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Third Tool */}
        <motion.div
          className="w-1/3 flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={performanceAnalysis}
            alt="Performance Analysis"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xl leading-[34px] font-medium text-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Performance Analysis
            </motion.p>
            <motion.p
              className="text-secondary leading-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              The system allows for precise campaign starting enabling marketers
              to plan.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NeededTools;
