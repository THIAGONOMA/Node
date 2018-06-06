var net = require('net');
net.createServer(function(connection){
    connection.write('Ola, eu sou o Servidor');
    connection.on('data', function(message){
        console.log(message.toString());
    });
}).listen(3000);
