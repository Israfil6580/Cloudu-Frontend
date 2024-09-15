import { motion } from "framer-motion";
import DefaultButton from "../../components/button/DefaultButton";
import OrangeButton from "../../components/button/OrangeButton";
import dashboard from "../../assets/Features/dashboard.png";

const LookBeyhondLimits = () => {
  return (
    <div className="bg-gradient-features pt-20">
      <div className="max-w-custom mx-auto">
        <motion.div
          className="flex items-center flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="font-semibold text-7xl leading-heading tracking-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Look beyond limits
          </motion.h1>
          <motion.p
            className="text-lg text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            You can easily collaborate with team members, access your projects
            from any
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <OrangeButton text={"Get 14 Days Free Trial"} />
            <DefaultButton text={"Book A Free Demo"} />
          </motion.div>
        </motion.div>
        <motion.div
          className="pt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={dashboard}
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LookBeyhondLimits;
