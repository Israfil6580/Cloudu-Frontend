import { motion } from "framer-motion";

const AllCondition = () => {
  const terms = [
    {
      section: "1. Introduction",
      description:
        "Welcome to Cloude! These Terms and Conditions ('Terms') govern your use of the Cloude business management software-as-a-service (SaaS) platform ('Service'). By accessing or using the Service, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Service.",
    },
    {
      section: "2. Definitions",
      description: "The following terms have the meanings given below:",
      content: [
        "1. 'Cloude' refers to the SaaS platform provided by Cloude Inc.",
        "2. 'User' refers to any individual or entity that accesses or uses the Service.",
        "3. 'Account' refers to the account created by the User to access the Service.",
        "4. 'Content' refers to any data, information, documents, or materials uploaded, submitted, or shared through the Service.",
      ],
    },
    {
      section: "3. Account Registration",
      description:
        "To use the Service, you must create an Account by providing accurate and complete information.",
      content: [
        "1. You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account.",
        "2. You agree to notify Cloude immediately of any unauthorized use of your Account or any other security breach.",
      ],
    },
    {
      section: "4. Use of the Service",
      description:
        "You agree to use the Service only for lawful purposes and in accordance with these Terms.",
      content: [
        "1. You may not use the Service to upload, post, or transmit any Content that is illegal, harmful, or violates any third-party rights.",
        "2. You agree not to interfere with or disrupt the integrity or performance of the Service.",
      ],
    },
    {
      section: "5. Subscription and Payment",
      description:
        "The Service is offered on a subscription basis. You agree to pay all fees associated with your chosen subscription plan.",
      content: [
        "1. Subscription fees are billed in advance on a recurring basis (monthly or annually) and are non-refundable.",
        "2. Cloude reserves the right to change the subscription fees or introduce new charges upon prior notice to you.",
      ],
    },
    {
      section: "6. Termination and Suspension",
      description:
        "Cloude may terminate or suspend your Account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.",
      content: [
        "1. You may terminate your Account at any time by contacting Cloude support.",
        "2. Upon termination, your right to use the Service will immediately cease, and any Content associated with your Account may be deleted.",
      ],
    },
    {
      section: "7. Intellectual Property",
      description:
        "Cloude retains all rights, title, and interest in and to the Service, including all intellectual property rights.",
      content: [
        "1. You retain ownership of any Content you upload or submit through the Service. By submitting Content, you grant Cloude a worldwide, non-exclusive, royalty-free license to use, reproduce, and display the Content for the purpose of providing the Service.",
      ],
    },
    {
      section: "8. Data Privacy",
      description:
        "Cloude is committed to protecting your privacy. Our use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      content: [
        "1. You agree that Cloude may collect, use, and disclose your personal information as described in our Privacy Policy.",
      ],
    },
    {
      section: "9. Disclaimer of Warranties",
      description:
        "The Service is provided 'as is' and 'as available' without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      content: [
        "1. Cloude does not warrant that the Service will be uninterrupted, error-free, or secure.",
      ],
    },
    {
      section: "10. Limitation of Liability",
      description:
        "In no event shall Cloude be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
      content: [
        "1. Resulting from (i) your use or inability to use the Service; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Service; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service by any third party; (v) any errors or omissions in any Content or for any loss or damage incurred as a result of the use of any Content posted, emailed, transmitted, or otherwise made available through the Service; and/or (vi) the defamatory, offensive, or illegal conduct of any third party.",
      ],
    },
    {
      section: "11. Governing Law",
      description:
        "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Cloude is headquartered, without regard to its conflict of law principles.",
    },
    {
      section: "12. Contact Us",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us:",
        "Phone: +001 456 4569",
        "Email: cloudo@mail.com",
        "Address: 4517 Washington Ave. Manchester, Kentucky 39495",
        "Thank you for choosing Cloude for your Business needs!",
      ],
    },
  ];

  // Section animation variant
  const sectionVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  // General animation for text elements
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-semibold text-[62px] leading-heading tracking-heading">
          Terms & Conditions
        </h1>
        <p className="text-secondary">Last Updated: 06 May, 2024</p>
      </motion.div>

      <div className="pt-16">
        {terms.map((term, index) => (
          <motion.div
            key={index}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pb-10"
          >
            <motion.h1
              variants={textVariant}
              className="text-[42px] font-semibold leading-subHeading tracking-subHeading"
            >
              {term.section}
            </motion.h1>

            <motion.p
              variants={textVariant}
              className="text-secondary text-lg pb-4 pt-2"
            >
              {term.description}
            </motion.p>

            {term.content && (
              <ul className="flex flex-col gap-2">
                {term.content.map((item, index) => {
                  const [beforeColon, afterColon] = item.split(":");
                  return (
                    <motion.li key={index} variants={textVariant}>
                      <span className="font-medium text-lg text-primary">
                        {beforeColon}:
                      </span>{" "}
                      <span className="text-secondary text-lg">
                        {afterColon}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllCondition;
