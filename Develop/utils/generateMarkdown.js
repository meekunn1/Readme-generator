// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const choice = data.license
    if (choice === 'none') {
      return``
    }
    else if (choice === 'Apache 2.0') {
      return`
## License
  
[![license](https://img.shields.io/badge/License-Apache%202.0-orange)](https://choosealicense.com/licenses/apache-2.0/)
`
    }
    else if (choice === 'GNU v3.0') {
      return`
## License
  
[![license](https://img.shields.io/badge/License-GNU%20v3.0-red)](https://choosealicense.com/licenses/gpl-3.0/)
`
    }
    else if (choice === 'MIT') {
      return`
## License
  
[![license](https://img.shields.io/badge/License-MIT-green)](https://choosealicense.com/licenses/mit/)
`
    }
    else {
      console.log('error at renderLicenseBadge');
      return
    }
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
function generateMarkdown(data) {
const list = data
  const licenseBadge = renderLicenseBadge(list);
  const licenseSection = renderLicenseSection(list);
  return `# ${list.fileName.trim()}

## Description

${list.description.trim()}

## Table of Contents

- [${list.fileName.trim()}](#${list.fileName.trim().toLowerCase().replace(/\s+/g, '-')})
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)${licenseSection}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

${list.installation.trim()}

## Usage

${list.usage.trim()}
${licenseBadge}
## Contributing

${list.contribution.trim()}

## Tests

${list.tests.trim()}

## Questions

For any questions, please visit my [GitHub profile](https://github.com/${list.username.trim()}).

For any additinal questions, please contact me through email at: ${list.email.trim()}`;
}

module.exports = generateMarkdown;
