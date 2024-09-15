import { ScrollRestoration } from "react-router-dom";
import GetStartedToday from "../../components/GetStartedToday";
import Realese from "./Realese";

const Changelog = () => {
  return (
    <div className="max-w-custom mx-auto">
      <Realese />
      <GetStartedToday />
      <ScrollRestoration />
    </div>
  );
};

export default Changelog;
