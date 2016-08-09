var path = require("path");

process.env.PATH = process.env.PATH + ":" + path.join(__dirname, "..");

var fs = require("fs");
var htmlToPdf = require("../index");

var cmdArgs = process.argv.slice(2);
var inputFile = cmdArgs[0];
var outputFile = cmdArgs[1];

function callback(err, result) {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFileSync(outputFile, new Buffer(result.data, "base64"));
}

fs.readFile(inputFile, function (err, data) {
    htmlToPdf.handler({ html: data.toString() }, null, callback);
});
