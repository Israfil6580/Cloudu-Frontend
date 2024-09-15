import { motion } from "framer-motion";
import DefaultButton from "../../components/button/DefaultButton";
import myTask from "../../assets/Features/myTask.png";

const TaskTracking = () => {
  return (
    <div className="bg-[#F8F8F8] mt-32 rounded-default">
      <div className="p-20 flex gap-10 items-center">
        <motion.div
          className="w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-[42px] leading-subHeading text-primary font-bold tracking-subHeading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Task tracking for optimal business performance.
          </motion.h1>
          <motion.p
            className="leading-primary text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Task tracking is pivotal for optimal business performance, providing
            clear visibility into project progress and ensuring timely
            completion of tasks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DefaultButton text="Get Started" />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/2 flex justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={myTask}
            alt="Task Tracking"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TaskTracking;
