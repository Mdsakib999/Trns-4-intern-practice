import locationIcon from "/assets/locationIcon.png";
import airplane from "/assets/airplane.png";
import worldbg from "/assets/world-map.png";
export const Location = () => {
  const Locations = [
    {
      id: 1,
      name: "North America Headquarters",
      icon: airplane,
      des: "Our central hub for freight operations across the U.S.,Canada, and Mexico, ensuring seamless cross-border logistics.",
    },
    {
      id: 2,
      name: "North America Headquarters",
      icon: airplane,
      des: "Our central hub for freight operations across the U.S.,Canada, and Mexico, ensuring seamless cross-border logistics.",
    },
    {
      id: 3,
      name: "North America Headquarters",
      icon: airplane,
      des: "Our central hub for freight operations across the U.S.,Canada, and Mexico, ensuring seamless cross-border logistics.",
    },
  ];
  const LocationPin = [
    {
      id: 1,
      top: "30%",
      left: "20%",
    },
    {
      id: 2,
      top: "55%",
      left: "53%",
    },
    {
      id: 3,
      top: "27%",
      left: "80%",
    },
  ];

  return (
    <div className="my-20">
      <div className="flex flex-col lg:flex-row justify-between py-10 px-4 sm:px-6 lg:px-10 gap-10">
        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-semibold">Location</h1>
          <div className="mt-10 flex flex-col gap-8">
            {Locations.map((location) => (
              <>
                <div key={location.id} className="flex gap-4 sm:gap-8">
                  <img
                    src={airplane}
                    alt=""
                    className="h-8 w-8 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2 sm:gap-4 w-full">
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {location.name}
                    </h2>
                    <p className="text-sm text-gray-600 w-1/2">
                      {location.des}
                    </p>
                  </div>
                </div>
                <div className="divider lg:w-2/3"></div>
              </>
            ))}
          </div>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={worldbg}
            alt="World Map Background"
            className="w-full h-auto object-contain"
          />
          {LocationPin.map((pin) => (
            <img
              key={pin.id}
              src={locationIcon}
              alt="Location Pin"
              className="absolute w-6 h-6"
              style={{
                top: pin.top,
                left: pin.left,
                transform: "translate(-50%, -100%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
