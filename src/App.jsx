import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
