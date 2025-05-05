import { MdOutlineArrowOutward } from "react-icons/md";
import cardbox from "/assets/cardboard.png";
export const CustomClearance = () => {
  return (
    <div className="my-10  flex items-center justify-center">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Custom Clearance</h1>
          <p className="text-sm mt-5 w-1/2">
            TTOIL operates in UAE, Turkey, Azerbaijan, Russia, Ukraine, Georgia,
            Kazakhstan, Turkmenistan and other CIS and Central Asian Countries.
          </p>

          <button className="btn  mt-5">
            Learn More <MdOutlineArrowOutward />
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-secondary w-80 h-60 rounded-xl absolute">
            <img
              src={cardbox}
              alt="Cardboard Boxes"
              className="max-w-xs object-contain -top-4 relative "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
