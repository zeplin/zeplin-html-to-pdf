process.env.PATH = `${process.env.PATH}:${process.env.LAMBDA_TASK_ROOT}`;
const wkhtmltopdf = require("./utils/wkhtmltopdf");
const errorUtil = require("./utils/error");

exports.handler = function handler(event, context, callback) {
    if (!event.html) {
        const errorResponse = errorUtil.createErrorResponse(400, "Validation error: Missing field 'html'.");

        callback(errorResponse);
        return;
    }

    wkhtmltopdf(event.html)
        .then(buffer => {
            callback(null, {
                data: buffer.toString("base64")
            });
        }).catch(error => {
            callback(errorUtil.createErrorResponse(500, "Internal server error", error));
        });
};

//  docker build -t html-pdf-node-10 . 
// docker run -ti html-pdf-node-10 /bin/bash

// docker run --rm -v "$PWD":/var/task lambci/lambda:nodejs8.10 index.handler '{"html": "<html>doruk</html>"}'
// docker run --rm -v "$PWD":/var/task lambci/lambda:nodejs10.x index.handler '{"html": "<html>doruk</html>"}'