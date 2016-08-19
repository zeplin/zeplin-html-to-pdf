# zeplin-html-to-pdf
This is an AWS Lambda function that converts HTML pages to PDF documents using wkhtmltopdf.

It implements a simple interface to read and HTML input and output PDF content:

### Input
Input event to this function has the following structure: 
```
{
    "html": "<!DOCTYPE html><html><head><title>HTML doc</title></head><body>Content<body></html>"
}
```

### Output
It yields a response in the following format: 
```
{
  "data": "JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgKP7..."
}
```
`data` is base64 encoding of the converted PDF file. 

### Test in local environment
The function can be tested locally running `npm test` command. It requires input file name, which should be an existing HTML file and output file name for the generated PDF document. Example:
```
$ npm run -- test.html test.pdf
```

Note: Do not forget to update AWS region and lambda function name in deploy command
