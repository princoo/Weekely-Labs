import { useEffect, useState,createContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Hero from "./Pages/Hero";
import type { MovieQueryParams, MyContextType } from "./types/movieQueryParams";


export const ParamContext = createContext<MyContextType | undefined>(undefined);
function App() {
  const [params, setParams] = useState<MovieQueryParams>({});
  return (
    <ParamContext.Provider value={{ params, setParams }}>
      <div>
        <SideBar />
        <div className="sm:ml-60 p-4">
          <Hero />
        </div>
      </div>
    </ParamContext.Provider>
  );
}

export default App;
