// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateLicenseBadge(license) {

  //converts - to % to allow viewing in url
  const licenseName = encodeURIComponent(license.replace('-', ' '))
  return `!${license}(https://img.shields.io/badge/License-${licenseName}-green)`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  license,
  github
}) {
  
  return `
  
  # ${title}
  ${generateLicenseBadge(license)}
  
  ## Description
  blah blah
  
  ##Contact
  Visit my GitHub Profile here: [${github}] (https://github.com/[${github}])
  `;
}

module.exports = generateMarkdown;



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}