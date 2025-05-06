import { div } from "framer-motion/client";

const serviceMenu = [
	{
		number: "01",
		content: "We make it easy to find storage solutions with air freight",
		title: "AIR FREIGHT",
	},
	{
		number: "02",
		content: "We make it easy to find storage solutions with air freight",
		title: "ROAD FREIGHT",
	},
	{
		number: "03",
		content: "We make it easy to find storage solutions with air freight",
		title: "OCEAN FREIGHT",
	},
];

const Services = () => {
	return (
		<div className="my-20 px-4 sm:px-8">
			<h1 className="text-3xl sm:text-5xl font-semibold pl-2 sm:pl-10">
				Shipping and Logistic <span className="text-primary">Services</span>
			</h1>

			<div className="mt-10 space-y-6">
				{serviceMenu.map((service, index) => (
					<div
						className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-4 border-b-4 border-gray-500 px-2 sm:px-10 pb-4"
						key={index}
					>
						<div className="flex-1">
							<p className="text-xl sm:text-2xl text-primary font-bold">
								{service.number}
							</p>
							<p className="text-sm sm:text-base text-gray-600 max-w-xs">
								{service.content}
							</p>
						</div>

						{/* Title anchored to bottom */}
						<div className="sm:flex sm:items-end">
							<h1 className="text-2xl sm:text-4xl font-bold text-primary leading-tight">
								{service.title}
							</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
