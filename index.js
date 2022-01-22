//Packages Needed to Run:
//const inquirer required to run the inquirer package
const inquirer = require('inquirer');

//const fs required to run node.js fs module
const fs = require('fs');

//const path module required for file and directory pathing
const path = require('path');

//const generateMarkdown required for connecting index.js to generateMarkdown.js
const generateMarkdown = require ('./utils/generateMarkdown');

//question array for obtaining user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Project name?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe your project.'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Installation instructions.'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How is your project used?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose license(s).',
        choices: ['', 'Apache', 'GNU', 'MIT', 'BSD', 'Boost', 'Creative', 'Eclipse', 'Mozilla', 'The Unlicense']
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'How can others contribute?'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Any tests?'
    },
    {
        name: 'github',
        input: 'input',
        message: 'Enter your github username.'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address.'
    },
];

//Function that writes README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

//Function that initializes app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.log(answers.title);
        writeToFile('newReadme.md', generateMarkdown({...answers}))
    })
}

// Function call that initializes the app
init();


