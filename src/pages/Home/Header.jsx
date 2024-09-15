import Navbar from "../../components/Navbar";
import card1 from "../../assets/Hero-Images/Card1.svg";
import card2 from "../../assets/Hero-Images/Card2.svg";
import patternImage from "../../assets/Hero-Images/Backgroundpattern.svg";
import avater1 from "../../assets/Hero-Images/avatar1.png";
import avater2 from "../../assets/Hero-Images/avatar2.png";
import BlueButton from "../../components/button/BlueButton";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="bg-custom-image min-h-screen bg-cover bg-center relative header block w-full">
      {/* Pattern Images */}
      <div className="flex absolute z-10">
        <img
          src={patternImage}
          alt="Pattern"
          className="w-1/2 object-cover opacity-1"
        />
        <img
          src={patternImage}
          alt="Pattern"
          className="w-1/2 object-cover opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-custom mx-auto">
        <Navbar />
        <div className="flex items-center pt-6">
          {/* Text and Button Section */}
          <motion.div
            className="w-1/2 pr-40 gap-4 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="text-sm leading-[23.8px] font-medium px-5 py-[6px] text-primary rounded-[100px] border border-[#1C181712]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Tool that help you earn fast
            </motion.span>
            <motion.h1
              className="font-semibold text-7xl leading-heading tracking-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Boost your organic sales in 90 days or less.
            </motion.h1>
            <motion.p
              className="text-base leading-[30.6px] text-secondary pb-[14px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              You can easily collaborate with team members, access your projects
              from anywhere, and manage your tasks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <BlueButton text={"Get 14 Days Free Trial"} />
            </motion.div>
          </motion.div>

          {/* Images Section */}
          <motion.div
            className="w-1/2 relative py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              className="left-0 top-0 absolute z-10"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img className="object-cover h-full w-auto" src={card1} alt="" />
            </motion.div>
            <motion.div
              className="left-48 -top-16 relative z-0 object-cover"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img className="object-cover h-full w-auto" src={card2} alt="" />
            </motion.div>
            <motion.img
              className="z-0 absolute h-40 object-cover left-28 -top-3"
              src={avater1}
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
            <motion.img
              className="z-0 absolute h-28 object-cover right-40 bottom-[104px]"
              src={avater2}
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
