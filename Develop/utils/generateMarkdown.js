const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const something = require("./utils/moana.js")
const api = require("./utils/api.js")

const mark = function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = mark;
