import GetStartedToday from "../../components/GetStartedToday";
import Logoipsum from "../../components/Logoipsum";
import NeededTools from "../../components/NeededTools";
import FavouriteTools from "./FavouriteTools";
import OptimizeTraffic from "./OptimizeTraffic";
import SalesByRegion from "./SalesByRegion";
import SalesOverview from "./SalesOverview";
import StartGrowth from "./StartGrowth";
import UnderstandCustomer from "./UnderstandCustomer";
// image
import trafficReport from "../../assets/Hero-Images/trafficReport.png";
import salesOverview from "../../assets/Hero-Images/salesOverview.png";
import Trusted from "../../components/Trusted";
const Home = () => {
  return (
    <div className="max-w-custom mx-auto">
      <Trusted />
      <UnderstandCustomer />
      <OptimizeTraffic image={trafficReport} />
      <SalesOverview image={salesOverview} />
      <SalesByRegion />
      <StartGrowth />
      <FavouriteTools />
      <Logoipsum />
      <NeededTools />
      <GetStartedToday />
    </div>
  );
};

export default Home;
