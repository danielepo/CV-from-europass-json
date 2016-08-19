var fs = require("fs");
var Handlebars = require("handlebars");

var path = "./";

function render() {
    var resume = require("./europass-cv-it.json");

    var template = fs.readFileSync(path + "./template.html", "utf-8");
    var hb = Handlebars.compile(template);
    var html = hb({ resume: resume });
    fs.writeFileSync("./index.html", html);
}
render();