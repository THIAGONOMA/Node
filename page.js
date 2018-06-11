var http = require('http');

http.createServer(function(req,res){
    res.write(
        '<html>'+
            '<head>'+
                '<title>Hello World Teste</title>'+
            '</head>'+
            '<body>'+
                '<h1>NODE É FODA</h1>'+
            '</body>'+
        '</html>'
    );
}).listen(3412);