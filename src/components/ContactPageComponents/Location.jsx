import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import locationIcon from "/assets/locationIcon.png";
import worldbg from "/assets/world-map.png";

export const locations = [
	{
		id: 1,
		phone: "+49 40 74303412",
		name: "ECML Logistik GmbH",
		website: "ecmllogistik.com",
		email: "info@ecmllogistik.com",
		address: "Hamburg, Germany",
	},
];

export const Location = () => {
	const locationPins = [
		{
			id: 1,
			top: "30%",
			left: "20%",
		},
		{
			id: 2,
			top: "55%",
			left: "53%",
		},
		{
			id: 3,
			top: "22%",
			left: "77%",
		},
	];

	return (
		<div className="my-10">
			<div className="flex flex-col lg:flex-row justify-between py-10 px-4 sm:px-6 lg:px-10 gap-10">
				{/* Text section */}
				<div className="w-full lg:w-1/2">
					<h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
						Location
					</h1>
					<div className="mt-10">
						{locations.map((location) => (
							<div
								key={location.id}
								className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-100"
							>
								<div className="flex items-start gap-4">
									<div className="flex flex-col w-full">
										<h2 className="text-xl font-inter font-semibold text-gray-800 mb-4">
											{location.name}
										</h2>

										<div className="space-y-8">
											<div className="flex items-center gap-3">
												<div className="text-primary">
													<FaMapMarkerAlt size={18} />
												</div>
												<p className="text-gray-600">{location.address}</p>
											</div>

											<div className="flex items-center gap-3">
												<div className="text-primary">
													<FaPhone size={18} />
												</div>
												<p className="text-gray-600">{location.phone}</p>
											</div>

											<div className="flex items-center gap-3">
												<div className="text-primary">
													<FaEnvelope size={18} />
												</div>
												<p className="text-gray-600">{location.email}</p>
											</div>

											<div className="flex items-center gap-3">
												<div className="text-primary">
													<FaGlobe size={18} />
												</div>
												<p className="text-gray-600">{location.website}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Map section - Preserved as requested */}
				<div className="w-full lg:w-1/2 relative">
					<img
						src={worldbg}
						alt="World Map Background"
						className="w-full h-auto object-contain"
					/>
					{locationPins.map((pin) => (
						<div
							key={pin.id}
							className="absolute animate-bounce"
							style={{
								top: pin.top,
								left: pin.left,
								transform: "translate(-50%, -100%)",
							}}
						>
							<img
								src={locationIcon}
								alt="Location Pin"
								className="w-3.5 h-3.5 md:w-6 md:h-6"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
