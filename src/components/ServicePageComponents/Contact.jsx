import worldmap from "/assets/world-map.png";

export const Contact = () => {
	return (
		<div className="bg-secondary p-6 sm:p-10 mt-20 rounded-md">
			<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center md:text-left">
				<p>Get A Shipping Quote</p>
				<p>
					To <span className="text-primary font-bold">Get Started!</span>
				</p>
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

				{/* Image Section - below form on mobile, big on large devices */}
				<img
					src={worldmap}
					alt="world map"
					className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto"
				/>
			</div>
		</div>
	);
};
