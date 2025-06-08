import "./App.css";
import SideBar from "./components/Layouts/SideBar";
import Footer from "./components/Layouts/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import { ScrollToTop } from "./components/ScrollEffect";
import TopNavBar from "./components/Layouts/TopNavBar";

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
