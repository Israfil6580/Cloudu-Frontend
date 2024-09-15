import { useState } from "react";
import { MdBrightness1 } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    button: "bg-white text-primary",
    description: "Free plan for all users",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    billing: "No credit card required",
    trial: "Get 14 Days Free Trial",
    monthlyFeatures: [
      "Up to 10 active projects",
      "50 GB storage per user",
      "Customizable dashboards",
      "Basic reporting and analytics",
    ],
    yearlyFeatures: [
      "Up to 40 active projects",
      "100 GB storage per user",
      "Customizable dashboards",
      "Basic reporting and analytics",
    ],
  },
  {
    name: "Pro",
    button: "bg-orange text-white shadow-xl",
    description: "Power access to everything",
    monthlyPrice: "$24",
    yearlyPrice: "$240",
    billing: "per month, billed yearly",
    trial: "Get 14 Days Free Trial",
    monthlyFeatures: [
      "Limited projects",
      "5 GB storage per user",
      "All features of the Free plan",
      "Email support",
      "Priority email and chat support",
    ],
    yearlyFeatures: [
      "Unlimited projects",
      "10 GB storage per user",
      "All features of the Free plan",
      "Enhanced analytics",
      "Priority email, chat, and phone support",
    ],
  },
  {
    name: "Enterprise",
    button: "bg-black text-white shadow-xl",
    bgCss: "bg-[#F8F8F8]",
    description: "Comprehensive access for large organizations",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    billing: "Contact for custom pricing",
    trial: "Contact Sales",
    monthlyFeatures: [
      "Limited storage",
      "All features of the Pro plan",
      "24/7 phone support",
      "Dedicated account manager",
    ],
    yearlyFeatures: [
      "Unlimited storage",
      "All features of the Pro plan",
      "24/7 phone support",
      "Dedicated account manager",
      "Custom reporting and analytics",
    ],
  },
];

const PricingPlan = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  const toggleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="pt-20">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="font-semibold text-[62px] leading-heading tracking-heading">
          Pricing & Plan
        </h1>
        <p className="text-lg text-secondary">
          Managing your daily activities has never been easier with these plans
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center pt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-block mb-8 bg-gray-200 p-2 rounded-default">
          <button
            className={`px-6 py-3 ${
              billingCycle === "monthly"
                ? "bg-blue text-white rounded-xl"
                : "bg-gray-200"
            }`}
            onClick={() => toggleBillingCycle("monthly")}
            aria-label="Switch to Monthly Billing"
          >
            Monthly
          </button>
          <button
            className={`px-6 py-3 ${
              billingCycle === "yearly"
                ? "bg-blue text-white rounded-xl"
                : "bg-gray-200"
            }`}
            onClick={() => toggleBillingCycle("yearly")}
            aria-label="Switch to Yearly Billing"
          >
            Yearly
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-around gap-5">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`border p-7 rounded-default w-full md:w-1/3 ${
              plan.bgCss || ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-lg font-semibold mb-2">{plan.name}</p>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold mb-1">
              {plan.monthlyPrice === "Custom" || plan.yearlyPrice === "Custom"
                ? "Contact for pricing"
                : billingCycle === "monthly"
                ? plan.monthlyPrice
                : plan.yearlyPrice}
            </p>
            <p className=" text-gray-600 mb-4">{plan.billing}</p>
            <div className="my-5 flex justify-center">
              <Link
                className={`w-full relative rounded-default font-medium leading-primary px-[24px] py-[14px] border-[1.5px] border-[#4F4B481F] shadow-sm overflow-hidden text-center ${plan.button}`}
                to={""}
              >
                <button>
                  <span>Get 14 Days Free Trial</span>
                </button>
              </Link>
            </div>
            <hr className="my-10" />
            <div className="pb-2">
              <h3 className="text-lg font-bold">Features</h3>
              <p className="text-sm text-secondary">
                Everything in our free plan:
              </p>
            </div>
            <ul className="mb-4">
              {(billingCycle === "monthly"
                ? plan.monthlyFeatures
                : plan.yearlyFeatures
              ).map((feature, index) => (
                <motion.li
                  key={index}
                  className="text-gray-700 mb-1 flex gap-2 items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <MdBrightness1 /> {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              whileHover={{ scale: 1.05 }}
            >
              {plan.trial}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
