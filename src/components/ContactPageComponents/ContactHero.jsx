export const ContactHero = () => {
  return (
    <div className="bg-secondary px-4 sm:px-6 lg:px-10 py-16 lg:py-28">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10">
        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-center md:text-left">
            <p>Your Logistic Partner,</p>
            <p>
              <span className="text-primary font-bold">Ready to Assist</span>
            </p>
          </h1>
          <p className="max-w-md mx-auto md:mx-0 text-center md:text-left text-gray-600 opacity-70 text-base">
            has been offering comprehensive import and export services since
            2006, specializing in Eastern Europe. Trust in our tailor-made
            solutions for your transport needs.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/3">
          <form className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">
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
                How did you find us?
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
        </div>
      </div>
    </div>
  );
};
