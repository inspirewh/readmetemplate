//import inquirer
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');

// TGOALS: Generate a readme file for future projects

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
        name: 'licence',
        choices: [
            'MIT', 'GPL-v2', 'Apache-v2', 'No license', 
        ]
    },
    {
        type: 'input',
        message: "github username",
        name: 'github username',
    }
]).then((ans) => {
    console.log(ans);
    const markdown = generateMarkdown(ans);

    console.log(markdown);
})





//once asked
//generate readme file based on the responses
//in the output folder


