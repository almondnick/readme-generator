// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {
    renderLicenseBadge,
    renderLicenseSection,
} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: [
            { name: 'MIT', value: 'MIT' },
            { name: 'Apache', value: 'Apache' },
            { name: 'None', value: 'None' },
        ],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

function createReadMe(answers) {
    const readMeContent = `
    # ${answers.title} ${renderLicenseBadge(answers.license)}
    
    ## Description
    
    ${answers.description}
    
    ## Table of Contents
    
    1. [Installation] (#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributions](#contributions)
    5. [Tests](#tests)
    6. [Questions](#questions)
    
    ## Installation 

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## License

    ${renderLicenseSection(answers.license)}

    ## Contributions

    ${answers.contributions}

    ## Tests

    ${answers.test}

    ## Contact Me

    Github: (https://github.com/${answers.github})
    Email: ${answers.email}`;
    
    return readMeContent;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README Created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMeContent = createReadMe(answers);
        writeToFile('README.md', readMeContent);
    });
}

// Function call to initialize app
init();