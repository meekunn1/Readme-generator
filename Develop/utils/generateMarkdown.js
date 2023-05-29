// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (question.licenseBadge === 'Apache 2.0') {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({fileName, description, installation, usage, licenseBadge, contribution, tests, username, email}) {
  return `# ${fileName}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [SampleTitle](#sampletitle)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [How to Contribute](#how-to-contribute)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${licenseBadge}
  
  ## How to Contribute
  
  ${contribution}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  For any questions, please visit my [GitHub profile](https://github.com/${username}).
  
  For any additinal questions, please contact me through email at: ${email}`;
}

module.exports = generateMarkdown;
