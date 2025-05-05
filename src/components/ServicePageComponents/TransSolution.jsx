import { CustomClearance } from "./CustomClearance";
import { Tab } from "./Tab/Tab";

export const TransSolution = () => {
  return (
    <div className="mt-28 mx-10">
      <div className="relative">
        <h1 className="text-6xl font-semibold text-center">
          Transport <span className="text-primary">Solutions</span>
        </h1>
        <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-blue-600 via-indigo-800 to-purple-900 opacity-50 blur-2xl h-[300px] w-[500px] rounded-2xl"></div>
        <Tab />
        <CustomClearance />
      </div>
    </div>
  );
};
