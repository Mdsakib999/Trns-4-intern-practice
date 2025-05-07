import { MdOutlineArrowOutward } from "react-icons/md";
import cardbox from "/assets/cardboard.png";

export const CustomClearance = () => {
	return (
		<div className="my-10 flex items-center justify-center px-4 md:px-8">
			<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 max-w-7xl w-full">
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-2xl md:text-3xl font-semibold">
						Zollabfertigung
					</h1>
					<p className="text-sm mt-5 md:w-4/5 mx-auto md:mx-0">
						TTOIL bietet zuverlässige und effiziente Zollabfertigungsdienste in
						den VAE, der Türkei, Aserbaidschan, Russland, der Ukraine, Georgien,
						Kasachstan, Turkmenistan sowie in weiteren GUS- und
						zentralasiatischen Ländern. Unser erfahrenes Team sorgt für die
						vollständige Einhaltung lokaler Vorschriften und ermöglicht einen
						reibungslosen grenzüberschreitenden Warenverkehr bei minimalen
						Verzögerungen.
					</p>

					<button className="btn mt-5 flex items-center gap-2 mx-auto md:mx-0">
						Learn More <MdOutlineArrowOutward />
					</button>
				</div>

				<div className="w-full md:w-1/2 flex justify-center relative">
					<div
						data-aos="fade-up"
						className="bg-secondary w-64 sm:w-72 md:w-80 h-52 sm:h-60 rounded-xl flex items-center justify-center"
					>
						<img
							src={cardbox}
							alt="Cardboard Boxes"
							className="max-w-full h-auto object-contain relative top-7"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
