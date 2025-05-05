import worldmap from "/assets/world-map.png";

export const Contact = () => {
  return (
    <div className="bg-secondary p-10 mt-20 rounded-md">
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-10">
        <p>Get A Shipping Quote</p>
        <p>
          To <span className="text-blue-600 font-bold">Get Started!</span>
        </p>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mx-10">
        {/* Form Section */}
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Name *"
            className="p-3 border rounded-md outline-none bg-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-md outline-none bg-white"
          />
          <input
            type="tel"
            placeholder="Phone number *"
            className="p-3 border rounded-md outline-none bg-white"
            required
          />
          <select
            className="p-3 border rounded-md outline-none bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              What Are You Interested In?
            </option>
            <option value="shipping">Shipping</option>
            <option value="tracking">Tracking</option>
            <option value="support">Customer Support</option>
          </select>
          <button
            type="submit"
            className="bg-blue-800 text-white py-3 rounded-full font-semibold hover:bg-blue-900 transition"
          >
            SEND
          </button>
        </form>

        {/* World Map Section */}
        <img src={worldmap} alt="world map" className="" />
      </div>
    </div>
  );
};
