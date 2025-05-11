const input = document.querySelector(".input-box");
const Serach = document.querySelector(".btn");
const Error = document.querySelector(".error");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherInfo = document.querySelector(".weather-info");

let userInput = "";
Serach.addEventListener("click", () => {
  console.log(input.value);
  userInput = input.value;
  if (input.value == "") {
    Error.textContent = "Please Enter City Name";
    weatherInfo.style.display = "none";
    Error.style.display = "block";
  } else {
    Error.textContent = "Invalid Input";
    Error.style.display = "none";
    getWeatherData(userInput);
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    Serach.click();
  }
});

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "your rapid api key",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const getWeatherData = async (location) => {
  console.log(Error);
  try {
    const response = await fetch(`${url}${location}`, options);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      const loc = result.location;
      const current = result.current;
      console.log(loc.name.toLowerCase(), userInput.toLowerCase());
      if (loc.name.toLowerCase() === userInput.toLowerCase()) {
        weatherInfo.style.display = "block";
        switch (current.condition.text.trim("")) {
          case "Clear":
            console.log(current.condition.text);
            weatherImg.src = "./images/clear.png";
            break;
          case "Overcast":
            weatherImg.src = "./images/clouds.png";
            break;
          case "Moderate or heavy rain with thunder":
            weatherImg.src = "./images/mist.png";
            break;
          case "Patchy heavy snow":
            weatherImg.src = "./images/rain.png";
            break;
          default:
            weatherImg.src = "./images/Default.png";
            break;
        }
        city.textContent = `${loc.name}`;
        temp.textContent = `${Math.round(current.temp_c)}°c`;
        humidity.textContent = `${current.humidity}%`;
        wind.textContent = `${Math.round(current.wind_kph)}km/h`;
        console.log(
          loc.name,
          current.wind_kph,
          current.humidity,
          current.condition.text
        );
        Error.style.display = "none";
        weatherInfo.style.display = "block";
      } else {
        Error.style.display = "block";
        weatherInfo.style.display = "none";
      }
    } else {
      Error.style.display = "block";
      weatherInfo.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  }
};
