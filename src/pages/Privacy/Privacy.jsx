import { ScrollRestoration } from "react-router-dom";
import GetStartedToday from "../../components/GetStartedToday";
import Allpolicy from "./Allpolicy";

const Privacy = () => {
  return (
    <>
      <Allpolicy />
      <GetStartedToday />
      <ScrollRestoration />
    </>
  );
};

export default Privacy;
