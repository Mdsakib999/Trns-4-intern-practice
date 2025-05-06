import { useState, useEffect } from "react";
import boat from "/assets/boat.png";
import box from "/assets/box.png";
import logotype from "/assets/logotype.png";
import plane from "/assets/plane.png";

const Opportunities = () => {
	// State to track viewport width for responsive adjustments
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1200
	);

	// Update window width when resizing
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Determine if mobile view
	const isMobile = windowWidth < 640;

	return (
		<div className="flex items-center justify-center py-16 md:py-24 lg:py-40 px-4">
			<div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
				{/* Top Images - Hidden on smallest screens */}
				<img
					className={`w-8 md:w-10 lg:w-14 absolute top-0 ${
						isMobile ? "left-0" : "-left-16 md:-left-24 lg:-left-32"
					} ${
						isMobile ? "-translate-y-12" : "-translate-x-1/2 -translate-y-full"
					} transition-all duration-300`}
					src={boat}
					alt="boat"
				/>
				<img
					className={`w-8 md:w-10 lg:w-14 absolute top-0 ${
						isMobile ? "right-0" : "-right-16 md:-right-24 lg:-right-32"
					} ${
						isMobile ? "-translate-y-12" : "translate-x-1/2 -translate-y-full"
					} transition-all duration-300`}
					src={box}
					alt="box"
				/>
				{/* Center Text */}
				<div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 backdrop-blur-3xl opacity-75 shadow-xl shadow-blue-300 rounded-xl py-10">
					<div className="flex flex-col items-center text-center px-4 py-3 md:px-6 md:py-4 border border-white/20 rounded-xl shadow-inner">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
							<p>Tap into a World of</p>
							<p>Opportunities.</p>
						</h1>
						<button className="bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-xl px-6 py-2.5 mt-3 md:mt-4 text-base md:text-lg text-white transition-colors">
							Contact now
						</button>
					</div>
				</div>{" "}
				{/* Bottom Images - Hidden on smallest screens */}
				<img
					className={`w-8 md:w-10 lg:w-14 absolute bottom-0 ${
						isMobile ? "left-0" : "-left-16 md:-left-24 lg:-left-32"
					} ${
						isMobile ? "translate-y-12" : "-translate-x-1/2 translate-y-full"
					} transition-all duration-300`}
					src={plane}
					alt="plane"
				/>
				<img
					className={`w-8 md:w-10 lg:w-14 absolute bottom-0 ${
						isMobile ? "right-0" : "-right-16 md:-right-24 lg:-right-32"
					} ${
						isMobile ? "translate-y-12" : "translate-x-1/2 translate-y-full"
					} transition-all duration-300`}
					src={logotype}
					alt="logotype"
				/>
			</div>
		</div>
	);
};

export default Opportunities;
