import { motion } from "framer-motion";
import WhiteButton from "./button/WhiteButton";
import flowerShape from "../assets/Hero-Images/flowerShape.png";
import backgroundPattern from "../assets/Hero-Images/Backgroundpattern.png";
const GetStartedToday = () => {
  return (
    <motion.div
      className="relative bg-custom-gradient mt-32 rounded-default overflow-hidden  max-w-custom mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img className="absolute top-0" src={backgroundPattern} alt="" />
      <div className="flex">
        <motion.div
          className="w-1/2 pl-20 pt-20 flex flex-col gap-6 items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="font-semibold text-[56px] text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get started today and unlock the power of our solutions.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <WhiteButton text={"Get 14 Days Free Trial"} />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/2 flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            className="h-auto w-full"
            src={flowerShape}
            alt="Flower Shape"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GetStartedToday;
