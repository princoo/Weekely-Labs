import "./App.css";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { ScrollToTop } from "./components/ScrollEffect";
import TopNavBar from "./components/TopNavBar";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <SideBar />
      <div className="sm:ml-60 p-4">
        <TopNavBar />

        <ScrollToTop />
        {isLoading ? <Loader /> : <Outlet />}
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
