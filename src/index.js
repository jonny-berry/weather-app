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

const data = await fetchWeatherData("paris");

function parseWeatherData(weatherData) {
  const address = weatherData.address;
  const temp = weatherData.currentConditions.temp;
  const condition = weatherData.currentConditions.conditions;
  const date = weatherData.days[0].datetime;
  const time = weatherData.currentConditions.datetime;
  const description = weatherData.description;
  const hourlyTemps = weatherData.days[0].hours;
  const dailyTemps = weatherData.days;

  return {
    address,
    temp,
    condition,
    date,
    time,
    description,
    hourlyTemps,
    dailyTemps,
  };
}

parseWeatherData(data);
