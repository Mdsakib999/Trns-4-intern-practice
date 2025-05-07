import { CustomClearance } from "./CustomClearance";
import { Tab } from "./Tab/Tab";

export const TransSolution = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-28 px-4 md:px-10 max-w-7xl mx-auto relative">
			<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center z-0 relative">
				Transport<span className="text-primary">lösungen</span>
			</h1>

			{/* Gradient background visual */}
			<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[500px] h-[300px] rounded-2xl blur-3xl opacity-40 bg-gradient-to-r from-blue-600 via-indigo-800 to-purple-900 z-0" />

			{/* Tab section and Custom Clearance */}
			<div className="relative z-0 mt-10">
				<Tab />
				<CustomClearance />
			</div>
		</div>
	);
};
