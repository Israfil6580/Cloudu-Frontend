import { motion } from "framer-motion";
import salesByRegion from "../../assets/Hero-Images/salesByRegion.png";
import correctIcon from "../../assets/Hero-Images/CorrectIcon.svg";
import DefaultButton from "../../components/button/DefaultButton";

const SalesByRegion = () => {
  const list = [
    "Invoicing and Billing",
    "Expense Tracking",
    "Budgeting and Forecasting",
    "Cash Flow Management",
  ];

  return (
    <div className="pt-32">
      <div className="flex items-center gap-32">
        {/* Image Animation */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={salesByRegion} alt="Sales by Region" />
        </motion.div>

        {/* Text and List Animation */}
        <motion.div
          className="w-1/2 flex flex-col gap-4 items-start"
          initial={{ opacity: 0, x: 100 }}
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
            Monthly sales performance across various regions.
          </motion.h2>

          {/* Paragraph Animation */}
          <motion.p
            className="leading-primary text-secondary"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Effective marketing strategies are essential for the growth of any
            business. A well-developed marketing plan, encompassing market.
          </motion.p>

          {/* List Animation */}
          <ul className="pt-6 pb-4">
            {list.map((item, index) => (
              <motion.li
                key={index}
                className="flex gap-3 font-medium text-secondary items-center py-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <img src={correctIcon} className="h-5 w-5" alt="Correct Icon" />
                {item}
              </motion.li>
            ))}
          </ul>

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
      </div>
    </div>
  );
};

export default SalesByRegion;
