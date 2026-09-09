import pinIcon from "./icons/location-pin.svg";
import searchIcon from "./icons/search.svg";

export function renderWeatherPage() {
  renderWeatherStripes();

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content';
  document.body.appendChild(contentWrapper);

  renderToolbar(contentWrapper);
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