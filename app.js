
 
 async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '49cc8c821cd2aff9af04c9f98c36eb74';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const { name, main, weather } = data;
    weatherDiv.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity} %</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}
