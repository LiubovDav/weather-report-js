// Whole-script strict mode syntax
"use strict";

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
    return tempColorDictionary[49];
  } else if (state.currentTemp >= 50 && state.currentTemp <= 59) {
    return tempColorDictionary[50];
  } else if (state.currentTemp >= 60 && state.currentTemp <= 69) {
    return tempColorDictionary[60];
  } else if (state.currentTemp >= 70 && state.currentTemp <= 79) {
    return tempColorDictionary[70];
  } else {
    return tempColorDictionary[80];
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

const tempColorDictionary = {
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

const openWeatherConditions = {
  ThunderStorm: "⛈⛈⛈⛈⛈⛈⛈⛈⛈⛈⛈",
  Rain: "🌧🌈⛈🌧🌧💧💧🌧🌦🌧💧🌧🌧",
  Drizzle: "🌧🌈🌧🌧🌧🌦🌧🌧🌈🌧☁️☁️",
  Snow: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
  Mist: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Smoke: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Haze: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Dust: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Fog: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Sand: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Ash: "🌫🌫🌫🌫🌫🌫🌫🌫🌫🌫",
  Squall: "🌨⛈🌧🌨⛈🌧🌨⛈🌧",
  Tornado: "🌪⛈⛈🌪⛈⛈🌪⛈⛈",
  Clear: "         ☀️   🕊       ",
  Cloudy: "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️",
};

const registerEventHandlers = () => {
  const increaseTempControl = document.getElementById("increaseTempControl");
  increaseTempControl.addEventListener("click", increaseTemp);

  const decreaseTempControl = document.getElementById("decreaseTempControl");
  decreaseTempControl.addEventListener("click", decreaseTemp);

  const cityInputUpdate = document.querySelector("cityNameInput");
  cityInputUpdate.addEventListener("input", updateCityValue)
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tempValue").innerText = state.currentTemp;
  document.getElementById("cityNameInput").value = state.currentCity;
  document.getElementById("headerCityName").innerText = state.currentCity;
  document.getElementById("sky").innerText = skiesDictionary[state.currentSky];

  initTempColor();
  initLandscape();
  registerEventHandlers();
});
