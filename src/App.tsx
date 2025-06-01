import "./App.css";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
      <div>
        <SideBar />
        <div className="sm:ml-60 p-4">
          <Outlet />
          <Footer />
        </div>
      </div>
  );
}

export default App;
