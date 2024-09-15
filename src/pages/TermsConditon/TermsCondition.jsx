import { ScrollRestoration } from "react-router-dom";
import AllCondition from "./AllCondition";
import GetStartedToday from "../../components/GetStartedToday";

const TermsCondition = () => {
  return (
    <>
      <AllCondition />
      <GetStartedToday />
      <ScrollRestoration />
    </>
  );
};

export default TermsCondition;
