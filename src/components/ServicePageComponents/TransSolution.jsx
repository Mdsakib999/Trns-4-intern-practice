import { CustomClearance } from "./CustomClearance";
import { Tab } from "./Tab/Tab";

export const TransSolution = () => {
  return (
    <div className="mt-28">
      <h1 className="text-6xl font-semibold text-center">
        Transport <span className="text-primary">Solutions</span>
      </h1>
      <Tab />
      <CustomClearance />
    </div>
  );
};
