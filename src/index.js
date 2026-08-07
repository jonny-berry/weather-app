async function fetchWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5LH3P3XXFNEJXGXWFJS9PWR5M`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
