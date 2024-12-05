// Whole-script strict mode syntax
"use strict";

const DEFAULT_CITY = "Seattle";

const state = {
  currentTemp: 50,
  currentCity: "Seattle",
  currentSky: "Sunny"
};

document.getElementById("tempValue").innerText = state.currentTemp;

const initTempColor = () => {
  document.getElementById('tempValue').style.color = findTempColorStyle();
}

const increaseTemp = () => {
  state.currentTemp += 1;
  document.getElementById("tempValue").innerText = state.currentTemp;
  initTempColor();
  initLandscape();
}

const decreaseTemp = () => {
  state.currentTemp -= 1;
  document.getElementById("tempValue").innerText = state.currentTemp;
  initTempColor();
  initLandscape();
}

const findTempColorStyle = () => {
  if (state.currentTemp <= 49) {
    return tempColorStyleDictionary[49];
  } else if (state.currentTemp >= 50 && state.currentTemp <= 59) {
    return tempColorStyleDictionary[50];
  } else if (state.currentTemp >= 60 && state.currentTemp <= 69) {
    return tempColorStyleDictionary[60];
  } else if (state.currentTemp >= 70 && state.currentTemp <= 79) {
    return tempColorStyleDictionary[70];
  } else {
    return tempColorStyleDictionary[80];
  }
}

const initLandscape = () => {
  document.getElementById('landscape').innerText = findLandscapeStyle();
}

const findLandscapeStyle = () => {
  if (state.currentTemp <= 49) {
    return landscapeDictionary[49];
  } else if (state.currentTemp >= 50 && state.currentTemp <= 59) {
    return landscapeDictionary[50];
  } else if (state.currentTemp >= 60 && state.currentTemp <= 69) {
    return landscapeDictionary[60];
  } else if (state.currentTemp >= 70 && state.currentTemp <= 79) {
    return landscapeDictionary[70];
  } else {
    return landscapeDictionary[80];
  }
}

const tempColorStyleDictionary = {
  49: "teal",
  50: "green",
  60: "yellow",
  70: "orange",
  80: "red",
};

const landscapeDictionary = {
  49: "🌲⛄️⛄️🌲⛄️⛄️🌲🍁🌲⛄️⛄️🍂🌲",
  50: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
  60: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
  70: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
  80: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
};

const skiesDictionary = {
  Sunny: "☁️ 🕊   ☀️ ☁️  🦅 ☁️",
  Haze: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Cloudy: "☁️ ☁️ ☁️ 🌤 ☁️ ☁️ ☁️",
  Rainy: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
  Snowy: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
};

const skiesColorDictionary = {
  Sunny: "rgb(221, 255, 255)",
  Haze: "yellowgreen",
  Cloudy: "lightgrey",
  Rainy: "lightblue",
  Snowy: "lightsteelblue",
};

// const skiesStyleDictionary = {
//   Sunny: "sunny",
//   Haze: "haze",
//   Cloudy: "cloudy",
//   Rainy: "rainy",
//   Snowy: "snowy",
// };

// const openWeatherConditions = {
//   ThunderStorm: "⛈⛈⛈⛈⛈⛈⛈⛈⛈⛈⛈",
//   Rain: "🌧🌈⛈🌧🌧💧💧🌧🌦🌧💧🌧🌧",
//   Drizzle: "🌧🌈🌧🌧🌧🌦🌧🌧🌈🌧☁️☁️",
//   Snow: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
//   Mist: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Smoke: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Haze: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Dust: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Fog: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Sand: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Ash: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
//   Squall: "🌨⛈🌧🌨⛈🌧🌨⛈🌧",
//   Tornado: "🌪⛈⛈🌪⛈⛈🌪⛈⛈",
//   Clear: "         ☀️   🕊       ",
//   Cloudy: "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️",
// };

const initDefaultCity = () => {
  state.currentCity = DEFAULT_CITY;
  document.getElementById("cityNameInput").value = state.currentCity;
  document.getElementById("headerCityName").innerText = state.currentCity;
}

const updateCityValue = () => {
  state.currentCity = document.getElementById("cityNameInput").value;
  document.getElementById("headerCityName").innerText = state.currentCity;
}

const findGardenContentColor = () => {
  return skiesColorDictionary[state.currentSky];
}

const updateSky = () => {
  state.currentSky = document.getElementById("skySelect").value;
  document.getElementById("sky").innerText = skiesDictionary[state.currentSky];
  document.getElementById("gardenContent").style.backgroundColor = findGardenContentColor();
}

const registerEventHandlers = () => {
  const increaseTempControl = document.getElementById("increaseTempControl");
  increaseTempControl.addEventListener("click", increaseTemp);

  const decreaseTempControl = document.getElementById("decreaseTempControl");
  decreaseTempControl.addEventListener("click", decreaseTemp);

  const cityNameInput = document.getElementById("cityNameInput");
  cityNameInput.addEventListener("input", updateCityValue);

  const cityNameReset = document.getElementById("cityNameReset");
  cityNameReset.addEventListener("click", initDefaultCity);

  const skySelect = document.getElementById("skySelect");
  skySelect.addEventListener("change", updateSky);

};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tempValue").innerText = state.currentTemp;
  document.getElementById("cityNameInput").value = state.currentCity;
  document.getElementById("headerCityName").innerText = state.currentCity;
  document.getElementById("sky").innerText = skiesDictionary[state.currentSky];
  document.getElementById("gardenContent").style.backgroundColor = findGardenContentColor();

  initTempColor();
  initLandscape();
  registerEventHandlers();
});
