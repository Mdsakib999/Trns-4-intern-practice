import ship from "/assets/shipSVG.png";
import parcel from "/assets/parcelSVG.png";
import airplane from "/assets/airplaneSVG.png";

export const Banner = () => {
  const cardItems = [
    {
      id: 1,
      name: "CARRYING THE LOAD",
      desc: "Free Download Cargo Crate SVG vector file in monocolor and multicolor type for Sketch and Figma from Cargo Crate Vectors svg vector collection. Cargo Crate Vectors SVG vector illustratio",
      image: ship,
    },
    {
      id: 2,
      name: "CARRYING THE LOAD",
      desc: "Free Download Cargo Crate SVG vector file in monocolor and multicolor type for Sketch and Figma from Cargo Crate Vectors svg vector collection. Cargo Crate Vectors SVG vector illustratio",
      image: parcel,
    },
    {
      id: 3,
      name: "CARRYING THE LOAD",
      desc: "Free Download Cargo Crate SVG vector file in monocolor and multicolor type for Sketch and Figma from Cargo Crate Vectors svg vector collection. Cargo Crate Vectors SVG vector illustratio",
      image: airplane,
    },
  ];

  return (
    <div>
      <h1 className="text-6xl font-semibold">
        <p>Learn More About the</p>
        <p>
          Segments <span className="text-primary">We Serve</span>{" "}
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 justify-items-center my-10">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="w-80 rounded-lg  p-6 text-center hover:bg-secondary"
          >
            <div className="bg-primary rounded-md p-3 inline-block mb-4">
              <img
                src={cardItem.image}
                alt={cardItem.name}
                className="w-24 h-18"
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
