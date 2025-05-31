// import { useState, createContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
// import Hero from "./Pages/Hero";
// import type { MovieQueryParams, MyContextType } from "./types/movieQueryParams";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

// export const paramContext = createContext<MyContextType>({
//   params: {},
//   setParams: () => {},
// });
function App() {
  // const [params, setParams] = useState<MovieQueryParams>({
  //   list: "top_boxoffice_200",
  //   info: "base_info",
  // });

  return (
    // <paramContext.Provider value={{ params, setParams }}>
      <div>
        <SideBar />
        <div className="sm:ml-60 p-4">
          <Outlet />
          <Footer />
        </div>
      </div>
    // </paramContext.Provider>
  );
}

export default App;
