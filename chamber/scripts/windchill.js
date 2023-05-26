const speedValue = document.querySelector(".speed-value span");
const tempValue = document.querySelector(".temperature span");
const chillValue = document.querySelector(".chill-value");

const temperatureF = 30;
const temperatureC = Math.round(((temperatureF - 32) * 5) / 9);
const windSpeed = 5;

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

// Invoke calculateWindChill function and pass temperatureF and windspeed
const windChill = calculateWindChill(temperatureF, windSpeed);
speedValue.textContent = windSpeed;
tempValue.textContent = temperatureC;
chillValue.innerHTML = windChill;
