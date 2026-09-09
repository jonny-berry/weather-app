export function renderWeatherPage() {
  renderStripes();
}

function renderStripes() {
  const container = document.createElement('div');
  container.className = "stripes-container";
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
