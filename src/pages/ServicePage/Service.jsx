import Review from "../../components/HomePageComponents/Review";
import { Banner } from "../../components/ServicePageComponents/Banner";
import { Contact } from "../../components/ServicePageComponents/Contact";
import { TransSolution } from "../../components/ServicePageComponents/TransSolution";

export const Service = () => {
  return (
    <div className="mt-20">
      <Banner />
      <TransSolution />
      <Review />
      <Contact />
    </div>
  );
};
