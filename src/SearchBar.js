import React, { useContext, useState } from "react";
import styled from "styled-components";
import { WeatherContext } from "./WeatherContext";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 5px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

const SearchBar = () => {
  const { fetchWeather } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) fetchWeather(city);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
