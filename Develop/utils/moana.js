
const something = [{
    message: 'Enter your GitHub username: ',
    name: 'username'
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "project"
      },
      {
        type: "input",
        message: "Give a short description of your project.",
        name: "description"
      },
    
    {
      type: "input",
      message: "How will this repo be used?",
      name: "usage"
    },
    {
      type: "input",
      message: "What will you use to test the code?",
      name: "test"
    },
    {
      message: "How would you install the modules?",
      default: "npm install",
      type: "input",
      name: "install"
  },
  {
    message: "Which of the recommended licenses are you going to use?",
    type: "list",
    name: "license",
    choices: [
      "MIT",
      "BSD",
      "X11",
      "ISC"
    ]
  },
  {
    type: "input",
    message: "List names of contributors here",
    name: "contribute"
  },]


      module.exports = something;