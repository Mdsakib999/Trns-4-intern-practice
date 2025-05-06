import cargo from "/assets/cargo.png";

const About = () => {
	return (
		<section className="flex flex-col md:flex-row items-center justify-between mt-16 mb-32 px-4 md:px-10">
			{/* Text Section */}
			<div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
					<p className="tracking-wide">Seamless Service for</p>
					<p>
						a <span className="text-blue-800">Connected World</span>
					</p>
				</h1>

				<div className="space-y-3">
					<h2 className="text-lg sm:text-xl font-bold">About Our Company</h2>
					<p className="text-sm sm:text-base max-w-md md:max-w-lg mx-auto md:mx-0">
						Free Download Cargo Crate SVG vector file in monocolor and
						multicolor type for Sketch and Figma from Cargo Crate Vectors svg
						vector collection. Cargo Crate Vectors SVG vector illustration.
					</p>
				</div>
			</div>

			{/* Image Section */}
			<div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
				{/* Background Gradient (shorter) */}
				<div
					className="absolute top-0 w-full h-40 sm:h-56 md:h-[180px] lg:h-[260px] xl:h-[350px] z-0"
					style={{
						backgroundImage:
							"linear-gradient(to right, transparent 20%, #bfdbfe 100%)",
					}}
				/>

				{/* Image (not cropped) */}
				<img
					className="relative z-0 w-full max-h-[550px] object-contain"
					src={cargo}
					alt="Cargo illustration"
				/>
			</div>
		</section>
	);
};

export default About;
