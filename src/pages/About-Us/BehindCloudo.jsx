import { motion } from "framer-motion";
import albert from "../../assets/About-Us/albert.png";
import esther from "../../assets/About-Us/esther.png";
import guy from "../../assets/About-Us/guy.png";
import robert from "../../assets/About-Us/robert.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const BehindCloudo = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Esther Howard",
      profession: "UI/UX Designer",
      twitter: "https://x.com/example?lang=en",
      instagram: "https://www.instagram.com/explore/tags/demo/top/",
      image: esther,
    },
    {
      id: 2,
      name: "Albert Flores",
      profession: "Apps Developer",
      twitter: "https://x.com/example?lang=en",
      instagram: "https://www.instagram.com/explore/tags/demo/top/",
      image: albert,
    },
    {
      id: 3,
      name: "Guy Hawkins",
      profession: "Web Developer",
      twitter: "https://x.com/example?lang=en",
      instagram: "https://www.instagram.com/explore/tags/demo/top/",
      image: guy,
    },
    {
      id: 4,
      name: "Robert Fox",
      profession: "Co-Founder & CEO",
      twitter: "https://x.com/example?lang=en",
      instagram: "https://www.instagram.com/explore/tags/demo/top/",
      image: robert,
    },
  ];

  return (
    <div className="mt-20  max-w-custom mx-auto">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[42px] text-primary font-semibold tracking-subHeading leading-subHeading">
          The minds behind Cloudo.
        </h1>
      </motion.div>
      <div className=" mx-auto grid grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="flex flex-col items-start gap-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="object-cover bg-[#F8F8F8] rounded-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="mt-4 text-lg text-center font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {member.name}
            </motion.p>
            <motion.p
              className="text-sm text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {member.profession}
            </motion.p>
            <div className="flex gap-2 mt-2">
              <motion.a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <RiInstagramFill />
              </motion.a>
              <motion.a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BehindCloudo;
