import { useState, createContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Hero from "./Pages/Hero";
import type { MovieQueryParams, MyContextType } from "./types/movieQueryParams";
import Footer from "./components/Footer";

export const ParamContext = createContext<MyContextType>({
  params: {},
  setParams: () => {},
});
function App() {
  const [params, setParams] = useState<MovieQueryParams>({
    list: "most_pop_series",
  });
  return (
    <ParamContext.Provider value={{ params, setParams }}>
      <div>
        <SideBar />
        <div className="sm:ml-60 p-4">
          <Hero />
          <Footer />
        </div>
      </div>
    </ParamContext.Provider>
  );
}

export default App;
