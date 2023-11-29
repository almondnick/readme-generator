// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This application is covered under the [MIT License](https://opensource.org/licenses/MIT).';
  } else if (license === 'Apache') {
    return 'This application is covered under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).';
  } else {
    return '';
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
};