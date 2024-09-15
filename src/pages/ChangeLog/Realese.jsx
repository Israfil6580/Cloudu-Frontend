import DefaultButton from "../../components/button/DefaultButton";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Realese = () => {
  const releaseNotes = [
    {
      released: "August 25, 2024",
      version: "v.1.2.0",
      dashboard: [
        "New Dashboard with enhanced customization options",
        "AI-Powered Insights for better decision-making",
      ],
      userAccount: [
        "User Account improvements for better task management",
        "Organize tasks into personalized categories or projects",
        "Assign colors or icons to categories for visual clarity",
      ],
    },
    {
      released: "August 25, 2023",
      version: "v.1.1.0",
      dashboard: [
        "New Dashboard with personalized categories or projects",
        "Improved data synchronization stability",
      ],
      userAccount: [
        "User Account enhancements",
        "Organize tasks into personalized categories or projects",
        "Assign colors or icons to categories for visual clarity",
      ],
    },
    {
      released: "August 25, 2022",
      version: "v.1.0.0",
      dashboard: [
        "New Dashboard with a refreshed, intuitive user interface",
        "Optimized system performance with faster load times",
      ],
      userAccount: [
        "User Account improvements to resolve login issues",
        "Assign colors or icons to categories for visual clarity",
      ],
    },
  ];

  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="font-semibold text-[62px] leading-heading tracking-heading">
          Changelog
        </h1>
      </div>
      <div className="pt-16">
        {releaseNotes.map((notes, index) => (
          <motion.div
            key={index}
            className="flex w-full p-16 border mb-5 rounded-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-1/3 text-primary font-medium">
              {notes.released}
            </div>
            <div className="w-2/3 flex flex-col gap-4">
              <DefaultButton text={notes.version} />
              <motion.p
                className="text-lg font-semibold text-primary leading-[34px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                New Dashboard
              </motion.p>
              <ul className="flex flex-col gap-2">
                {notes.dashboard.map((item, index) => (
                  <motion.li
                    className="text-secondary flex gap-2 items-center"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <FaCircle className="h-3 w-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-lg font-semibold text-primary leading-[34px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                User Account
              </motion.p>
              <ul className="flex flex-col gap-2">
                {notes.userAccount.map((item, index) => (
                  <motion.li
                    className="text-secondary flex gap-2 items-center"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <FaCircle className="h-3 w-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Realese;
