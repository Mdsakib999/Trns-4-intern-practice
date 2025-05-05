import cargo from "/assets/cargo.png";

const About = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between mt-20">
			{/* text only */}
			<div className="w-full md:w-1/2 flex flex-col justify-between space-y-8 md:space-y-20 text-center md:text-left px-5 md:pl-10 md:pr-0">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
					<p className="tracking-wide">Seamless Service for</p>
					<p>
						a <span className="text-blue-700">Connected World</span>
					</p>
				</h1>

				<div className="space-y-4">
					<h2 className="text-lg sm:text-xl font-bold">About Our Company</h2>
					<p className="max-w-xs sm:max-w-sm md:w-96 mx-auto md:mx-0">
						Free Download Cargo Crate SVG vector file in monocolor and
						multicolor type for Sketch and Figma from Cargo Crate Vectors svg
						vector collection. Cargo Crate Vectors SVG vector illustration.
					</p>
				</div>
			</div>

			{/* image */}
			<div className="w-full md:w-1/2">
				<div
					className="relative h-60 sm:h-80 md:h-[430px] md:pl-0"
					style={{
						backgroundImage:
							"linear-gradient(to right, transparent 20%, #bfdbfe 100%)",
					}}
				>
					<img
						className="w-full h-full object-cover"
						src={cargo}
						alt="Cargo illustration"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
