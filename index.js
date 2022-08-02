const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = data => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: githubNameInput => {
                    if (githubNameInput) {
                        return true;
                    } else {
                        console.log('Please enter a GitHub username');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: projectNameInput => {
                    if (projectNameInput) {
                        return true;
                    } else {
                        console.log('Please enter a project name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project:',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a project description');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            {
                type: 'input',
                name: 'npmInstall',
                message: 'What command should be run to install dependencies?'
            },
            {
                type: 'input',
                name: 'npmTests',
                message: 'What command should be run to run tests?'
            },
            {
                type: 'input',
                name: 'addInfo',
                message: 'What does the user need to know about using this repo?'
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'What does the user need to know about contributing to the repo?'
            }
        ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README generated!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(writeToFile)
        
}

// Function call to initialize app
init();