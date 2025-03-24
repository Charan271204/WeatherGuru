async function searchWeather() {
    const apiKey = '7f2e22836d16ab0baed589479d12667c'; 
    const city = document.getElementById("city-input").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById("weather-info").style.display = "block";
            document.getElementById("temperature").innerText = `${data.main.temp}°C`;
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("humidity").innerText = data.main.humidity;
            document.getElementById("wind-speed").innerText = data.wind.speed;
            
            const weatherIcon = document.getElementById("weather-icon");
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "assets/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "assets/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "assets/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "assets/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "assets/mist.png";
            } else {
                weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            }
        } else {
            alert("City not found");
        }
    } catch (error) {
        alert("Error fetching weather data");
    }
}