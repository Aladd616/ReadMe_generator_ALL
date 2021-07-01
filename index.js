// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

// const questions = [];
const generateMD = (data) =>

// template literal for the mark down file
`# ${data.title}

## Description

${data.description}

#### Table of Contents

[Instillation](##Instillation)
[Usage](##Usage)
[License](##License)
[Contributing](##Contributing)
[Tests](##Tests)
[Questions](##Questions)

## Instillation

This module requires the following modules:
${data.inst}

## Usage

${data.usage}

## License

This project is covered under license ${data.license}

## Contributing

The names listed below were the contributors in this project
${data.cont}

## Tests

${data.tests}

## Questions

GitHub 
[${data.github}](https://github.com/${data.github})

Email
${data.email}
Send an email to the email listed using the subject line "Questions about ${data.title}" and I will answer any and all questions in a timely fashion.

`
// questions using inquirer to fill in the mark down file
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a comprehensive description of your project',
        },
        {
            type: 'input',
            name: 'inst',
            message: 'What must be installed in order to run this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Who is this project for and when should it be used?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license was used in the construction of this project?',
            choices: ['BSD', 'MIT', 'GLP']
        },
        {
            type: 'input',
            name: 'cont',
            message: 'Who worked on this project with you?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Explain the testing procedures used in this project, including explaining libraries and the necessary commands to test this project',
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your complete GitHub user name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What email can be used to contact you'
        },
    
    ])
    
    // the expression that creates the markdown file after hte questions are filled in
    . then ((data) => {
        const MdPageContent = generateMD(data);
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;

        // writeToFile(fileName, MdPageContent)

        fs.appendFile(fileName, MdPageContent, (err) => err ? console.log(err) : console.log('Successfully generated readme markdown file'));

    })
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile(fileName, data, (err) => err ? console.log(err) : console.log('Successfully generated readme markdown file'));
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
