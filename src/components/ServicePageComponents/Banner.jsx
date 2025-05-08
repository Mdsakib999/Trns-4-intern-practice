import ship from "/assets/shipSVG.png";
import parcel from "/assets/parcelSVG.png";
import airplane from "/assets/airplaneSVG.png";

export const Banner = () => {
	const cardItems = [
		{
			id: 1,
			name: "Seefracht",
			desc: "Flexible Seefrachtoptionen: FCL (Full Container Load), LCL (Less than Container Load), Stückgut und spezialisierte Ausstattungen. Wir sorgen für kostengünstigen und sicheren Transport weltweit, unterstützt durch unsere globalen Vereinbarungen mit Frachtführern.",
			image: ship,
		},
		{
			id: 2,
			name: "Straßentransport",
			desc: "Umfassende Straßentransportlösungen in Europa und darüber hinaus — von Sammelgut und Teilladungen bis hin zu Komplettladungen. Wir bieten temperaturgeführte Transporte, Gefahrgut- und Expresslieferungen.",
			image: parcel,
		},
		{
			id: 3,
			name: "Luftfracht",
			desc: "Schnelle, zuverlässige globale Luftfrachtlösungen, einschließlich zeitkritischer, express- und temperaturgeführter Sendungen. Wir übernehmen alles, von Konsolidierung bis hin zu Charterdiensten, mit vollständiger Sendungsverfolgung und Zollabfertigung.",
			image: airplane,
		},
	];

	return (
		<div className="px-4 md:px-10 max-w-7xl mx-auto pt-3">
			<h1 className="w-full mx-auto md:mx-0 text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-10">
				<span className="block">Entdecken Sie die Märkte, </span>
				<span className="block text-primary font-bold">
					die <span className="text-primary">wir bedienen</span>
				</span>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 justify-items-center my-10">
				{cardItems.map((cardItem) => (
					<div
						key={cardItem.id}
						className="w-full max-w-xs rounded-lg p-6 text-center hover:bg-secondary transition"
					>
						<div
							// data-aos="zoom-in"
							className="bg-primary rounded-md p-3 inline-block mb-4"
						>
							<img
								src={cardItem.image}
								alt={cardItem.name}
								className="w-20 h-20 object-contain"
							/>
						</div>
						<h2 className="text-primary text-lg font-bold mb-2">
							{cardItem.name}
						</h2>
						<p className="text-xs text-primary leading-snug">{cardItem.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};
