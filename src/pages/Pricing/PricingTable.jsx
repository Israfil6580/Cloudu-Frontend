import { motion } from "framer-motion";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const plans = [
  {
    name: "Free",
    price: "$0",
    billingCycle: "per user / month",
    features: {
      coreProjectManagement: true,
      activeProjects: false,
      reportingAndAnalytics: true,
      storage: true,
      security: false,
      thirdPartyIntegrations: false,
      accountManager: false,
      securityFeatures: false,
    },
  },
  {
    name: "Pro",
    price: "$24",
    billingCycle: "per user / month",
    features: {
      coreProjectManagement: true,
      activeProjects: true,
      reportingAndAnalytics: false,
      storage: true,
      security: true,
      thirdPartyIntegrations: true,
      accountManager: false,
      securityFeatures: true,
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    billingCycle: "per user / month",
    features: {
      coreProjectManagement: true,
      activeProjects: true,
      reportingAndAnalytics: true,
      storage: true,
      security: true,
      thirdPartyIntegrations: true,
      accountManager: true,
      securityFeatures: true,
    },
  },
];

// Table component with plan details at the top and features on the left
const PricingTable = () => {
  // List of features to display on the left side
  const featureList = [
    "Core Project Management",
    "Active Projects",
    "Reporting & Analytics",
    "Storage",
    "Security",
    "Third-party Integrations",
    "Account Manager",
    "Security Features",
  ];

  // Render checkmark or X for true/false values
  const checkmark = (condition) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center justify-start"
    >
      {condition ? (
        <IoIosCheckmarkCircle className="text-green-600 text-xl" />
      ) : (
        <RxCross2 className="text-red-600 text-xl" />
      )}
    </motion.div>
  );

  return (
    <table className="w-full mt-20">
      <thead>
        <tr>
          <th></th>
          {plans.map((plan, index) => (
            <th key={index} className="py-20 text-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-secondary font-semibold"
              >
                {plan.name}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl text-primary font-bold py-3"
              >
                {plan.price}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-secondary font-normal text-sm"
              >
                {plan.billingCycle}
              </motion.div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {featureList.map((feature, featureIndex) => (
          <motion.tr
            key={featureIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <td className="border-t p-2 font-medium text-secondary">
              {feature}
            </td>
            {plans.map((plan, planIndex) => (
              <td key={planIndex} className="border-t py-6 text-start pl-6">
                {checkmark(
                  plan.features[Object.keys(plan.features)[featureIndex]]
                )}
              </td>
            ))}
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
};

export default PricingTable;
