import axios from 'axios';
import chalk from 'chalk';
import dayjs from 'dayjs';  // Import dayjs

// Function to fetch weather data from wttr.in
async function fetchWeather() {
  try {
    const response = await axios.get('https://wttr.in/gdansk?format=3'); // Simple format for concise output
    console.log(chalk.blue(`Weather in Gdansk: ${response.data}`));  // Display weather
  } catch (error) {
    console.error(chalk.red("Error fetching weather data:"), error);
  }
}

// Use dayjs to display the current date and time
console.log(chalk.yellow(`Current date and time: ${dayjs().format()}`));

// Fetch the weather data
fetchWeather();
