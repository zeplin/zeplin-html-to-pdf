const path = require("path");
process.env.PATH = `${process.env.PATH}:${path.join(__dirname, "..")}`;

const fs = require("fs");
const htmlToPdf = require("../index");
const [inputFile, outputFile] = process.argv.slice(2);

function callback(err, result) {
    if (err) {
        console.error(err);
        return;
    }

    /* eslint-disable no-sync */
    fs.writeFileSync(outputFile, Buffer.from(result.data, "base64"));
}

fs.readFile(inputFile, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    htmlToPdf.handler({ html: data.toString() }, null, callback);
});
