// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: 'What is your project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write an description explaining the what, why, and how of your project.',
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
        message: 'Please specify the tests done for this project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license you used for this project.',
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
        message: 'What e-mail address should the users reach out for questions?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try{
        fs.writeFileSync(`README_${fileName.trim().toLowerCase().replace(/\s+/g, '-')}.md`, data);
        console.log(`README_${fileName.trim().toLowerCase().replace(/\s+/g, '-')}.md have been successfuly created.`);
    } catch (err) {
        console.log(err)
    }
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    const READMEcontent = generateMarkdown(answers);
    writeToFile(answers.fileName, READMEcontent);
}

// Function call to initialize app
init();
