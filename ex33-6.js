const weatherData = {
    "Hà Nội": {
      temperature: 25,
      humidity: 70,
      windSpeed: 5,
      description: "Có mây",
      icon: "☁️",
    },
    "Hồ Chí Minh": {
      temperature: 32,
      humidity: 75,
      windSpeed: 7,
      description: "Nắng",
      icon: "☀️",
    },
    "Đà Nẵng": {
      temperature: 28,
      humidity: 82,
      windSpeed: 12,
      description: "Mưa rào",
      icon: "🌧️",
    },
  };

  function searchWeather() {
    const input = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    const normalizedInput = input.toLowerCase();

    let foundCity = null;
    for (let city in weatherData) {
      if (city.toLowerCase() === normalizedInput) {
        foundCity = weatherData[city];
        displayWeather(city, foundCity);
        return;
      }
    }

    displayError("Không tìm thấy thông tin thời tiết cho thành phố này.");
  }

  function displayWeather(city, data) {
    const resultDiv = document.getElementById("result");

    const html = `
    <div class="weather-card">
      <div class="weather-content">
        <div class="left">
          <h2>${city}</h2>
          <div class="icon">${data.icon}</div>
          <div class="temperature">${data.temperature}°C</div>
        </div>
        <div class="right">
          <p><strong>${data.description}</strong></p>
          <p>Độ ẩm: ${data.humidity}%</p>
          <p>Tốc độ gió: ${data.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  `;

    resultDiv.innerHTML = html;
  }

  function displayError(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
  }
