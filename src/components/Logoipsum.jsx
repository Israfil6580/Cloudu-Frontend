import { motion } from "framer-motion";
import jenny from "../assets/Hero-Images/Jenny.png";
import logoipsum from "../assets/Hero-Images/Logoipsum.png";

const Logoipsum = () => {
  return (
    <motion.div
      className="mt-32  max-w-custom mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-[#F8F8F8] rounded-default p-20 flex gap-20">
        {/* Left Section - Image and Text */}
        <motion.div
          className="w-1/3 flex flex-col gap-5 items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={jenny}
            alt="Jenny Willson"
            className="object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-primary leading-[30.6px]">
              Jenny Willson
            </h4>
            <motion.p className="text-secondary">
              Co-Founder at Logoipsum
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Section - Logo and Quote */}
        <motion.div
          className="w-2/3 flex flex-col gap-8 items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logoipsum}
            alt="Logo of Logoipsum"
            className="object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-[28px] font-medium leading-[38.4px] tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            “Insights from regional sales data inform strategic decisions such
            as market expansion, product launches, and form the promotional
            campaigns.”
            <hr className="mt-10" />
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="flex gap-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-[42px] font-semibold leading-subHeading tracking-subHeading">
                3.65x
              </h3>
              <p className="text-primary leading-primary font-medium">
                Yearly Revenue
              </p>
              <p className="text-sm text-secondary">Another way to grow fast</p>
            </div>

            <div>
              <h3 className="text-[42px] font-semibold leading-subHeading tracking-subHeading">
                98%
              </h3>
              <p className="text-primary leading-primary font-medium">
                Monthly Conversions
              </p>
              <p className="text-sm text-secondary">On our website</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logoipsum;
