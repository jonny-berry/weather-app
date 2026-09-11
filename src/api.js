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

let apiData = await fetchWeatherData("Paris");

function parseWeatherData(apiData) {
  const address = apiData.address;
  const temp = apiData.currentConditions.temp;
  const condition = apiData.currentConditions.conditions;
  const date = apiData.days[0].datetime;
  const time = apiData.currentConditions.datetime;
  const description = apiData.description;
  const hourlyTemps = apiData.days[0].hours;
  const dailyTemps = apiData.days;

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

export const weatherData = parseWeatherData(apiData);
