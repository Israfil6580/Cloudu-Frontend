import { ScrollRestoration } from "react-router-dom";
import GetStartedToday from "../../components/GetStartedToday";
import Logoipsum from "../../components/Logoipsum";
import Faq from "../About-Us/Faq";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <div className="max-w-custom mx-auto">
      <Form />
      <Logoipsum />
      <Faq />
      <GetStartedToday />
      <ScrollRestoration />
    </div>
  );
};

export default GetInTouch;
