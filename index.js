const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: `What is your project title?`,
    },
    {
      type: "input",
      name: "description",
      message: `Write a description for your project.`,
    },
    {
      type: "input",
      name: "installation",
      message: `Describe the installation process.`,
    },
    {
      type: "input",
      name: "usage",
    },
    {
      type: "input",
      name: "license",
    },
    {
      type: "input",
      name: "contributing",
    },
    {
      type: "input",
      name: "tests",
    },
    {
      type: "input",
      name: "questions",
    },
  ]);

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize program
function init() {

};

// function call to initialize program
init();
