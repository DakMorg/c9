const inquirer = require("inquirer");
const fs = require("fs");

//===============//

const generateReadme = ({ Title, Description,  Instalation, Usage, License, Contributing, Tests, Github, Email }) =>
    ` 
## ${Title}
=================

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description

${Description}

## Instalation

${Instalation}

## Usage

${Usage}

## Licence

${License}

## Contributing

${Contributing}

## Tests

${Tests}

## Questions

If you have any questions...

Here is a link to my github profile.
https://github.com/${Github}

Here is my email address. 
${Email}
`;

//==============//

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project? ',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Give a breif description of your project. ',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What is your projects instalation process? ',
            name: 'Instalation',
        },
        {
            type: 'input',
            message: 'What is your projects usage? ',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'List your licenses. ',
            name: 'License',
        },
        {
            type: 'input',
            message: 'list contributing. ',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'list your projects tests. ',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'Please your github username. ',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'Please your email address. ',
            name: 'Email',
        },
    ])

    //=====================//

    .then((response) => {
        const readMeContent = generateReadme(response);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.error(err) : console.log('Your ReadMe has been successfully generated!')
        );
    });
