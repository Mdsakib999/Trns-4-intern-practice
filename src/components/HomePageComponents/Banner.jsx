import bannerImage from "/assets/bannerImage.jpg";

const Banner = () => {
	return (
		<div className="relative w-full">
			{/* Banner Image */}
			<img
				data-aos="zoom-in"
				src={bannerImage}
				alt="Banner"
				className="w-full object-cover"
			/>

			{/* Dark overlay only for small devices */}
			<div className="absolute inset-0 bg-black/40 lg:bg-transparent" />

			{/* Text over image */}
			<div
				// data-aos="fade-up"
				className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center w-full px-4 md:top-32"
			>
				<h1 className="text-xl max-w-3xl mx-auto md:text-5xl font-semibold font-inter drop-shadow-md leading-5 md:leading-13 text-white lg:text-black">
					<span>Logistik, die sich anpasst. </span>
					<span>
						Fracht, die liefert. Denn Standardlösungen passen nicht immer.
					</span>
				</h1>
			</div>
		</div>
	);
};

export default Banner;
