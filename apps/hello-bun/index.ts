import axios from 'axios';
import chalk from 'chalk';

// Make an HTTP request using axios
axios.get('https://api.github.com/').then((response) => {
  console.log(chalk.green("Data fetched successfully!"));
  console.log(response.data);  // Output the fetched data
}).catch((error) => {
  console.log(chalk.red("An error occurred while fetching data."));
  console.error(error);
});

// Continue with a simple Hello World output
console.log(chalk.blue("Hello, World!"));
