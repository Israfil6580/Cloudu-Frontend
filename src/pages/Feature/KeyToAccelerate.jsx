import { motion } from "framer-motion";
import audienceActivity from "../../assets/Features/audienceActivity.png";
import salesReport from "../../assets/Features/salesReport.png";

const KeyToAccelerate = () => {
  return (
    <div>
      <motion.h1
        className="text-[42px] leading-subHeading text-primary font-bold tracking-subHeading text-center my-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Viewport settings without amount
        transition={{ duration: 0.8 }}
      >
        Key to accelerating your business growth.
      </motion.h1>

      <div className="flex gap-10">
        <motion.div
          className="w-1/2 flex flex-col gap-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // Viewport settings without amount
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={audienceActivity}
            alt="Audience Activity"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} // Viewport settings without amount
            transition={{ duration: 0.6 }}
          />
          <div>
            <motion.p
              className="text-[24px] leading-[38.4px] font-medium text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Viewport settings without amount
              transition={{ duration: 0.6 }}
            >
              Advanced data analytics.
            </motion.p>
            <motion.p
              className="leading-primary text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Viewport settings without amount
              transition={{ duration: 0.6 }}
            >
              Advanced data analytics is a cornerstone of strategic
              decision-making and unlocking valuable business insights.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="w-1/2 flex flex-col gap-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // Viewport settings without amount
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={salesReport}
            alt="Sales Report"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} // Viewport settings without amount
            transition={{ duration: 0.6 }}
          />
          <div>
            <motion.p
              className="text-[24px] leading-[38.4px] font-medium text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Viewport settings without amount
              transition={{ duration: 0.6 }}
            >
              Sales reporting.
            </motion.p>
            <motion.p
              className="leading-primary text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Viewport settings without amount
              transition={{ duration: 0.6 }}
            >
              Sales reporting is essential for tracking business performance and
              making data-driven decisions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyToAccelerate;
