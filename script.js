async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "4ed53d7394dc15110b5ae7b24e9dd164"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const result = `
      <h2>${data.name}</h2>
      <p>${data.weather[0].main}</p>
      <p>🌡️ ${data.main.temp} °C</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } else {
    document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
  }
}
 document.getElementById("cityInput").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        getWeather();
      }
    });