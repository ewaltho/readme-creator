// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer')
const writeReadme = (name, description, usage, license, credits, test, installation, badgeLeft, badgeRight, badgeColor) => {
    return`
# ${name}

## Description
${description}

## Badge 
![${badgeLeft} badge](https://img.shields.io/badge/${badgeLeft}-${badgeRight}-${badgeColor}.svg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests) 

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Tests
${test}
    `
}

// TODO: Create an array of questions for user input
inquire.prompt ([
        { 
            type: 'input',
            message: 'What is your project called?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Provide a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How is your app installed?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide a usage statement for your project.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who gains credit for this project?',
            name: 'credits'
        },
        {
            type: 'list',
            message: 'What license does your project utilize?',
            name: 'license',
            choices: ['N/A','MIT','Creative Commons Universal', 'Eclipse 2.0']
        },
        {
            type: 'input',
            message: 'What tests can users run on your project, if any?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'Create a badge. What is on the left side?',
            name: 'badgeLeft'
        },
        {
            type:'input',
            message: 'What is on the right side of the badge?',
            name: 'badgeRight'
        },
        {
            type: 'list',
            message: 'Which color would you like your badge to be?',
            name: 'badgeColor',
            choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
        }
    ])
    .then(response => {
        fs.writeFile('GenREADME.md', writeReadme(response.name, 
            response.description, 
            response.usage, 
            response.license, 
            response.credits, 
            response.test, 
            response.installation,
            response.badgeLeft,
            response.badgeRight,
            response.badgeColor), (err)=> {
            if (err) {
                console.log("error");
            } else {
                console.log("saved")
            }
        })
    });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
