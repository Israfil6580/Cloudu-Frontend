import { motion } from "framer-motion";
import DefaultButton from "../../components/button/DefaultButton";
import activeCustomer from "../../assets/Hero-Images/activeCustomer.png";

const UnderstandCustomer = () => {
  return (
    <div className="pt-32">
      <div className="flex items-center gap-32">
        {/* Animated Text Section */}
        <motion.div
          className="w-1/2 flex flex-col gap-4 items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading Animation */}
          <motion.h2
            className="text-[42px] leading-subHeading text-primary font-bold tracking-subHeading"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Understand your customers & plan marketing accordingly.
          </motion.h2>

          {/* Paragraph Animation */}
          <motion.p
            className="leading-primary text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Effective human resources management (HRM) is essential for
            fostering a productive and harmonious work environment, driving
            employee engagement and performance.
          </motion.p>

          {/* Animated Expense Tracking and Billing Section */}
          <motion.div
            className="flex gap-12 pt-[58px] pb-[28px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-3/7 flex flex-col gap-[10px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Expense Tracking Heading Animation */}
              <motion.h4
                className="text-lg font-semibold leading-[30.6px]"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Expense Tracking
              </motion.h4>
              {/* Expense Tracking Paragraph Animation */}
              <motion.p
                className="text-primary leading-primary pr-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Growth in online sales every day
              </motion.p>
            </motion.div>

            <motion.div
              className="w-3/7 flex flex-col gap-[10px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Invoicing and Billing Heading Animation */}
              <motion.h4
                className="text-lg font-semibold leading-[30.6px]"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Invoicing and Billing
              </motion.h4>
              {/* Invoicing and Billing Paragraph Animation */}
              <motion.p
                className="text-primary leading-primary pr-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Reduced cost to reach new leads
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <DefaultButton text={"Get Started"} />
          </motion.div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          className="w-1/2 flex justify-end py-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={activeCustomer} alt="Active Customer" />
        </motion.div>
      </div>
    </div>
  );
};

export default UnderstandCustomer;
