import { useEffect, useState } from "react";
import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/shared/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { FaAngleDoubleUp } from "react-icons/fa";

const App = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScrollToTop = () => {
		const scrollStep = window.scrollY / 20;
		const scrollAnimation = () => {
			const currentScroll = window.scrollY;
			if (currentScroll > 0) {
				window.scrollTo(0, Math.max(currentScroll - scrollStep, 0));
				requestAnimationFrame(scrollAnimation);
			}
		};
		requestAnimationFrame(scrollAnimation);
	};

	return (
		<div className="font-inter max-w-[1350px] mx-auto">
			<Navbar />
			<div className="pt-0">
				<Outlet />
				{showScrollButton && (
					<div
						onClick={handleScrollToTop}
						className="fixed bottom-5 right-5 cursor-pointer bg-primary border-2 border-white p-3 rounded-full shadow-lg hover:bg-info hover:shadow-2xl transition-all duration-300"
					>
						<FaAngleDoubleUp className="text-2xl text-white" />
					</div>
				)}
			</div>
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default App;
