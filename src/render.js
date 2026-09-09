import pinIcon from "./icons/location-pin.svg";
import searchIcon from "./icons/search.svg";
import rainIcon from "./icons/weather/rain.svg";
import githubIcon from "./icons/github.svg";

export function renderWeatherPage() {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'weather-info-grid-container';

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content';

  renderWeatherStripes();
  document.body.appendChild(contentWrapper);
  renderToolbar(contentWrapper);
  renderTempDisplay(contentWrapper);
  contentWrapper.appendChild(gridContainer);
  renderWeatherGrid(gridContainer);
  renderFooter();
}

function renderWeatherStripes() {
  const container = document.createElement('div');
  container.className = "weather-stripes-container";
  document.body.appendChild(container);

  // Stripes are numbered from top to bottom
  const stripeOne = document.createElement('div');
  stripeOne.className = "stripe";
  container.appendChild(stripeOne);

  const stripeTwo = document.createElement('div');
  stripeTwo.className = "stripe";
  container.appendChild(stripeTwo);

  const stripeThree = document.createElement('div');
  stripeThree.className = "stripe";
  container.appendChild(stripeThree);

  const stripeFour = document.createElement('div');
  stripeFour.className = "stripe";
  container.appendChild(stripeFour);
}


function renderToolbar(contentWrapper) {
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  contentWrapper.appendChild(toolbar);
  
  const locationInfo = document.createElement('div');
  locationInfo.className = "location-info";
  toolbar.appendChild(locationInfo);
  
  const locationPin = document.createElement('img');
  locationPin.src = pinIcon;
  locationPin.className = "location-pin";
  locationInfo.appendChild(locationPin);

  const locationName = document.createElement('p');
  locationName.textContent = "Paris";
  locationInfo.appendChild(locationName);

  const searchBtn = document.createElement('button');
  searchBtn.className = "search-btn";

  const searchImg = document.createElement('img');
  searchImg.src = searchIcon;
  searchBtn.appendChild(searchImg);
  toolbar.appendChild(searchBtn);
}

function renderTempDisplay(contentWrapper) {
  const sectionContainer = document.createElement('div');
  sectionContainer.className = 'temp-display';
  contentWrapper.appendChild(sectionContainer);

  const currTemp = document.createElement('h1');
  currTemp.className = 'curr-temp';
  currTemp.textContent = '86';
  sectionContainer.appendChild(currTemp);

  const tempUnitContainer = document.createElement('div');
  tempUnitContainer.className = 'temp-unit-container';
  sectionContainer.appendChild(tempUnitContainer);

  const fahrenheit = document.createElement('button');
  fahrenheit.classList = 'temp-unit-btn active-temp-unit';
  fahrenheit.textContent = '°F'
  tempUnitContainer.appendChild(fahrenheit);

  const celsius = document.createElement('button');
  celsius.className = 'temp-unit-btn';
  celsius.textContent = '°C'
  tempUnitContainer.appendChild(celsius);
}

function renderWeatherGrid(gridContainer) {
  renderWeatherSummary(gridContainer);
  renderDescription(gridContainer);
  renderHourlyForecast(gridContainer);
  renderDailyForecast(gridContainer);
}

function renderWeatherSummary(gridContainer) {
  const summaryCard = document.createElement('div');
  summaryCard.className = 'weather-summary card';
  gridContainer.appendChild(summaryCard);

  const currCondition = document.createElement('div');
  currCondition.className = 'curr-condition';
  currCondition.textContent = 'Rainy';
  summaryCard.appendChild(currCondition);

  const date = document.createElement('div');
  date.className = 'date';
  date.textContent = '7/17/26';
  summaryCard.appendChild(date);

  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = '2:26PM';
  summaryCard.appendChild(time);
}

function renderDescription(gridContainer) {
  const descriptionContainer = document.createElement('div');
  descriptionContainer.className = 'description-container card';
  gridContainer.appendChild(descriptionContainer);

  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = 'Rainy conditions will continue for the rest of the day. Wind gusts are up to 13 mph.';
  descriptionContainer.appendChild(description);
}

function renderHourlyForecast(contentWrapper) {
  const hourlyForecastCard = document.createElement('div');
  hourlyForecastCard.className = 'hourly-forecast card';
  contentWrapper.appendChild(hourlyForecastCard);

  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'hourly-forecast-tabs';
  hourlyForecastCard.appendChild(tabsContainer);

  const temperatureTab = document.createElement('p');
  temperatureTab.className = 'active-hourly-forecast-tab';
  temperatureTab.textContent = 'Temperature';
  tabsContainer.appendChild(temperatureTab);

  const precipitationTab = document.createElement('p');
  precipitationTab.textContent = 'Precipitation';
  tabsContainer.appendChild(precipitationTab);

  const windTab = document.createElement('p');
  windTab.textContent = 'Wind';
  tabsContainer.appendChild(windTab);

  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'hourly-temps-container';
  hourlyForecastCard.appendChild(itemsContainer);

  for (let i = 0; i < 4; i++) {
    renderHourlyForecastItem(itemsContainer, 'Now', rainIcon, '86°');
  }
}

function renderHourlyForecastItem(itemsContainer, time, icon, temp) {
  const item = document.createElement('div');
  item.className = 'hourly-temps-item';
  itemsContainer.appendChild(item);

  const timeLabel = document.createElement('p');
  timeLabel.textContent = time;
  item.appendChild(timeLabel);

  const iconImg = document.createElement('img');
  iconImg.src = icon;
  iconImg.className = 'hourly-temps-icon';
  item.appendChild(iconImg);

  const tempLabel = document.createElement('p');
  tempLabel.textContent = temp;
  item.appendChild(tempLabel);
}

function renderDailyForecast(contentWrapper) {
  const dailyForecastContainer = document.createElement('div');
  dailyForecastContainer.className = 'daily-forecasts';
  contentWrapper.appendChild(dailyForecastContainer);

  for (let i = 0; i < 4; i++) {
    renderDailyForecastItem(dailyForecastContainer, 'Fri', rainIcon, '89°- 74°', i === 0);
  }
}

function renderDailyForecastItem(dailyForecastContainer, day, icon, range, isActive) {
  const item = document.createElement('div');
  item.className = isActive ? 'daily-forecast-item active-daily-item' : 'daily-forecast-item';
  dailyForecastContainer.appendChild(item);

  const dayLabel = document.createElement('p');
  dayLabel.textContent = day;
  item.appendChild(dayLabel);

  const iconImg = document.createElement('img');
  iconImg.src = icon;
  iconImg.className = 'daily-forecast-icon';
  item.appendChild(iconImg);

  const rangeLabel = document.createElement('p');
  rangeLabel.textContent = range;
  item.appendChild(rangeLabel);
}

function renderFooter() {
  const footer = document.createElement('footer');
  document.body.appendChild(footer);

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/jonny-berry';
  githubLink.target = '_blank';
  footer.appendChild(githubLink);

  const githubBtn = document.createElement('button');
  githubBtn.className = 'github-logo';
  githubLink.appendChild(githubBtn);

  const githubImg = document.createElement('img');
  githubImg.src = githubIcon;
  githubBtn.appendChild(githubImg);
}
