var spawn = require("child_process").spawn;

wkhtmltopdf = function (html, options) {
    options = options || [];

    return new Promise(function (resolve, reject) {
        var bufs = [];
        var proc = spawn("/bin/sh", ["-o", "pipefail", "-c", "wkhtmltopdf " + options.join(" ") + " - - | cat"]);

        proc.on("error", function (error) {
            reject(error);
        }).on("exit", function (code) {
            if (code) {
                reject(new Error("wkhtmltopdf process exited with code " + code));
            } else {
                resolve(Buffer.concat(bufs));
            }
        });

        proc.stdin.end(html);

        proc.stdout.on("data", function (data) {
            bufs.push(data);
        }).on("error", function (error) {
            reject(error);
        });
    });
};

module.exports = wkhtmltopdf;
