process.env.PATH = process.env.PATH + ":" + process.env.LAMBDA_TASK_ROOT;

var wkhtmltopdf = require("./utils/wkhtmltopdf");
var errorUtil = require("./utils/error");

exports.handler = function handler(event, context, callback) {
    if (!event.html) {
        var errorResponse = errorUtil.createErrorResponse(400, "Validation error: Missing field 'html'.");

        callback(errorResponse);
        return;
    }

    wkhtmltopdf(event.html)
        .then(function (buffer) {
            callback(null, {
                data: buffer.toString("base64")
            });
        }).catch(function (error) {
            callback(errorUtil.createErrorResponse(500, "Internal server error", error));
        });
};
