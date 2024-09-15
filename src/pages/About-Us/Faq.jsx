import Accordion from "../../components/Accordion";
import { motion } from "framer-motion";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "What is Cloudo and how can it benefit my business?",
      answer:
        "Cloudo is a comprehensive cloud-based solution designed to streamline business processes and enhance efficiency. It offers various features such as data analytics, project management, and collaboration tools to help businesses optimize their operations and drive growth.",
    },
    {
      id: 2,
      question: "How does Cloudo help with data-driven decision-making?",
      answer:
        "Cloudo helps with data-driven decision-making by providing advanced analytics tools that aggregate and analyze data from various sources. This allows businesses to generate actionable insights, make informed decisions, and improve their overall performance.",
    },
    {
      id: 3,
      question: "Download the app from the App Store or Google Play!",
      answer:
        "To get started with Cloudo, download the app from the App Store or Google Play, create an account, and follow the setup guide to link your bank accounts and customize your financial preferences. The setup guide will walk you through the process step by step.",
    },
    {
      id: 4,
      question: "Can we try Cloudo before committing to a subscription?",
      answer:
        "Yes, Cloudo offers a free trial period that allows you to explore its features and functionalities before committing to a subscription. During the trial, you can assess how well Cloudo meets your business needs.",
    },
    {
      id: 5,
      question: "What kind of customer support does Cloudo offer?",
      answer:
        "Cloudo provides comprehensive customer support, including 24/7 helpdesk services, live chat support, email support, and a detailed knowledge base. Our support team is available to assist you with any issues or questions you may have.",
    },
    {
      id: 6,
      question: "What training resources are available for Cloudo users?",
      answer:
        "Cloudo offers various training resources, including online tutorials, webinars, user manuals, and community forums. These resources are designed to help users get the most out of the platform and address any questions or challenges they may encounter.",
    },
    {
      id: 7,
      question: "Can Cloudo be customized to fit our business needs?",
      answer:
        "Yes, Cloudo can be customized to fit your specific business needs. We offer flexible customization options, including custom workflows, integrations with other tools, and personalized settings to ensure that the platform aligns with your business requirements.",
    },
    {
      id: 8,
      question: "How does Cloudo ensure data privacy and compliance?",
      answer:
        "Cloudo prioritizes data privacy and compliance by implementing robust security measures and adhering to industry standards. We use encryption, secure data storage, and regular audits to protect your data and ensure compliance with regulations.",
    },
    {
      id: 9,
      question: "Can we try Cloudo before committing to a subscription?",
      answer:
        "Yes, Cloudo offers a free trial period that allows you to explore its features and functionalities before committing to a subscription. During the trial, you can assess how well Cloudo meets your business needs.",
    },
  ];

  return (
    <div className="mt-20  max-w-custom mx-auto">
      {/* Heading Animation */}
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[42px] text-primary font-semibold tracking-subHeading leading-subHeading">
          Frequently Asked Questions
        </h1>
      </motion.div>

      {/* FAQ Grid */}
      <motion.div
        className="grid grid-cols-2 gap-4 items-stretch w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {faqData.map((data) => (
          <motion.div
            key={data.id}
            className="border p-5 rounded-default"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Accordion title={data.question} answer={data.answer} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
