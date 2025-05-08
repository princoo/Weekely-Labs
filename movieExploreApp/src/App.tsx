import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Hero from "./Pages/Hero";

function App() {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    headers: {
      "x-rapidapi-key": "57b0c6db8bmshecd03976b70a852p1f3f6ajsn44258b583e39",
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   if (dataLoaded) return;

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setDataLoaded(true);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [dataLoaded]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <SideBar />
      <div className="sm:ml-60 p-4">
      <TopBar />
      <Hero />
      </div>
    </div>
  );
}

export default App;
