const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const something = require("./utils/moana.js")
const api = require("./utils/api.js")
const mark = require("./utils/generateMarkdown.js")



inquirer.prompt(something).then(function(data){
  fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err) {
  
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
})
// api
});
