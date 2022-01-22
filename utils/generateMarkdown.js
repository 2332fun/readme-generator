function renderLicenseBadge(license) {
  //if the license is not empty; return with shield url
  if (license != '') {
    return `![github license](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    //else if it is empty; return blank
    return '';
  }
}



function renderLicenseLink(license) {
  if (license != ''){
    //If license is not empty, print below in README.md
    return `* [License](#license)`
  } else {
    //else if it is empty; return blank
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != '') {
    //if license is not empty, print below in the license section in the README.md
    return `## License
    ${license}
    Licensed software establishes the rights of all parties involved with the software, including: the author, the provider, and end users. Licenses protect intellectual properties by limiting the liability of the vendor and limiting what other parties can do with covered software code.`
  } else {
    //else if it is empty; return blank
    return '';
  }
}

function renderTestLink(tests) {
  if (tests != '') {
    //if tests is not empty, print below in the README.md
    return `* [Tests](#tests)`
  } else {
    //else if it is empty, return blank
    return '';
  }
}

function renderTestSection(tests) {
  if (tests != '') {
    //if tests is not empty, print below in the tests section in the README.md
    return `## Tests
    ${tests}`
  } else {
    //else if it is empty, return blank
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  ${renderTestLink(data.tests)}
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
