// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please specify contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please specify instructions for testing your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please specify instructions for testing your project.',
        choices: ['none', 'Apache 2.0', 'GNU v3.0', 'MIT'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return '
    '
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
