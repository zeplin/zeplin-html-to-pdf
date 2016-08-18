/*
 * This module helps create error responses in predefined format.
 * These structured error messages are helpful especially if API Gateway is chosen as trigger to your Lambda function.
 * One could map each error message to HTTP response with desired status code and body.
 *
 * For detail information:
 * https://aws.amazon.com/blogs/compute/error-handling-patterns-in-amazon-api-gateway-and-aws-lambda/
 *
 */

var statusPrefix = {
    400: "[BadRequest]",
    500: "[ServerError]"
};

var error = {};

error.createErrorResponse = function (statusCode, message, error) {
    var prefix = statusPrefix[statusCode] || statusPrefix[500];
    var response = prefix + " " + message;

    if (error) {
        response += "\n" + error.stack;
    }

    return response;
};

module.exports = error;