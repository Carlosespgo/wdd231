const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const descIcon = document.querySelector('#desc');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.60&lon=-74.08&units=imperial&appid=96cfb7bf0b99b21455531b96d5cc0342';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);

function formatTime(time) {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true});
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    descIcon.innerHTML = `${desc}`;
    highTemp.innerHTML = `${data.main.temp_max}&deg;`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg;`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sunrise.innerHTML = formatTime(data.sys.sunrise);
    sunset.innerHTML = formatTime(data.sys.sunset);
}