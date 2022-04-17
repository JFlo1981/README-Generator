function generateMarkdown(data) {
  return `<h1 align="center">${data.title}</h1>

![GitHub license](https://img.shields.io/badge/license-${data.licenses}-green.svg)
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Description
<p>${data.description}</p>

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Example

*To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. <br>
Then, using the relative filepath, replace this text using the following syntax:*

    ![alt text](assets/images/screenshot.png)

![alt text](assets/images/readme-screenshot.png)

## Installation
<p>${data.installation}</p>

## Usage
<p>${data.usage}</p>

## License
<p>This project is covered by the ${data.licenses} license.</p>

## Contributions
<p>This project was built by: ${data.contributions}</p>

## Tests
<p>${data.testing}</p>

## Questions
Check out my GitHub profile: [${data.GitHubName}](https://github.com/${data.GitHubName})
<br>
Or feel free to email me: ${data.email}
`
}

module.exports = generateMarkdown;