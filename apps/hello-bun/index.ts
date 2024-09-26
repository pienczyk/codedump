import axios from 'axios';
import chalk from 'chalk';

async function fetchWeather(city: string) {
    try {
        const response = await axios.get(`https://wttr.in/${city}?format=3`); // Fetch weather data
        console.log(chalk.green('Weather data fetched successfully:', response.data)); // Debug line
        return response.data;
    } catch (error) {
        console.error(chalk.red('Error fetching weather data:'), error);
        return null;
    }
}

async function displayWeather() {
    const weather = await fetchWeather('Gdansk'); // Fetch weather for Gdansk
    const appDiv = document.getElementById('app');

    if (appDiv) {
        if (weather) {
            appDiv.innerHTML = `<h1>Weather in Gdansk</h1><p>${weather}</p>`;
        } else {
            appDiv.innerHTML = `<h1>Error fetching weather data</h1>`;
        }
    } else {
        console.error(chalk.red('Element with ID "app" not found')); // Debug line
    }
}

displayWeather(); // Call the function to display the weather
