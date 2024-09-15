import { motion } from "framer-motion";
import tools from "../../assets/Hero-Images/tools.png";

const FavouriteTools = () => {
  return (
    <motion.div
      className="pt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex gap-52">
        {/* Text Section */}
        <motion.div
          className="w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[42px] leading-subHeading text-primary font-bold tracking-subHeading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Integrate with <br className="hidden lg:block" /> 100+ favourite
            tools.
          </motion.h2>
          <motion.p
            className="leading-primary text-secondary xl:pr-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Managing your daily activities has never been easier with these
            powerful features designed to simplify.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={tools}
            className="object-cover"
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FavouriteTools;
