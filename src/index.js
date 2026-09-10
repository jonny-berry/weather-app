import "./styles.css";
import { renderWeatherPage } from "./render.js";
import { parseWeatherData, weatherData } from "./api.js";

parseWeatherData(weatherData);
renderWeatherPage();
