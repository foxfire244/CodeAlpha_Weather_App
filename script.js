
const apiKey = "1c2c31febf95eae2902c9b898fd609e2";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;

      resultDiv.innerHTML = `
        <h2>${name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
        <p><strong>${temp}°C</strong></p>
        <p>${desc}</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = "<p>City not found. Please try again.</p>";
    });
}
