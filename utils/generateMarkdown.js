// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
    if (data.license = 'MIT') {
        const licenseLink = 'https://img.shields.io/badge/License-MIT-yellow.svg'
        return licenseLink;
    } else if (data.license = 'APACHE 2.0') {
        const licenseLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
        return licenseLink;
    } else if (data.license = 'GPL 3.0') {
        const licenseLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
        return licenseLink;
    } else if (data.license = 'BSD 3') {
        const licenseLink = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
        return licenseLink;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
        # ${data.title}
        ![GitHub license](${renderLicenseBadge(license)})

        ## Description
    
        ${data.description}

        ## Table of Contents
        
        * [Installation](#installation)

        * [Usage](#usage)

        * [License](#license)
        
        * [Contributing](#contributing)

        * [Tests](#tests)

        * [Questions](#questions)

        ## Installation
        To install necessary dependencies, run the following command:
        ${data.npmInstall}

        ## Usage
        ${data.addInfo}

        ## License
        This project is licensed under the ${data.license} license.

        ## Contributing
        ${data.contribute}

        ## Tests
        To run tests, run the following command:
        ${data.npmTests}

        ## Questions
        If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find mmore of my work at [${data.github}](https://www.github.com/ + ${data.github}).
`;
}

module.exports = generateMarkdown;