import React, { useContext } from "react";
import styles from "./WeatherDisplay.module.css";
import { WeatherContext } from "./WeatherContext";

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    weatherData && (
      <div className={styles.container}>
        <h2>{weatherData.name}</h2>
        <p className={styles.temperature}>Temperature: {weatherData.main.temp}°C</p>
        <p className={styles.condition}>Condition: {weatherData.weather[0].description}</p>
      </div>
    )
  );
};

export default WeatherDisplay;
