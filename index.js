const fs = require("fs");
const { marked } = require("marked");

const markdown = fs.readFileSync("README.md", "utf8");
const template = fs.readFileSync("index.html", "utf8");
const html = marked.parse(markdown);

console.log(template.replace(/\_\_MARKDOWN\_\_/g, html));
