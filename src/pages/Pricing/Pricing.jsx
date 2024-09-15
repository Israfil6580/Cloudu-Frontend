import { ScrollRestoration } from "react-router-dom";
import PricingPlan from "./PricingPlan";
import Trusted from "../../components/Trusted";
import PricingTable from "./PricingTable";
import Logoipsum from "../../components/Logoipsum";
import Faq from "../About-Us/Faq";
import GetStartedToday from "../../components/GetStartedToday";

const Pricing = () => {
  return (
    <div className="max-w-custom mx-auto">
      <PricingPlan />
      <Trusted />
      <PricingTable />
      <Logoipsum />
      <Faq />
      <GetStartedToday />
      <ScrollRestoration />
    </div>
  );
};

export default Pricing;
