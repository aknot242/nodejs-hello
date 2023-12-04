//now it load express module with `require` directive
var express = require('express')
var app = express()

function if_header_defined_return(request, headerName) {
    return request.header('X-Forwarded-For') != undefined ? `${headerName}: ${request.header(headerName)}` : ''
}

//Define request response in root URL (/) and response with text Hello World!
app.get('/', function (req, res) {
    res.send(`Hello, ${process.env.NAME}!<br>&nbsp;<br>&nbsp;<br>\
    <h3>Defined Proxy Headers</h3>\
    ${if_header_defined_return(req, 'X-Forwarded-For')}<br>\
    ${if_header_defined_return(req, 'X-Forwarded-Port')}<br>\
    ${if_header_defined_return(req, 'X-Forwarded-Proto')}<br>\
    ${if_header_defined_return(req, 'X-Forwarded-Host')}<br>`)
})
//Launch listening server on port 8080 and consoles the log.
app.listen(8080, function () {
    console.log('app listening on port 8080!')
})