/*
 * This module helps create error responses in predefined format.
 * These structured error messages are helpful especially if API Gateway is chosen as trigger to your Lambda function.
 * One could map each error message to HTTP response with desired status code and body.
 *
 * For detail information:
 * https://aws.amazon.com/blogs/compute/error-handling-patterns-in-amazon-api-gateway-and-aws-lambda/
 *
 */

const statusPrefix = {
    400: "[BadRequest]",
    500: "[ServerError]"
};

const error = {};

error.createErrorResponse = function (statusCode, message, err) {
    const prefix = statusPrefix[statusCode] || statusPrefix[500];
    let response = `${prefix} ${message}`;

    if (err) {
        response += `\n${err.stack}`;
    }

    return response;
};

module.exports = error;