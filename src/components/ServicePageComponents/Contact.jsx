import worldmap from "/assets/world-map.png";
import locationIcon from "/assets/locationIcon.png";

export const Contact = () => {
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
		<div className="bg-secondary p-6 sm:p-10 mt-20 rounded-md">
			<h1 className="w-full md:w-2/3 max-w-2xl mx-auto md:mx-0 text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
				<span className="block">Starten Sie Ihre Frachtreise hier</span>
				<span className="block">
					To <span className="text-primary font-bold">Frachtreise hier!</span>
				</span>
			</h1>

			<div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10">
				<form className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-3">
					<input
						type="text"
						placeholder="Name *"
						className="p-2 text-sm border border-gray-400 outline-none bg-white rounded"
						required
					/>
					<input
						type="email"
						placeholder="Email"
						className="p-2 text-sm border border-gray-400 outline-none bg-white rounded"
					/>
					<input
						type="tel"
						placeholder="Phone number *"
						className="p-2 text-sm border border-gray-400 outline-none bg-white rounded"
						required
					/>
					<select
						className="p-2 text-sm border border-gray-400 outline-none bg-white rounded"
						defaultValue=""
					>
						<option value="" disabled>
							What Are You Interested In?
						</option>
						<option value="shipping">Shipping</option>
						<option value="tracking">Tracking</option>
						<option value="support">Customer Support</option>
					</select>
					<button
						type="submit"
						className="bg-blue-800 text-white py-2 text-sm rounded-full font-semibold hover:bg-blue-900 transition"
					>
						SEND
					</button>
				</form>
				<div className="w-full lg:w-1/2 relative">
					<img
						src={worldmap}
						alt="World Map Background"
						className="w-full h-auto object-contain"
					/>
					{locationPins.map((pin) => (
						<div
							key={pin.id}
							className="absolute"
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
