import inverted from "/assets/inverted.png";
import star from "/assets/star.png";

const reviews = [
	{
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
		userName: "John M.",
		companyName: "Supply Chain Manager",
		content:
			"Wir arbeiten nun seit einem Jahr mit ECML Logistics zusammen und sind mehr als zufrieden mit ihrem Service. Sie bieten effiziente und zuverlässige Lösungen für unsere Versandanforderungen in verschiedenen Regionen. Ob Luft-, See- oder Straßentransport – sie liefern immer pünktlich. Ihr Kundenserviceteam ist stets erreichbar und hilfsbereit!",
		stars: 5,
	},
	{
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
		userName: "Michael P.",
		companyName: "Logistics Manager",
		content:
			"Wir nutzen nun seit über zwei Jahren ECML Logistics für all unsere Sendungen, und sie haben uns nie im Stich gelassen. Ihre Liebe zum Detail und ihre Fähigkeit, komplexe Logistikherausforderungen zu meistern, heben sie von der Konkurrenz ab.",
		stars: 5,
	},
	{
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
		userName: "Sarah L.",
		companyName: "Operations Director",
		content:
			"ECML Logistics hat die Art und Weise, wie wir unser Frachtmanagement betreiben, revolutioniert. Ihr Team ist proaktiv, und ihre Fähigkeit, maßgeschneiderte Lösungen zu bieten, ist außergewöhnlich. Vom Luftfrachttransport bis zur Zollabfertigung – sie machen den gesamten Prozess reibungslos und stressfrei. Wir können sie nur wärmstens empfehlen!",
		stars: 5,
	},
];

const Review = () => {
	return (
		<div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 mt-10">
			<div className="flex items-end gap-4 mb-10">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
					Erfolgsgeschichten unserer geschätzten
					<span className="text-primary"> Kunden</span>
				</h1>
				<div className="flex-1 h-px bg-gray-400"></div>
			</div>
			<div className="flex flex-wrap gap-6 justify-center ">
				{reviews.map((review, index) => (
					<div
						data-aos="flip-down"
						key={index}
						className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 text-white rounded-3xl p-12 shadow-lg"
					>
						<div className="flex items-center justify-between bg-gradient-to-r from-blue-700 rounded-full">
							<div className="flex items-center gap-3">
								<img
									className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
									src={review.imgUrl}
									alt="user"
								/>
								<div>
									<p className="font-semibold">{review.userName}</p>
									<p className="text-sm text-gray-300">{review.companyName}</p>
								</div>
							</div>
							<div className="hidden bg-white rounded-full w-10 h-10 lg:flex items-center justify-center p-2">
								<img src={inverted} alt="quote" className="w-5 h-5" />
							</div>
						</div>
						<p className="mt-4 text-xs tracking-widest">{review.content}</p>
						<div className="flex items-center space-x-1 mt-3">
							{Array.from({ length: review.stars }).map((_, idx) => (
								<img
									key={idx}
									src={star}
									alt="star"
									className="w-4 h-4 sm:w-5 sm:h-5"
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Review;
