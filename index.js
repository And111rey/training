var fs = require('fs');


//****************************************************** */

var http= require("http");
var server = http.createServer(function (req, res) {
    console.log("URL this page: " + req.url);
    res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
    //
    var myReadShort = fs.createReadStream(__dirname +'/index.html', 'utf8');
    
    myReadShort.pipe(res);

   
});
server.listen(3000, "127.0.0.1");
console.log("Server working");
