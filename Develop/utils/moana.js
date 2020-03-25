
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
        type: "list",
        message: "What is the table of contents",
        name: "ToC",
        choices: [
            "One",
            "Two",
            "Three"
        ]
      }]


      module.exports = something;