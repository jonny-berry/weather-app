import pinIcon from "./icons/location-pin.svg";
import searchIcon from "./icons/search.svg";

export function renderWeatherPage() {
  renderWeatherStripes();

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content';
  document.body.appendChild(contentWrapper);

  renderToolbar(contentWrapper);
  renderTempDisplay(contentWrapper);
  renderWeatherGrid(contentWrapper);
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

function renderWeatherGrid(contentWrapper) {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'weather-info-grid-container';
  contentWrapper.appendChild(gridContainer);

  renderWeatherSummary(gridContainer);
  renderDescription(gridContainer);
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
