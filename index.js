const fs = require("fs");
const { marked } = require("marked");
const package = JSON.parse(fs.readFileSync("package.json", "utf8"));

const markdown = fs.readFileSync("README.md", "utf8");
const template = fs.readFileSync("index.html", "utf8");
const html = marked.parse(markdown);
const compiled = template
  .replace(/\_\_MARKDOWN\_\_/g, html)
  .replace(/\_\_VERSION\_\_/g, package.version);

console.log(compiled);
