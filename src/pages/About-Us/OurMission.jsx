import { motion } from "framer-motion";
import about1 from "../../assets/About-Us/about1.png";
import about2 from "../../assets/About-Us/about2.png";
import about3 from "../../assets/About-Us/about3.png";

const OurMission = () => {
  return (
    <div className="mt-4 max-w-custom mx-auto">
      <motion.div
        className="flex flex-col justify-center items-center text-center gap-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-xxl leading-xxl font-semibold text-primary tracking-heading"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We’re on a mission
        </motion.h1>
        <motion.p
          className="text-lg text-secondary leading-[30.6px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our mission is to provide a comprehensive, user-friendly platform that{" "}
          <br className="hidden lg:block" />
          integrates all essential business functions into a single.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-12 grid-rows-3 gap-4 pt-[74px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="col-span-7 row-span-3 rounded-default"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img className="object-cover rounded-default" src={about1} alt="" />
        </motion.div>
        <motion.div
          className="col-span-5 col-start-8 rounded-default"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img className="object-cover rounded-default" src={about2} alt="" />
        </motion.div>
        <motion.div
          className="col-span-5 row-span-2 col-start-8 row-start-2"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img className="object-cover rounded-default" src={about3} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurMission;
