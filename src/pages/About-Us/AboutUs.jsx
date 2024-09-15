import { ScrollRestoration } from "react-router-dom";
import Founders from "./Founders";
import OurMission from "./OurMission";
import FoundingStory from "./FoundingStory";
import BehindCloudo from "./BehindCloudo";
import Logoipsum from "../../components/Logoipsum";
import Faq from "./Faq";
import GetStartedToday from "../../components/GetStartedToday";

const AboutUs = () => {
  return (
    <>
      <OurMission />
      <Founders />
      <FoundingStory />
      <BehindCloudo />
      <Logoipsum />
      <Faq />
      <GetStartedToday />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
