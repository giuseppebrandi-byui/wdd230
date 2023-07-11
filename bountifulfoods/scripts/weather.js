const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=17&appid=b8656f4827a8f597f04278ed574ffd6c&units=imperial";

const weatherSection = document.querySelector(".weather");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      showWeatherdata(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function showWeatherdata(data) {
  let otherDaysForecast = "";

  data.list.forEach((day, idx) => {
    if (idx === 0 || idx === 8 || idx === 16) {
      otherDaysForecast += `<div class="inner-card">
                          <h3 class="card-title">${window
                            .moment(day.dt * 1000)
                            .format("ddd")}</h3>
                          <div class="weather-details">
                            <picture>
                              <img
                                class="weather-icon"
                                src="https://openweathermap.org/img/wn/${
                                  day.weather[0].icon
                                }@4x.png"
                                alt="overcast clouds"
                              />
                            </picture>
                            <h4 class="temperature">${day.main.temp.toFixed(
                              0
                            )}&#8457;</h4>
                          </div>
                          <p class="weather-type">${
                            day.weather[0].description
                          }</p>
                          <div class="speed">
                            <p>Wind Speed:</p>
                            <p class="speed-value"><span>${day.wind.speed.toFixed(
                              1
                            )}</span> mph</p>
                          </div>
                          <div class="humidity">
                            <p>Humidity:</p>
                            <p class="humidity-value"><span>${
                              day.main.humidity
                            }</span>%</p>
                          </div>
                        </div>`;
    }
  });

  weatherSection.innerHTML = otherDaysForecast;
}
