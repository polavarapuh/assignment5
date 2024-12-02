import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay.js";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
};

export default App;
