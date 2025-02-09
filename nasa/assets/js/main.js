// predefined city names
const locations = ["Toronto", "Windsor", "Hamilton", "Thunder Bay"];

async function getWeatherData(city = "Toronto") {
    try {
        const apiKey = '41911928fa0447b794d20321250302';
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await response.json();

        console.log(data); // show in console

        // get weather details
        const temperature = data.current.temp_c;
        const weatherCondition = data.current.condition.text;
        const weatherIcon = `https:${data.current.condition.icon}`;

        // show weather section
        document.querySelector('#weather-info').innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>${weatherCondition}</p>
            <img src="${weatherIcon}" alt="${weatherCondition}">
            <p>Temperature:</p>
            <h2> ${temperature}°C</h2>
            
        `;

    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

// dropdown selection
document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('city-select').value;
    getWeatherData(city);
});

// load default city weather
document.addEventListener("DOMContentLoaded", () => {
    getWeatherData();
});
