import { motion } from "framer-motion";
const Allpolicy = () => {
  const policies = [
    {
      section: "1. Introduction",
      description:
        "At Cloude, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our business management software as a service (SaaS) platform.",
    },
    {
      section: "2. Information We Collect",
      description:
        "We collect various types of information to provide and improve our services, including:",

      content: [
        "1. Personal Information: Name, email address, phone number, and other contact details.",
        "2. Account Information: Username, password, and account settings.",
        "3. Usage Information: Details about how you use our platform, including IP address, browser type, operating system, and activity logs.",
        "4. Communications: Any correspondence or communications you have with us, including support requests and feedback.",
        "5. Payment Information: Billing address, payment method details, and transaction history.",
      ],
    },
    {
      section: "3. How We Use Your Information",
      description:
        "We use the information we collect for the following purposes:",
      content: [
        "1. Service Delivery: To provide and manage our plumbing services, including scheduling and performing repairs.",
        "2. Customer Support: To respond to your inquiries and provide customer support.",
        "3. Payments: To process payments for our services.",
        "4. Communication: To send you updates, promotional materials, and other information related to our services.",
        "5. Improvement: To improve our services and website based on your feedback and usage data.",
      ],
    },
    {
      section: "4. Information Sharing and Disclosure",
      description:
        "We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:",
      content: [
        "1. With Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors, hosting providers, and customer support.",
        "2. For Legal Reasons: We may disclose your information if required by law or in response to legal processes, such as a subpoena or court order.",
        "3. To Protect Rights and Safety: We may share information to protect the rights, property, or safety of Cloude, our users, or others.",
      ],
    },
    {
      section: "5. Data Security",
      description:
        "We implement robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      section: "6. Data Retention",
      description:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When your information is no longer needed, we will securely delete or anonymize it.",
    },
    {
      section: "7. Your Rights",
      description:
        "You have certain rights regarding your personal information, including:",
      content: [
        "1. Access: You can request access to the personal information we hold about you.",
        "2. Correction: You can request corrections to any inaccurate or incomplete information.",
        "3. Deletion: You can request the deletion of your personal information, subject to legal and contractual restrictions.",
        "4. Opt-Out: You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in those communications.",
      ],
    },
    {
      section: "8. Third-Party Links",
      description:
        "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any personal information.",
    },
    {
      section: "9. Changes to this Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and indicating the date of the latest revision.",
    },
    {
      section: "10. Contact Us",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us:",
        "Phone: +001 456 4569",
        "Email: cloudo@mail.com",
        "Address: 4517 Washington Ave. Manchester, Kentucky 39495",
        "Thank you for choosing Cloudo for your business needs!",
      ],
    },
  ];

  const sectionVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // Ensures each child is animated in sequence
      },
    },
  };

  // General animation for text elements (headings, paragraphs, list items)
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
          Privacy Policy
        </h1>
        <p className="text-secondary">Last Updated: 06 May, 2024</p>
      </motion.div>

      <div className="pt-16">
        {policies.map((pol, index) => (
          <motion.div
            key={index}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Ensure each section animates only once when in view
            className="pb-10"
          >
            {/* Animate the section heading */}
            <motion.h1
              variants={textVariant}
              className="text-[42px] font-semibold leading-subHeading tracking-subHeading"
            >
              {pol.section}
            </motion.h1>

            {/* Animate the section description */}
            <motion.p
              variants={textVariant}
              className="text-secondary text-lg pb-4 pt-2"
            >
              {pol.description}
            </motion.p>

            {/* Animate the list of content items, if present */}
            <ul className="flex flex-col gap-2">
              {pol?.content?.map((item, index) => {
                const [beforeColon, afterColon] = item.split(":");
                return (
                  <motion.li key={index} variants={textVariant}>
                    <span className="font-medium text-lg text-primary">
                      {beforeColon}:
                    </span>{" "}
                    <span className="text-secondary text-lg">{afterColon}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Allpolicy;
