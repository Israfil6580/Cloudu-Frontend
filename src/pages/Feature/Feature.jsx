import OptimizeTraffic from "../Home/OptimizeTraffic";
import LookBeyhondLimits from "./LookBeyhondLimits";
import SalesOverview from "../Home/SalesOverview";
// image
import trafficReport from "../../assets/Features/salesReport.png";
import salesOverview from "../../assets/Features/salesOverview.png";
import TaskTracking from "./TaskTracking";
import KeyToAccelerate from "./KeyToAccelerate";
import NeededTools from "../../components/NeededTools";
import Logoipsum from "../../components/Logoipsum";
import GetStartedToday from "../../components/GetStartedToday";
const Feature = () => {
  return (
    <>
      <LookBeyhondLimits />
      <div className="max-w-custom mx-auto">
        <NeededTools />
        <OptimizeTraffic image={trafficReport} />
        <SalesOverview image={salesOverview} />
        <TaskTracking />
        <KeyToAccelerate />
        <Logoipsum />
        <GetStartedToday />
      </div>
    </>
  );
};

export default Feature;
