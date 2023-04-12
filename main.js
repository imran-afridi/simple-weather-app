import "./style.css";
console.clear()
const apiKey = "6cc3d1ded8744f528f903831231204";

const form = document.querySelector("form");
const input = document.getElementById("inputVal");

let getData = async () => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`
    );
    const data = await response.json();
    const location = document.getElementById("location"); 
    const temp = document.getElementById("temperature");
    const iconDiv = document.getElementById("iconDiv");
    const condition = document.getElementById("condition");
    const wind = document.getElementById("wind");
    const dayNight = document.getElementById("dayNight");
    const temp_f = document.getElementById("temp_f");

    location.innerHTML = `${data.location.name} , ${data.location.country}`;
    iconDiv.innerHTML = `<img src="${data.current.condition.icon}" alt="icon" class="absolute top-6 md:t  right-3 w-10 ">`;
    temp.innerHTML = `${data.current.temp_c}°C`;
    condition.innerHTML = `${data.current.condition.text}`;
    wind.innerHTML = `${data.current.wind_kph} km/h`;
    dayNight.innerHTML = `${data.current.is_day === 1 ? "Day" : "Night"}`;
    temp_f.innerHTML = `${data.current.temp_f}°F`;

    console.log(data);
  } catch {
    console.log("Error");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    getData();
  }
});
