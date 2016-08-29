var fs = require("fs");
var Handlebars = require("handlebars");
var moment = require("moment");

var path = "./";

var DateFormats = {
    data: "DD MMMM YYYY",
    mese: "MMMM - YYYY"
};

Handlebars.registerHelper("formatDate", function(date) {
    moment.locale("it");
    if (moment) {
        // can use other formats like 'lll' too
        if (date.Day) {
            return moment(date.Year + "-" + date.Month + "/" + date.Day).format("DD MMM YYYY");
        }
        return moment(date.Year + "-" + date.Month + "/1").format("MMM YYYY");
    } else {
        return datetime;
    }
});

function render() {
    var resume = require("./europass-cv-it.json");

    var template = fs.readFileSync(path + "./template-it.hbs", "utf-8");
    var hb = Handlebars.compile(template);
    var html = hb({ resume: resume });
    fs.writeFileSync("./index.html", html);
}
render();