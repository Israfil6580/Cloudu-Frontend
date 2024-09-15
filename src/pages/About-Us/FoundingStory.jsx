import { motion } from "framer-motion";
import foundingImage from "../../assets/About-Us/about4.png";

const FoundingStory = () => {
  return (
    <motion.div
      className="mt-10 py-20 bg-[#F8F8F8]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Container */}
      <motion.div
        className=" max-w-custom mx-auto flex gap-6 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Image Section */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src={foundingImage} alt="Founding Story" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h1
            className="text-[42px] text-primary font-semibold tracking-subHeading leading-subHeading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our founding story
          </motion.h1>

          {/* Paragraph 1 */}
          <motion.p
            className="leading-primary text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Cloudo was born out of a need for a better way to manage business
            operations. Our founders, seasoned professionals in the fields of in
            business management and software development.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className="leading-primary text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            They set out to create a solution that was not only powerful and
            versatile but also easy to use and accessible from anywhere. Today,
            Cloudo is trusted by hundreds of businesses worldwide, thanks to its
            robust features and intuitive design.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FoundingStory;
