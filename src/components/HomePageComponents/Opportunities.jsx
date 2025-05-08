import { useState, useEffect } from "react";
import boat from "/assets/boat.png";
import box from "/assets/box.png";
import logotype from "/assets/logotype.png";
import plane from "/assets/plane.png";
import { Link } from "react-router-dom";

const Opportunities = () => {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1200
	);

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
				<div className="relative w-full flex justify-center items-center py-10">
					{/* Background Glow */}
					<div className="absolute -inset-6 w-full opacity-50  max-w-xl mx-auto h-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 blur-xl rounded-3xl z-0"></div>

					{/* Glassmorphic Card */}
					<div className="relative -z-0 bg-blue-100/100 backdrop-blur-3xl mb-10 rounded-2xl p-10 text-center">
						<div>
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
								<span>Stärken Sie Ihr Geschäft mit globaler </span>
								<span>Reichweite.</span>
							</h1>
							<Link to="/kontaktieren">
								<button className="bg-primary hover:bg-blue-700 cursor-pointer rounded-xl px-6 py-2.5 mt-4 text-base md:text-lg text-white transition-colors">
									Kontaktieren Sie uns jetzt
								</button>
							</Link>
						</div>
					</div>
				</div>
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
