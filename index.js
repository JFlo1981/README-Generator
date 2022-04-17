// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Include packages needed for this application
const { error } = require('console');
const { response } = require('express');
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./Develop/utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of you project. Motivation? Why did you build it? What problems did you encounter? What did you learn? (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the description!');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'What steps are required to install and run the project? (when finished entering data, close the window and "save")',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will this project be used? Target users? (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter some usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Who helped build the project? (required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter contributions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How will the project be tested? (required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What license would you like to add to this project? (',
            choices: ['ISC', 'MIT', 'Mozilla', 'WTFPL']
        },
        {
            type: 'input',
            name: 'GitHubName',
            message: 'What is you Github user name? (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is you email address? (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }

    ])
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (error) => {
        if(error) {
        console.log(error);
        }
    })
}

// Function to initialize app
function init() {
    questions().then(response => {
        console.log(response);
        const markdownData = generatePage(response);
        // console.log(markdownData);
        return markdownData;
    })
    .then(runPage => {
        console.log(runPage);
        writeToFile("README.md", runPage)
    })
};

// Function call to initialize app
init();