const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Skipton&appid=b8656f4827a8f597f04278ed574ffd6c&units=imperial";

const tempValue = document.querySelector(".temperature span");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDescription = document.querySelector(".weather-type");
const speedValue = document.querySelector(".speed-value span");
const chillValue = document.querySelector(".chill-value");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const temperatureF = `${weatherData.main.temp}`;
  const temperatureC = ((temperatureF - 32) * 5) / 9;
  tempValue.innerHTML = `${temperatureC.toFixed(0)}`;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed.toFixed(1);
  const windChill = calculateWindChill(temperatureF, windSpeed);

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  weatherDescription.textContent = desc;
  speedValue.textContent = windSpeed;
  chillValue.innerHTML = windChill;
}

// Compute the wind chill value
function calculateWindChill(temperatureF, windSpeed) {
  if ((temperatureF <= 50) & (windSpeed > 3)) {
    // Wind chill in Fahrenheit
    const windChillF = Math.round(
      35.74 +
        0.6215 * temperatureF -
        35.75 * windSpeed ** 0.16 +
        0.4275 * temperatureF * windSpeed ** 0.16
    );
    // Wind chill in degrees Celsius
    const windChillC = Math.round(((windChillF - 32) * 5) / 9);
    return `<span>${windChillC}</span>&#8451;`;
  } else {
    return "N/A";
  }
}

apiFetch();
