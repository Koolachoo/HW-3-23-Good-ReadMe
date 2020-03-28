const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const something = require("./utils/moana.js")

inquirer.prompt(something).then(function ({ username, project, license, description, usage, install, test, contribute}) {


  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl).then(function ({ data }) {
    console.log(data);
    const avi = data.avatar_url;
    const email = data.email;
    let mark = `## URL 
    http://www.github.com/${username}
    ${avi}
    ## Title
    ${project}
    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [License](#license)
    * [Contributers](#contributers)
    * [Questions](#questions)
     ________________
     
    ##Description
    ${description}
    ## Installation
    This is what should be used to install any dependencies: ${install}
    ## Usage
    ${usage}
    ##Test
    This is how the code will be tested-
    ${test}
    ##License
    ${license}
    ##Contributors
    Here we give thanks to those that make the magic happen
    _________________
    ${contribute}
    _________________
    ## Questions
    Have any questions? Please ask by email

    *Contact the user of ${username} at: ${email}`;


    fs.writeFile("README.md", mark, function (err) {
      if (err) {
        throw err;
      }

      console.log("Successfully wrote to README.md file");
    });

  });

});