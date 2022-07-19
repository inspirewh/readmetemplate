// TGOALS: Generate a readme file for future projects
//import inquirer
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');
const fs = require('fs/promises');
const parth = require('path');


//Questions to ask:
//What is the project title:
//license
//github
// description, installation instructions, usage information, contribution guidelines, and test instructions
// email
//github

inquirer.prompt([
    {
        type: 'input',
        message: "Project Title",
        name: 'title',
    },
    {
        type: 'list',
        message: "license",
        name: 'license',
        choices: [
            'MIT', 'GPL-v2', 'Apache-v2', 'No license', 
        ]
    },
    {
        type: 'input',
        message: "Description",
        name: 'description',
    },
    {
        type: 'input',
        message: "Installation",
        name: 'description',
    },
    {
        type: 'input',
        message: "Usage",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Contribution",
        name: 'contribution',
    },
    {
        type: 'input',
        message: "Test Instructions",
        name: 'test',
    },
    
    {
        type: 'input',
        message: "github",
        name: 'github',
    }
    {
        type: 'input',
        message: "email",
        name: 'email',
    }

]).then((ans) => {
    console.log(ans);
    const markdown = generateMarkdown(ans);
    
    //once asked
    //generate readme file based on the responses
    //in the output folder

    const outputPath = path.join(__dirname,'output', 'generated.md');

    fs.writeFile(outputPath, markdown, 'utf-8')
        .then(() => {
            console.log('generated!')
        });

})









