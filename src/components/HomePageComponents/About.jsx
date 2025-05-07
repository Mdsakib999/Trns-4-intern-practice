import cargo from "/assets/cargo.png";

const About = () => {
	return (
		<section className="flex flex-col md:flex-row items-center justify-between mt-16 px-4 md:px-10">
			{/* Text Section */}
			<div
				data-aos="zoom-in"
				className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left"
			>
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
					<span className="tracking-wide block">
						Nahtlose Logistik für eine
					</span>
					<span className="block">
						a <span className="text-primary">grenzenlose Welt</span>
					</span>
				</h1>

				<div className="space-y-3">
					<h2 className="text-lg sm:text-xl font-bold">
						Über Unser Unternehmen
					</h2>
					<p className="text-sm sm:text-base max-w-md md:max-w-lg mx-auto md:mx-0">
						ECML Logistics ist ein dynamisches Logistik- und
						Speditionsunternehmen, das sich auf nahtlose, effiziente und
						maßgeschneiderte Supply-Chain-Lösungen spezialisiert hat. Mit einem
						globalen Netzwerk und einem kundenorientierten Ansatz gewährleisten
						wir die pünktliche und sichere Lieferung von Waren in verschiedenste
						Branchen.
					</p>
				</div>
			</div>

			{/* Image Section */}
			<div
				data-aos="zoom-in"
				className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center"
			>
				{/* Background Gradient (shorter) */}
				<div
					className="absolute top-0 w-full h-[250px] sm:h-[300px] lg:h-[400px] z-0"
					style={{
						backgroundImage:
							"linear-gradient(to right, transparent 20%, #bfdbfe 100%)",
					}}
				/>
				<img
					className="relative z-0 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none object-contain lg:h-[500px] xl:h-[600px]  -mb-10 lg:-mb-24"
					src={cargo}
					alt="Cargo illustration"
				/>
			</div>
		</section>
	);
};

export default About;
