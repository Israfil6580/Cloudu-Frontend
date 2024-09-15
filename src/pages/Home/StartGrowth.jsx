import { motion } from "framer-motion";
import OrangeButton from "../../components/button/OrangeButton";
import pattern from "../../assets/Hero-Images/Background pattern.png";

const StartGrowth = () => {
  return (
    <motion.div
      className="mt-32 relative bg-primary text-white rounded-default" // Ensure this parent is relative
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img className="absolute top-0 opacity-60 z-0" src={pattern} alt="" />{" "}
      <div className="relative flex gap-8 p-8 z-10">
        {" "}
        {/* Stats Section */}
        <motion.div
          className="w-3/5 flex items-center pl-6 gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-6xl font-semibold tracking-[3px] leading-[72.8px]">
              20%
            </motion.h3>
            <motion.p
              className="text-[#f8f8f8b8] leading-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Growth in online sales every day
            </motion.p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-6xl font-semibold tracking-[3px] leading-[72.8px]">
              $8.5k
            </motion.h3>
            <motion.p
              className="text-[#f8f8f8b8] leading-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Reduced cost to reach new leads
            </motion.p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-6xl font-semibold tracking-[3px] leading-[72.8px]">
              4X
            </motion.h3>
            <motion.p
              className="text-[#f8f8f8b8] leading-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Faster time to launch
            </motion.p>
          </motion.div>
        </motion.div>
        {/* Call to Action Section */}
        <motion.div
          className="relative bg-[#FFFFFF1A] py-20 px-10 flex flex-col gap-3 rounded-xl w-2/5 z-10" // Added z-index
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-2xl font-medium tracking-[0.5px] leading-[38.4px] text-[#F8F8F8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start Making Growth
          </motion.p>
          <motion.p
            className="text-[#F8F8F8] leading-primary text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Managing your daily activities has never been easier with these
            powerful tools.
          </motion.p>
          <motion.div
            className="pt-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <OrangeButton text={"Book A Demo"} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StartGrowth;
