// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const choice = data.license
  console.log("from renderLicenseBadge " + choice + "\nend")
    if (choice === 'none') {
      // list.licenseBadge = 
      return``
    }
    else if (choice === 'Apache 2.0') {
      // list.licenseBadge = 
      return`
  ## License
  
  [![license](https://img.shields.io/badge/License-Apache%202.0-orange)](https://choosealicense.com/licenses/apache-2.0/)
  `
    }
    else if (choice === 'GNU v3.0') {
      // list.licenseBadge = 
      return`
  ## License
  
  [![license](https://img.shields.io/badge/License-GNU%20v3.0-red)](https://choosealicense.com/licenses/gpl-3.0/)
  `
    }
    else if (choice === 'MIT') {
      // list.licenseBadge = 
      return`
  ## License
  
  [![license](https://img.shields.io/badge/License-MIT-green)](https://choosealicense.com/licenses/mit/)
  `
    }
    else {
      console.log('error at renderLicenseBadge');
      return
    }
    // renderLicenseSection(answers);
    // return console.log("3rd call" + list)
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const choice = data.license
    if (choice === 'none') {
      return``
    }
    else {
      return`
    - [License](#license)`
    }
}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(data) {
const list = data
    console.log(list);
    console.log(list.license);
  // {fileName, description, installation, usage, license, contribution, tests, username, email}
  const licenseBadge = renderLicenseBadge(list);
  const licenseSection = renderLicenseSection(list);
  console.log(licenseBadge);
  console.log(licenseSection);
  return `# ${list.fileName}

  ## Description
  
  ${list.description}
  
  ## Table of Contents
  
  - [SampleTitle](#sampletitle)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)${licenseSection}
    - [How to Contribute](#how-to-contribute)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
  
  ${list.installation}
  
  ## Usage
  
  ${list.usage}
  ${licenseBadge}
  
  ## How to Contribute
  
  ${list.contribution}
  
  ## Tests
  
  ${list.tests}
  
  ## Questions
  
  For any questions, please visit my [GitHub profile](https://github.com/${list.username}).
  
  For any additinal questions, please contact me through email at: ${list.email}`;
}

module.exports = generateMarkdown;
